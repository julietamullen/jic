export default {
  name: "row",
  title: "Row",
  type: "object",
  fields: [
    {
      name: "columns",
      title: "Columnas",
      description: "Las imágenes que cargues en esta fila van a mostrarse una al lado de la otra",
      type: "array",
      of: [{ type: "image" }],
    },
  ],
};
