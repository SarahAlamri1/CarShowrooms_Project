export interface CreateCarShowroomRequests {
    commercial_registration_number: number,
    name?: string,
    manager_name?: string,
    contact_number?: number,
    address?:string
  }

export interface CarShowroom {
    commercial_registration_number: number,
    name?: string,
    manager_name?: string,
    contact_number?: number,
    address?:string;
    carList:any[]
  }
