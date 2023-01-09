# HW 03: Promises | Ejercicios

## **🕒 Duración estimada**

x minutos

---

<br />

## **📌 INTRO**

En esta homework vas a analizar un poco de código asincrónico utilizando vanilla callbacks y luego vas a escribir código que haga acciones idénticas pero usando promesas.

---

<br />

## **📍 CONSIGNA**

Lee atentamente este **README** y realiza cada uno de los ejercicios.

---

<br />

## **📖 Pasos básicos para realizar la homework**

🔹 Para poder ejecutar los `test` de esta homework, es necesario que abramos la terminal ubicados dentro de la carpeta `01 - Exercises`.

- Cuando te encuentres en esta carpeta, debes ejecutar el comando

```bash
npm install
```

¡Listo! Para correr los tests de los ejercicios hechos con **callbacks** utiliza el comando:

```bash
npm run test:callback
```

Cuando termines el ejercicio y quieras testear tu promesa, utiliza el comando:

```bash
npm run test:promises
```

---

<br />

## **ESTRUCTURA**

🔹 Dentro de la carpeta `01 - Exercises`, vas a encontrar la siguiente estructura:

- Una carpeta llamada `poem-one`.
- Una carpeta llamada `poem-two`.
- Una carpeta llamada `tests`
- Un archivo `demo-poem.txt`.
- Un archivo `demo.js`.
- Un archivo `exercise-one.js`
- Un archivo `exercise-two.js`
- Un archivo `utils.js`
- Y el archivo **README.md** que ahora mismo estás leyendo. 😙

---

<br />

## **👩‍💻 EJERCICIO 1**

### **Poema uno**

📍 Dirígete al archivo `exercise-one.js`. Encontrarás las funciones "**problemA**, "**problemB**", "**problemC**", "**problemD**", "**problemE**", en este archivo. Trabajaremos en las cinco.

> Hint: exercisesUtils es una variable que viene del archivo `utils.js`, este archivo crea un `promisifiedReadFile`, lo necesitarás para los ejercicios.

📍 Dentro de cada función verás realizada la versión callback, si deskipeas los tests, estos pasarán, sin embargo el objetivo de la homework es pasar estas funciones callbacks a la versión promisificada, así que debes comentar la función callback para crear la promesa.

📍 Cuando la consigna pida un catch para manejo de errores, asegúrate de verificar que funcione en ambos casos. Es decir, si la promesa se resuelve por el camino del error debería ingresar al catch y si se resuelve por el camino del éxito debería mostrar las stanzas cumpliendo con el orden especificado en la consigna.

📍 Lo que hay que hacer:

1. Función problemA:

   a. Utiliza el método `promisifiedReadFile` del objeto **exerciseUtils**, que se encuentra dentro del archivo **utils.js**, de la siguiente manera: `exerciseUtils.promisifiedReadFile` este método nos devuelve una promesa que a su vez nos entrega el contenido del archivo.

   b. El método **promisifiedReadFile** recibe como parámetro: la ruta donde se encuentra **stanza-01.txt**, recuerda que ésta se encuentra en la carpeta **poem-one**, por el momento ignora los errores.

   c. Luego, llama al método `.then`, el cual recibe como parámetro la función `blue` que se encuentra en el archivo **utils.js**.

2. Función problemB: En este ejercicio el objetivo es leer y loguear del poema uno, la **stanza-02.txt** y después leer y loguear la **stanza-03.txt**, luego debes loguear 'done' cuando ambas promesas hayan terminado, ignora por este ejercicio los errores:

   a. Nuevamente utiliza el método **promisifiedReadFile**, el cual reciba como parámetro la **stanza-02.txt**, recuerda llamar el método de la siguiente manera: `exerciseUtils.promisifiedReadFile`para que los test puedan pasar.

   b. Llama el método **.then** que también recibe una respuesta, si resuelve llamamos la función **blue** y retornamos **promisifiedReadFile** para la **stanza-03.txt**.

   c. Vuelve a llamar el método **.then** que haga lo mismo que se realizó para la **stanza-02.txt**.

3. Función problemC:

   a.Vuelve a utilizar el método **exerciseUtils.promisifiedReadFile** y pasa como parámetro **poem-one/wrong-file-name.txt** que loguea el error o también puedes loguear **stanza-04.txt**. b.Sin embargo, ten en cuenta los dos caminos en esta promesa: si se resuelve, llama el método **.then** y con la respuesta llama la función **blue**. c. Si no se resuelve, llama el handleError que ejecute la función `magenta` la cual se encuentra en el archivo **utils.js**.

   > Hint: En caso de tener que lanzar un error deberías hacerlo con new Error() para que pase los tests correctamente.

4. Función problemD: Teniendo de base los ejercicios anteriores, en esta función debes:

   a. Leer y loguear la **stanza-03.txt**

   b. Luego debe leer y loguear la **stanza-04.txt**.

   c. Loguea un error si llegara a suceder para cualquiera de las dos promesas anteriores: **stanza-03.txt** y **stanza-04.txt**

   > Hint: Puedes usar el método `catch` que reciba la función magenta, la cual mostrará el error.

5. Función problemE: Teniendo de base los ejercicios anteriores, en esta función debes:

   a. Leer y loguear la **stanza-03.txt**

   b. Luego debe leer y la **stanza-04.txt**.

   c. Loguea un error si llegara a suceder para cualquiera de las dos promesas anteriores: **stanza-03.txt** y **stanza-04.txt**.

   d. En ambos caminos, tanto en la resolución de la promesa como en la rechazada debes loguear 'done' cuando haya terminado todo.

---

<br />

## **👩‍💻 EJERCICIO 2**

📍 Dirígete al archivo `exercise-two.js`. Encontrarás las funciones "**problemA**, "**problemB**", "**problemC**", "**problemD**", en este archivo. Trabajaremos en las cuatro, diendo **problemD** crédito extra.

📍 Dentro de cada función verás realizada la versión callback, si deskipeas los tests, estos pasarán, sin embargo el objetivo de la homework es pasar estas funciones callbacks a la versión promisificada, así que debes comentar la función callback para crear la promesa.

📍 Cuando la consigna pida un catch para manejo de errores, asegúrate de verificar que funcione en ambos casos. Es decir, si la promesa se resuelve por el camino del error debería ingresar al catch y si se resuelve por el camino del éxito debería mostrar las stanzas cumpliendo con el orden especificado en la consigna.

📍 Lo que hay que hacer:

1. Función problemA:

   a. Con el método **exerciseUtils.promisifiedReadFile** debes loguear la **stanza-01.txt** y la **stanza-02.txt** que se encuentran en la carpeta **poem-two**.

   b. Por el momento ignora los errores.

   c. Las dos promesas deben ser resueltas simultáneamente en cualquier orden.

   d. Por último debes loguear 'done' cuando ambas promesas hayan terminado.

   e. Asegúrate de testear el output de tus soluciones corriéndolos múltiples veces, para ver las posibilidades.

   > Hint: Puedes usar el método promise.all()

2. Función problemB:

   a. Con el método **exerciseUtils.promisifiedReadFile** debes loguear todos las stanzas que se encuentran en la carpeta **poem-two**.

   b. Por el momento ignora los errores.

   c. Las promesas deben ser resueltas en orden y en serie, es decir, cada promesa se resuelve cuando la anterior haya terminado.

   d. Por último debes loguear 'done' cuando todas las promesas hayan terminado.

   e. Asegúrate de testear el output de tus soluciones corriéndolos múltiples veces, para ver las posibilidades.

3. Función problemC:

   a. Con el método **exerciseUtils.promisifiedReadFile** debes loguear todos las stanzas que se encuentran en la carpeta **poem-two**.

   b. En este ejercicio debes tener en cuenta los errores.

   c. Las promesas deben ser resueltas en orden y en serie, es decir, cada promesa se resuelve cuando la anterior haya terminado.

   d. Por último debes loguear 'done' cuando todas las promesas hayan terminado.

   e. Asegúrate de testear el output de tus soluciones corriéndolos múltiples veces, para ver las posibilidades.

4. Función problemD: Debes hacer una versión promisificada de fs.writeFile. Puedes tomar de base el método **exerciseUtils.promisifiedReadFile** del archivo **utils.js** para la resolución del ejercicio.

   a. Retorna una instancia de `Promise`, la cual recibe una función.

   b. Esta función que recibe, tiene dos parámetros: resolve y reject.

   c. Del objeto `fs` llama el método `writeFile`, cual recibe como parámetro los mismos parámetros de la función `promisifiedWriteFile` agregando un tercer parámetro: la función para el error.

   d. Dentro de la función de error: si hay error que retorne el **reject** con la razón del rechazo, si no hay error que se resuelva con **resolve**.

   e. Asegúrate de testear el output de tus soluciones corriéndolos múltiples veces, para ver las posibilidades.

---

<br />

## **🧠 Recuerda que...**

- El código asincrónico es no-determinístico (los resultados no pueden ser determinados antes de tiempo)

- Llamar a **.then** siempre devuelve una nueva promesa.

- Para evitar el **callback hell** devuelve un valor o una promesa por un valor de un success handler, la siguiente parte de la cadena debe recibir ese valor.

- No olvides manejar los errores en el asincronismo, puedes hacerlo pasando un segundo parámetro **error handler** al .then.

- También puedes manejar todos los errores en el asincronismo utilizando **.catch**.

---

<br />

## **🔎 Recursos adicionales**

- Documentación [**Promises**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

- Documentación [**Bluebird**](http://bluebirdjs.com/docs/api/new-promise.html)

---

<br />

¡Listo! Aprendiste a promisificar, manejar asincronismo y errores, ahora vamos a implementar estos conocimientos en nuestra aplicación de integración. ✨🚀

Dirígete a la carpeta 📂 "02 - Integration" y continúa desarrollando la app de Rick & Morty 🤩 ---
