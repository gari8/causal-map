declare module 'vue-mindmap' {
  export interface INode {
    text: string
    url?: string
    fx: number
    fy: number
    category?: string
    note?: string
  }

  export interface IConnection {
    source: string
    target: string
    curve?: {
      x?: number
      y?: number
    }
  }
}
