import { useState } from "react";
import Button from "../common/components/Button";
import TextInput from "../common/components/TextInput";
import { elementListState, ListType } from "../atom/mainAtom";
import { useAtom } from "jotai";

export const Component = ({ name }: { name: string }) => {
  const [elementList, setElementList] = useAtom(elementListState);
  const [element, setElement] = useState("");

  const handleElementChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setElement(e.target.value);
  };

  const submitElement = () => {
    if (!element) return;

    setElementList((prev) => {
      const outer = new Map(prev);
      const inner = new Map(outer.get(name) ?? []);

      if (inner.has(element)) return prev; // ❗ 추가 안 함

      inner.set(element, { type: "temp" });
      outer.set(name, inner);

      return outer;
    });

    setElement("");
  };

  return (
    <div className="mb-4 border p-5">
      <div className="flex flex-row items-center mb-2">
        <p className="text-lg mr-2">{name}</p>
        <TextInput
          direction="left"
          placeholder="요소 입력"
          value={element}
          onChange={handleElementChange}
          onKeyDown={(e) => e.key === "Enter" && submitElement()}
        />
        <Button direction="right" text="확인" onClick={() => submitElement()} />
      </div>

      <div className="flex flex-row">
        {Array.from(elementList.get(name)?.entries() ?? []).length ? (
          Array.from(elementList.get(name)?.entries() ?? []).map(
            ([elementName, meta]) => (
              <div className="border px-4 py-1 flex flex-col" key={elementName}>
                <span className="text-lg">{elementName}</span>

                <div className="flex">
                  <label className="mr-2">데이터 유형</label>
                  <select
                    className="border rounded text-white bg-black outline-none"
                    value={meta.type}
                    onChange={(e) => {
                      const newType = e.target.value as ListType;

                      setElementList((prev) => {
                        const outer = new Map(prev);
                        const inner = new Map(outer.get(name) ?? []);

                        inner.set(elementName, { ...meta, type: newType });
                        outer.set(name, inner);

                        return outer;
                      });
                    }}
                  >
                    <option value="temp">Temporary</option>
                    <option value="payload">Payload</option>
                  </select>
                </div>

                {meta.type === "payload" && (
                  <div className="flex">
                    <label className="mr-2">데이터 그룹</label>
                    <select className="border rounded text-white bg-black outline-none">
                      {/* payload 옵션 */}
                    </select>
                  </div>
                )}
              </div>
            ),
          )
        ) : (
          <div>요소가 없습니다.</div>
        )}
      </div>
    </div>
  );
};
