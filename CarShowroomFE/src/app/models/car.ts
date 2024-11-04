export interface AddCarRequests {
    vin: string,
    marker?: string,
    model?: string,
    modelYear?: number,
    price?:number,
    showroom: {commercial_registration_number:number}
  }