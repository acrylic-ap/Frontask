### Components

> Map<string, ComponentItem>

- Key는 Element 혹은 Group이 사용되는지 알려 주며, 타입은 string이다.

### ComponentItem

{
  elementKey: Set<ElementKey>,
  groupKey: Set<GroupKey>
}

#### Elements

> Map<string, { type: ElementType, group: ElementGroupKey }>

- ElementType는 변수가 어떻게 사용되는지 결정되며, 타입은 "temp" | "state" | "payload" | "constant"이다.
- ElementGroupKey는 payload일 경우에 어떤 그룹에 속하는지 나타낸다.

### Groups

> Map<string, Set<ElementKey>>

- Groups는 type이 payload 형식일 때 동일한 payload끼리 묶어 주는 변수이다.

### 주의점

- 여기에 있는 Map 전부 겹치지 않게 막는 로직 필요
