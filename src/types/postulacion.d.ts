interface Postulacion {
  fecha: string; // yyyy-MM-dd
  empresa: string;
  link: string;
  estado: 'en proceso' | 'finalizado';
}
