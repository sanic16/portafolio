export const contactTemplate = `
<!DOCTYPE html>
<html lang="es>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contacto</title>
</head>
<body>
    <div>
        <h1>
            {name} quiere contactarte
        </h1>
        <p>
            <strong>Nombre:</strong> {{name}}
            <br>
            <strong>Email:</strong> {{email}}
            <br>
            <strong>Mensaje:</strong> {{message}}
        </p>
    </div>
</body>
`;
