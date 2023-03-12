// global kullanım sağlayan dosya burada tutarsak diğer componentlerde direkt kullanabiliriz
//.d.tx uzantısı ile oluyor

interface TodoType {
    id: string  | number;
    task: string;
    isDone: boolean;
}