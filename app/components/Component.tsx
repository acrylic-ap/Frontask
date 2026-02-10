import { useState } from "react";
import Button from "../common/components/Button";
import TextInput from "../common/components/TextInput";
import { elementListState } from "../atom/mainAtom";
import { useAtom } from "jotai";

export const Component = ({ name }: { name: string }) => {
  const [elementList, setElementList] = useAtom(elementListState);
  const [element, setElement] = useState("");

  const handleElementChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setElement(e.target.value);
  };

  const submitElement = () => {
    if (!element) return;

    setElementList((item) => {
      if (!item.has(name)) return item.set(name, [element]);
      else return item.set(name, [...(item.get(name) || []), element]);
    });

    setElement("");
  };

  const [dataType, setDataType] = useState("temp");

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
        {elementList?.get(name)?.length ? (
          elementList?.get(name)?.map((item, index) => (
            <div
              className="border px-4 py-1
            flex flex-col"
              key={index}
            >
              <text className="text-lg">{item}</text>

              <div className="flex">
                <label className="mr-2">데이터 유형</label>
                <select
                  className="border rounded
                text-white bg-black
                outline-none"
                  value={dataType}
                  onChange={(e) => setDataType(e.target.value)}
                >
                  <option value="temp" selected>
                    Temporary
                  </option>
                  <option value="payload">Payload</option>
                </select>
              </div>
              {dataType === "payload" && (
                <div className="flex">
                  <label className="mr-2">데이터 그룹</label>
                  <select
                    className="border rounded
                text-white bg-black
                outline-none"
                    value={dataType}
                    onChange={(e) => setDataType(e.target.value)}
                  >
                    {}
                  </select>
                </div>
              )}
            </div>
          ))
        ) : (
          <div>요소가 없습니다.</div>
        )}
      </div>
    </div>
  );
};
