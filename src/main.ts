import './style.css'
import { PASCH1, PASP11 } from './staffList.ts'
import { PASCH1technique, PASP11technique } from './technique.ts'
import { TechniqueKind, TechniqueStatus } from './constants.ts'

type DistrictDepartment = {
  id: number,
  region: string,
  management: Management,
  departments: FireDepartment[]
}

type Management = {
  boss: Staff
  deputy: Staff
}

enum Unit {
  Department = 'department',
  Post = 'post'
}

type FireDepartment = {
  id: number
  subdivision: Unit
  title: string,
  locality: string
  boss: Staff
  personnel: Staff[]
  technique: Technique[]
}

export type Staff = {
  id: number
  position: string
  rank: string,
  name: string
  combatNumber?: number
}

export type Technique = {
  id: number,
  kind: TechniqueKind
  name: string
  status: TechniqueStatus
  crew: Staff[]
}

let regionalAdministration: DistrictDepartment[] = [
  {
    id: 1,
    region: 'Buda-Koshelevo',
    management: {
      boss: {
        id: 9,
        name: 'Haldai S.A.',
        position: 'boss',
        rank: 'lieutenant colonel'
      },
      deputy: {
        id: 10,
        name: 'Protchenko V.A.',
        position: 'deputy of chief',
        rank: 'major'
      }
    },
    departments: []
  }
]

regionalAdministration = regionalAdministration.map((department) =>
  department.region === 'Buda-Koshelevo'
    ? {
      ...department, departments: [
        {
          id: 1,
          subdivision: Unit.Department,
          locality: 'Buda-Koshelevo city',
          title: 'PASCH-1',
          boss: { id: 11, rank: 'captain', position: 'chief of department', name: 'Malashkov A.S.' },
          personnel: [],
          technique: []
        }]
    }
    : department
)

regionalAdministration = regionalAdministration.map((department) =>
  department.region === 'Buda-Koshelevo'
    ? {
      ...department, departments: department.departments.map((fireDepartment) =>
        fireDepartment.title === 'PASCH-1'
          ? {
            ...fireDepartment, personnel: [
              {
                id: 11,
                rank: 'senior lieutenant',
                name: 'Schukin U.S.',
                position: 'duty shift supervisor',
                combatNumber: 1
              }
            ]
          }
          : fireDepartment
      )
    }
    : department
)

regionalAdministration = regionalAdministration.map((department) =>
  department.region === 'Buda-Koshelevo'
    ? {
      ...department, departments: department.departments.map((fireDepartment) =>
        fireDepartment.title === 'PASCH-1'
          ? {
            ...fireDepartment, personnel: [...fireDepartment.personnel,
              {
                id: 12,
                name: 'Zaicev A.A.',
                rank: 'ensign',
                position: 'senior instructor rescuer',
                combatNumber: 2
              }]
          }
          : fireDepartment
      )
    }
    : department
)

regionalAdministration = regionalAdministration.map((department) =>
  department.region === 'Buda-Koshelevo'
    ? {
      ...department, departments: [...department.departments, {
        id: 3,
        title: 'PASP-11',
        locality: 'Derbichi village',
        subdivision: Unit.Post,
        boss: {
          id: 1111,
          rank: 'senior lieutenant',
          name: 'Borodin A.A.',
          position: 'post commander'
        },
        personnel: [],
        technique: []
      }]
    }
    : department
)

regionalAdministration = regionalAdministration.map((districtDepartment) =>
  districtDepartment.region === 'Buda-Koshelevo'
    ? {
      ...districtDepartment, departments: districtDepartment.departments.map((department) =>
        department.title === 'PASCH-1'
          ? {
            ...department,
            personnel: [...department.personnel, ...PASCH1],
            technique: [...department.technique, ...PASCH1technique]
          }
          : department
      )
    }
    : districtDepartment
)

regionalAdministration = regionalAdministration.map((districtDepartment) =>
  districtDepartment.region === 'Buda-Koshelevo'
    ? {
      ...districtDepartment, departments: districtDepartment.departments.map((department) =>
        department.title === 'PASP-11'
          ? {
            ...department,
            personnel: [...department.personnel, ...PASP11],
            technique: [...department.technique, ...PASP11technique]
          }
          : department
      )
    }
    : districtDepartment
)

regionalAdministration = regionalAdministration.map((districtDepartment) =>
  districtDepartment.region === 'Buda-Koshelevo'
    ? {
      ...districtDepartment, departments: districtDepartment.departments.map((department) =>
        department.title === 'PASCH-1'
          ? {
            ...department, technique: department.technique.map((technique) =>
              technique.status === TechniqueStatus.Ready && technique.name === 'AC-10.0'
                ? {
                  ...technique, crew: [...technique.crew, ...department.personnel.filter((person) =>
                    person.combatNumber === 1
                  )]
                }
                : technique
            )
          }
          : department
      )
    }
    : districtDepartment
)

regionalAdministration = regionalAdministration.map((districtDepartment) =>
  districtDepartment.region === 'Buda-Koshelevo'
    ? {
      ...districtDepartment, departments: districtDepartment.departments.map((department) =>
        department.title === 'PASCH-1'
          ? {
            ...department, technique: department.technique.map((technique) =>
              technique.status === TechniqueStatus.Ready && (technique.name === 'AL-30-131' || technique.name === 'AC-131')
                ? { ...technique, crew: [...technique.crew, ...department.personnel.filter((person) =>  person.combatNumber === 2)] }
                : technique
            )
          }
          : department
      )
    }
    : districtDepartment
)

console.log(regionalAdministration)
