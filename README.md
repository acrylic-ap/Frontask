### Components

> Map<string, ComponentItem>

- Key는 Element 혹은 Group이 사용되는지 알려 주며, 타입은 string이다.

#### ComponentItem

{
  elementKey: Set<ElementKey>,
  groupKey: Set<GroupKey>
}

### Elements

> Map<string, ElementItem>

#### ElementItem

{
role: ElementRole,
group?: string,
type: string,
example: string
}

- ElementRole은 변수가 어떻게 사용되는지 결정되며, 타입은 "temp" | "state" | "payload" | "constant"이다. 기본은 temp이다.
- group은 payload일 경우에 어떤 그룹에 속하는지 나타낸다.
- type은 변수의 자료형을 나타내며, 타입은 "string" 등이 있다(그냥 js 자료형을 모두 포괄해서).
- 이 변수의 역할을 안내하는 example이 있다.

### Groups

> Map<string, Set<ElementKey>>

- Groups는 type이 payload 형식일 때 동일한 payload끼리 묶어 주는 변수이다.

### 주의점

- 여기에 있는 Map 전부 겹치지 않게 막는 로직 필요
