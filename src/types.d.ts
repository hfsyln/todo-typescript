// global kullanım sağlayan dosya burada tutarsak diğer componentlerde direkt kullanabiliriz
//.d.tx uzantısı ile oluyor

interface TodoType {
    id: string  | number;
    task: string;
    isDone: boolean;
}

interface ITodoList {
    todos:TodoType[];
    toggleTodo:ToggleFn;
    deleteTodo:DeleteFn;
}

type AddFn = (text:string) => void; //değer döndürmüyor işlem yapan bi fonk old için void oldu
type ToggleFn = (item:TodoType) => void;
type DeleteFn = (id: string | number) => void;