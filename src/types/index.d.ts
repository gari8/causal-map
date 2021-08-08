import { IConnection, INode } from 'vue-mindmap'

export interface MapItemSet {
  mapTitle: string
  nodes?: INode[]
  connections?: IConnection[]
}
