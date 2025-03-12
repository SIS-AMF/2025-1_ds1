#### type assertion 

```ts
let numero: number = <number>valor; // Type assertion usando sintaxe Angular-like
let texto: string = valor as string; // Type assertion usando sintaxe 'as'
```

#### type alias


```ts
type ID = number | string;
```

#### union types


```ts
type UserRole = "admin" | "editor" | "viewer";
```


#### insertion types

```ts
type Person = {
  name: string;
};

type Employee = {
  employeeId: number;
};

type Manager = Person & Employee;

const manager: Manager = {
  name: "Alice",
  employeeId: 1,
};
```

