export default {
  name: "section",
  type: "document",
  title: "Secciones del home",
  fields: [
    {
      title: "Nombre de la sección",
      name: "name",
      type: "string",
      validation: (Rule) =>
        Rule.required().max(40).error("Máximo de caracteres excedido"),
    },
    {
      title: "Título",
      name: "title",
      type: "string",
    },
    {
      title: "Subtítulo",
      name: "subtitle",
      description:
        "Este es el título que tendrá el proyecto en su propia sección",
      type: "text",
      rows: 2,
    },
    {
      title: "Mostrar título y subtitulo",
      name: "showTitle",
      type: "boolean",
    },
    {
      title: "Posición del contenido",
      name: "contentPosition",
      type: "string",
      options: {
        list: [
          { title: "Izquierda", value: "leftPosition" },
          { title: "Centrado", value: "centerPosition" },
          { title: "Derecha", value: "rightPosition" },
        ],
      },
    },
    {
      title: "Parallax",
      name: "parallax",
      type: "boolean",
    },
    {
      title: "Oculto",
      name: "hidden",
      type: "boolean",
    },
    {
      title: "Fondo",
      description: "Este es el fondo que va a tener la sección",
      name: "backgrounds",
      type: "document",
      fields: [
        {
          title: "Fondo desktop",
          name: "desktop_bg",
          type: "image",
          options: {
            metadata: [],
          },
        },
        {
          title: "Fondo mobile",
          name: "mobile_bg",
          type: "image",
          options: {
            metadata: [],
          },
        },
      ],
    },
    {
      title: "Texto del botón",
      name: "buttonText",
      type: "text",
      rows: 1,
    },
    {
      title: "Link",
      name: "link",
      description: "Esta es la URL a dónde va a redirigir el botón",
      type: "text",
      rows: 2,
    },
    {
      title: "Mostrar botón",
      name: "showButton",
      type: "boolean",
    },
  ],
};
