const predeterminedResponse = {
    A: {
      name: ['Alicia', 'Ana', 'Amelia', 'Alberto', 'Andres', 'Antonio'],
      lastname: ['Almonte', 'Aguirre', 'Alvarado', 'Arce', 'Andrade'],
      animal: ['Alligator', 'Antelope', 'Aardvark', 'Ardilla', 'Aguila', 'Anaconda', 'Abeja'],
      color: ['Amber', 'Azure', 'Ambar', 'Azul'],
      thing: ['Anestesia', 'Agua'],
      food: ['Apple Pie', 'Avocado Toast', 'Alfredo Pasta', 'Arroz', 'Aguacate', 'Atun', 'Asado', 'Albondiga'],
      country: ['Argentina', 'Australia', 'Austria', 'Argelia', 'Angola'],
    },
    B: {
      name: ['Benjamin', 'Bernardo', 'Bella', 'Beatriz', 'Bruno', 'Berta', 'Blanca'],
      lastname: ['Bravo', 'Bustamante', 'Beltran'],
      animal: ['Bear', 'Bison', 'Bat', 'Burro', 'Ballena', 'Buho', 'Babosa'],
      color: ['Beige', 'Black', 'Blue', 'Borgona'],
      thing: ['Barba', 'Book', 'Bola', 'Boligrafo'],
      food: ['Burrito', 'Bagel', 'Brownie', 'Brocoli', 'Bizcocho', 'Bacalao', 'Bagel'],
      country: ['Brazil', 'Belgium', 'Bulgaria', 'Bolivia', 'Bosnia'],
    },
    C: {
      name: ['Carlos', 'Carmen', 'Clara', 'Cristian', 'Claudio'],
      lastname: ['Castillo', 'Cruz', 'Cortes', 'Cordero', 'Camacho'],
      animal: ['Cat', 'Cheetah', 'Camel', 'Caballo', 'Canguro', 'Cocodrilo', 'Canario'],
      color: ['Cyan', 'Cream', 'Coral', 'Cobre', 'Crema', 'Cian'],
      thing: ['Carro', 'Cafe'],
      food: ['Cake', 'Cereal', 'Curry', 'Croqueetas', 'Chocolate', 'Cereal', 'Calabaza'],
      country: ['Canada', 'China', 'Chile', 'Cuba', 'Costa Rica', 'Colombia'],
    },
    D: {
        name: ['David', 'Daniela', 'Diego', 'Diana'],
        lastname: ['Diaz', 'Delgado', 'Dominguez', 'Duran'],
        animal: ['Delfin', 'Dragon'],
        color: ['Dark Blue', 'Denim', 'Dosty Rose'],
        thing: ['Dado', 'Dulce'],
        food: ['Donas', 'Durazno', 'Datil'],
        country: ['Dinamarca', 'Dominica', 'Djibouti'],
      },
    E: {
        name: ['Elena', 'Eduardo', 'Esteban', 'Emilia', 'Enrique'],
        lastname: ['Espinosa', 'Escobar', 'Echevarria', 'Elizondo', 'Estrada'],
        animal: ['Elefante', 'Elephant', 'Erizo', 'Escorpion'],
        color: ['Esmeralda', 'Esmerald', 'Ecru'],
        thing: ['Estaca', 'Enchufe'],
        food: ['Ensalada', 'Empanada', 'Espagueti'],
        country: ['Egipto', 'Espana', 'Ecuador', 'Etiopia'],
    }, 
    F: {
        name: ['Fernanada', 'Fernando', 'Feliz', 'Felix', 'Feliciano', 'Francisco'],
        lastname: ['Fernandez', 'Flores', 'Fuentes', 'Figueroa'],
        animal: ['Flamenco', 'Foca'],
        color: ['Fuchsia'],
        thing: ['Farol', 'Fantasma'],
        food: ['Frijoles', 'Flan', 'Frutas'],
        country: ['Finlandia', 'Francia', 'Filipinas'],
    }, 
    G: {
        name: ['Gabriel', 'Gabriela', 'Guillermo', 'Gloria', 'Gonzalo'],
        lastname: ['Garcia', 'Gonzalez', 'Gomez', 'Guerrero'],
        animal: ['Gato', 'Gorila', 'Gaviota'],
        color: ['Gold', 'Gray', 'Green', 'Gris'],
        thing: ['Guante', 'Gorro'],
        food: ['Gelatina', 'Galleta', 'Gazpacho'],
        country: ['Grecia', 'Guatemala', 'Guinea'],
      },
    H: {
        name: ['Hugo', 'Helena', 'Hernan', 'Hilda', 'Homero'],
        lastname: ['Hernandez', 'Herrera', 'Hidalgo'],
        animal: ['Halcon', 'Hipopotamo', 'Hormiga'],
        color: ['Honey Yellow'],
        thing: ['Horno'],
        food: ['Hamburguesa', 'Helado', 'Harina'],
        country: ['Honduras', 'Haiti', 'Hungria'],
    },
    I: {
        name: ['Isabel', 'Ignacio', 'Ivan', 'Irma'],
        lastname: ['Ibanez', 'Ibarra', 'Izquierdo'],
        animal: ['Iguana', 'Insecto'],
        color: ['Indigo', 'Ivory'],
        thing: ['Isopo'],
        food: ['Infusion', 'Ibo'],
        country: ['Italia', 'India', 'Irlanda'],
      },
    J: {
        name: ['Juan', 'Julia', 'Javier', 'Jose', 'Jessica'],
        lastname: ['Jimenez', 'Juares', 'Jerez'],
        animal: ['Jirafa', 'Jaguar'],
        color: ['Jade'],
        thing: ['Jabon', 'Jarra'],
        food: ['Jamon', 'Jalapeno', 'Jugo'],
        country: ['Japon', 'Jamaica'],
    }, 
    K: {
        name: ['Karla', 'Kevin', 'Kenia'],
        lastname: ['Kruger', 'Kauffman'],
        animal: ['Koala'],
        color: ['Khaki'],
        thing: ['kimono'],
        food: ['Ketchup', 'Kiwi'],
        country: ['Kenia', 'Kuwait'],
      },
    L: {
        name: ['Laura', 'Luis', 'Leonardo', 'Lucia', 'Lorena'],
        lastname: ['Lopez', 'Leon', 'Ledesma'],
        animal: ['Lobo', 'Lama', 'langosata'],
        color: ['Lavender', 'Lemon Yellow', 'Lilac', 'Lila'],
        thing: ['Lavadora', 'Lapiz'],
        food: ['Cake', 'Cereal', 'Curry'],
        country: ['Libano', 'Libia'],
    },
    M: {
        name: ['Maria', 'Manuel', 'Miguel', 'Marta'],
        lastname: ['Martinez', 'Morales', 'Mendoza', 'Munoz', 'Medina'],
        animal: ['Mono', 'Murcielago', 'Mariposa'],
        color: ['Magenta'],
        thing: ['Manguera', 'Mata'],
        food: ['Melon', 'Macarronis'],
        country: ['Mexico'],
      },
    N: {
        name: ['Nicolas', 'Natalia', 'Noe', 'Nadia'],
        lastname: ['Navarro', 'Nunez', 'Nieto'],
        animal: ['Nutria'],
        color: ['Navy Blue'],
        thing: ['Navaja', 'Nave'],
        food: ['Nuez', 'Noodle'],
        country: ['Noruega'],
      },
    O: {
        name: ['Oscar', 'Olivia'],
        lastname: ['Ortega'],
        animal: ['Oso'],
        color: ['Orange', 'Olive Green'],
        thing: ['Otoman'],
        food: ['Oblea'],
        country: ['Oman'],
      },
    P: {
          name: ['Pedro', 'Pablo', 'Patricia', 'Paula', 'Paola'],
          lastname: ['Perez', 'Paredes', 'Pena', 'Ponce'],
          animal: ['Perro', 'Pajaro', 'Panda', 'Puma'],
          color: ['Pink', 'Purple', 'Periwinkle', 'Purpura'],
          thing: ['Pesa', 'Pantalon'],
          food: ['Pizza', 'Pescado', 'Pancake'],
          country: ['Peru', 'Polonia', 'Panama'],
        },
    Q: {
          name: ['Quirino', 'Quimera'],
          lastname: ['Quiroz', 'Quesada', 'Quintero'],
          animal: ['Quetzal'],
          color: ['Quartz Pink'],
          thing: [''],
          food: ['Quesadilla', 'Queso'],
          country: [''],
      }, 
    R: {
          name: ['Rico', 'Rafael', 'Rafaela', 'Ramses', 'Raul'],
          lastname: ['Richardson', 'Ramirez'],
          animal: ['Rinoceronte'],
          color: ['Red', 'Rose Red', 'Rojo'],
          thing: ['Rayo', 'Relampago'],
          food: ['Rice'],
          country: ['Rusia'],
      }, 
    S: {
          name: ['Sally', 'Samuel', 'Santino'],
          lastname: ['Sanchez', ''],
          animal: ['Sapo'],
          color: ['Salmon Pink', 'Salmon'],
          thing: ['Sabana', 'Sandalia'],
          food: ['Sopa'],
          country: ['San Salvador', 'Santa Lucia'],
        },
    T: {
          name: ['Tiago', 'Tito', 'Temistocles'],
          lastname: [],
          animal: [],
          color: ['Teal', 'Turquoise', 'Turquesa'],
          thing: ['Teja'],
          food: ['Tomate'],
          country: ['Taiwan', 'Trinidad y Tobago'],
      },
    U: {
          name: ['Ulma', 'Uvaldo'],
          lastname: [],
          animal: ['Elefante', 'Elephant', 'Camel'],
          color: ['Umber', 'Umbrio'],
          thing: ['Una'],
          food: ['Cake', 'Cereal', 'Curry'],
          country: ['Etiopia', 'Estonia', 'Estambul'],
        },
    V: {
          name: ['Vicente', 'Valeria', 'Vanessa', 'Victor'],
          lastname: ['Vargas', 'Vasquez', 'Vega', 'Villanueva'],
          animal: ['Vaca', 'Venado', 'Vibora'],
          color: ['Violet', 'Vanilla', 'Violeta'],
          thing: ['Vaso'],
          food: ['Verduras', 'Vainilla', 'Vinagre'],
          country: ['Venezuela', 'Vietnan'],
      }, 
    W: {
          name: ['William', 'Wendy', 'Wilma'],
          lastname: ['Wilson', 'Wong', 'Whitman'],
          animal: [],
          color: ['White'],
          thing: [],
          food: ['Watermelon'],
          country: [],
        },
    X: {
          name: ['Ximena'],
          lastname: ['Xong'],
          animal: [],
          color: ['Xantico'],
          thing: [],
          food: [],
          country: [],
      },
    Y: {
        name: ['Yara', 'Ylma', 'Yalma', 'Yamel'],
        lastname: ['Yvanez'],
        animal: ['Yeti'],
        color: ['Yellow'],
        thing: [],
        food: ['Yuca'],
        country: ['Yemen'],
      },
    Z: {
        name: ['Zoe'],
        lastname: ['Zamora'],
        animal: ['Zorro'],
        color: ['Zinc Grey'],
        thing: [],
        food: [''],
        country: [''],
        }
  };
  
  export default predeterminedResponse;