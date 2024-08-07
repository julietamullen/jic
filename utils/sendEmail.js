const SENDGRID_API = "https://api.sendgrid.com/v3/mail/send";
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

const sendEmail = async ({
  nombre,
  mensaje,
  presupuesto,
  producto,
  trabajo,
  puesto,
  email,
}) => {
  await fetch(SENDGRID_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${SENDGRID_API_KEY}`,
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [
            {
              email: "juanignaciocali@gmail.com",
            },
          ],
          subject: "Nuevo mensaje en JIC!",
        },
      ],
      from: {
        email: "fran.p.21@gmail.com",
      },
      content: [
        {
          type: "text/html",
          value: `<b>Nombre</b>: ${nombre}<br>
                <b>Mensaje</b>: ${mensaje}<br>
                <b>Email</b>: ${email}<br>
                <b>Trabajo</b>: ${trabajo}<br>
                <b>Puesto</b>: ${puesto}<br>
                <b>Producto</b>: ${producto}<br>
                <b>Presupuesto</b>: ${presupuesto}<br>`,
        },
      ],
    }),
  })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export { sendEmail };
