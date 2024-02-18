import { Technique } from './main.ts'
import { TechniqueKind, TechniqueStatus } from './constants.ts'

export const PASCH1technique: Technique [] = [
  {
    id: 1,
    kind: TechniqueKind.Main,
    name: 'AC-10.0',
    status: TechniqueStatus.Ready,
    crew: []
  },
  {
    id: 2,
    kind: TechniqueKind.Main,
    name: 'AC-5.0',
    status: TechniqueStatus.Reserve,
    crew: []
  },
  {
    id: 3,
    kind: TechniqueKind.Main,
    name: 'AC-131',
    status: TechniqueStatus.Ready,
    crew: []
  },
  {
    id: 4,
    kind: TechniqueKind.Main,
    name: 'AC-131',
    status: TechniqueStatus.Repair,
    crew: []
  },
  {
    id: 5,
    kind: TechniqueKind.Special,
    name: 'AL-30-131',
    status: TechniqueStatus.Ready,
    crew: []
  },
]

export const PASP11technique: Technique[] = [
  {
    id: 11,
    kind: TechniqueKind.Main,
    name: 'AC-Ural',
    status: TechniqueStatus.Ready,
    crew: []
  },
  {
    id: 12,
    kind: TechniqueKind.Main,
    name: 'AC-131',
    status: TechniqueStatus.Ready,
    crew: []
  },
  {
    id: 13,
    kind: TechniqueKind.Main,
    name: 'AC-131',
    status: TechniqueStatus.Reserve,
    crew: []
  },
]
