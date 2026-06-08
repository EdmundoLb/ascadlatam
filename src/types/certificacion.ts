export interface NivelCertificacion {
  id: string
  codigo: string
  nombre: string
  nombreCompleto: string
  descripcion: string
  precio: number
  precioUSD: number
  competencias: {
    saberConocer: string[]
    saberHacer: string[]
    saberSer: string[]
  }
  requisitos: string[]
  duracion: string
  tag?: string
}

export interface OrigenCertificacion {
  id: string
  nombre: string
  descripcion: string
  icon: string
}

export interface Estadistica {
  label: string
  value: string
  icon: string
}

export interface CertificacionInfo {
  levels: NivelCertificacion[]
  origins: OrigenCertificacion[]
  stats: Estadistica[]
}