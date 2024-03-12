function status(request, response) {
  response.status(200).json({ chave: "Está funcionando" });
}

export default status;
