const somethingwillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Esta correcto!");
    } else {
      reject("Ups! Hubo un error");
    }
  });
};

somethingwillHappen()
  .then((response) => console.log(response))
  .catch((error) => console.error(error));

const somethingwillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("True");
      }, 2000);
    } else {
      const error = new Error("whooops!");
      reject(error);
    }
  });
};

somethingwillHappen2()
  .then((resolve) => console.log(resolve))
  .catch((error) => console.error(error));


  /**
   * Promise.all([promesa1(),promesa2()]) permite ejecutar varias promesas en una linea de comando.
   * los resultados obtenidos seran presentados en un array con las correposdientes respuestas.
   */
Promise.all([somethingwillHappen(), somethingwillHappen2()])
  .then((resolve) => console.log(`Array de resultados ${resolve}`))
  .catch((error) => console.error(error));
