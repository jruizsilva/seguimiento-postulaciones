interface Postulacion {
  id: number;
  puesto: string;
  fecha: string;
  empresa: string;
  enlace?: string;
  plataforma: string;
  estado: estado;
}

interface CreatePostulacionRequest {
  puesto: string;
  empresa: string;
  enlace?: string;
  plataforma: string;
}

interface UpdatePostulacionRequest {
  id: number;
  puesto?: string;
  empresa?: string;
  enlace?: string;
  plataforma?: string;
}

type estado = 'EN_PROCESO' | 'FINALIZADO';
