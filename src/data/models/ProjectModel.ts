import { ImageModel } from './ImageModel'

export type ProjectModel = {
  name: string
  img: ImageModel
  description: string
  repositoryUrl: string
  productionUrl: string | null
}
