const predeterminedResponse = {
    A: {
      name: ['Alicia', 'Ana', 'Amelia', 'Alberto', 'Andres', 'Antonio'],
      lastName: ['Almonte', 'Aguirre', 'Alvarado', 'Arce', 'Andrade'],
      animal: ['Alligator', 'Antelope', 'Aardvark', 'Ardilla', 'Aguila', 'Anaconda', 'Abeja'],
      food: ['Apple Pie', 'Avocado Toast', 'Alfredo Pasta', 'Arroz', 'Aguacate', 'Atun', 'Asado', 'Albondiga'],
      country: ['Argentina', 'Australia', 'Austria', 'Argelia', 'Angola'],
    },
    B: {
      name: ['Benjamin', 'Bernardo', 'Bella', 'Beatriz', 'Bruno', 'Berta', 'Blanca'],
      lastName: ['Bravo', 'Bustamante', 'Beltran'],
      animal: ['Bear', 'Bison', 'Bat', 'Burro', 'Ballena', 'Buho', 'Babosa'],
      food: ['Burrito', 'Bagel', 'Brownie', 'Brocoli', 'Bizcocho', 'Bacalao', 'Bagel'],
      country: ['Brazil', 'Belgium', 'Bulgaria', 'Bolivia', 'Bosnia'],
    },
    C: {
      name: ['Carlos', 'Carmen', 'Clara', 'Cristian', 'Claudio'],
      lastName: ['Castillo', 'Cruz', 'Cortes', 'Cordero', 'Camacho'],
      animal: ['Cat', 'Cheetah', 'Camel', 'Caballo', 'Canguro', 'Cocodrilo', 'Canario'],
      food: ['Cake', 'Cereal', 'Curry', 'Croqueetas', 'Chocolate', 'Cereal', 'Calabaza'],
      country: ['Canada', 'China', 'Chile', 'Cuba', 'Costa Rica', 'Colombia'],
    },
    D: {
        name: ['David', 'Daniela', 'Diego', 'Diana'],
        lastName: ['Diaz', 'Delgado', 'Dominguez', 'Duran'],
        animal: ['Delfin', 'Dragon'],
        food: ['Donas', 'Durazno', 'Datil'],
        country: ['Dinamarca', 'Dominica', 'Djibouti'],
      },
    E: {
        name: ['Elena', 'Eduardo', 'Esteban', 'Emilia', 'Enrique'],
        lastName: ['Espinosa', 'Escobar', 'Echevarria', 'Elizondo', 'Estrada'],
        animal: ['Elefante', 'Elephant', 'Erizo', 'Escorpion'],
        food: ['Ensalada', 'Empanada', 'Espagueti'],
        country: ['Egipto', 'Espana', 'Ecuador', 'Etiopia'],
    }, 
    F: {
        name: ['Fernanada', 'Fernando', 'Feliz', 'Felix', 'Feliciano', 'Francisco'],
        lastName: ['Fernandez', 'Flores', 'Fuentes', 'Figueroa'],
        animal: ['Flamenco', 'Foca'],
        food: ['Frijoles', 'Flan', 'Frutas'],
        country: ['Finlandia', 'Francia', 'Filipinas'],
    }, 
    G: {
        name: ['Gabriel', 'Gabriela', 'Guillermo', 'Gloria', 'Gonzalo'],
        lastName: ['Garcia', 'Gonzalez', 'Gomez', 'Guerrero'],
        animal: ['Gato', 'Gorila', 'Gaviota'],
        food: ['Gelatina', 'Galleta', 'Gazpacho'],
        country: ['Grecia', 'Guatemala', 'Guinea'],
      },
    H: {
        name: ['Hugo', 'Helena', 'Hernan', 'Hilda', 'Homero'],
        lastName: ['Hernandez', 'Herrera', 'Hidalgo'],
        animal: ['Halcon', 'Hipopotamo', 'Hormiga'],
        food: ['Hamburguesa', 'Helado', 'Harina'],
        country: ['Honduras', 'Haiti', 'Hungria'],
    },
    I: {
        name: ['Isabel', 'Ignacio', 'Ivan', 'Irma'],
        lastName: ['Ibanez', 'Ibarra', 'Izquierdo'],
        animal: ['Iguana', 'Insecto'],
        food: ['Infusion', 'Ibo'],
        country: ['Italia', 'India', 'Irlanda'],
      },
    J: {
        name: ['Juan', 'Julia', 'Javier', 'Jose', 'Jessica'],
        lastName: ['Jimenez', 'Juares', 'Jerez'],
        animal: ['Jirafa', 'Jaguar'],
        food: ['Jamon', 'Jalapeno', 'Jugo'],
        country: ['Japon', 'Jamaica'],
    }, 
    K: {
        name: ['Karla', 'Kevin', 'Kenia'],
        lastName: ['Kruger', 'Kauffman'],
        animal: ['Koala'],
        food: ['Ketchup', 'Kiwi'],
        country: ['Kenia', 'Kuwait'],
      },
    L: {
        name: ['Laura', 'Luis', 'Leonardo', 'Lucia', 'Lorena'],
        lastName: ['Lopez', 'Leon', 'Ledesma'],
        animal: ['Lobo', 'Lama', 'langosata'],
        food: ['Cake', 'Cereal', 'Curry'],
        country: ['Libano', 'Libia'],
    },
    M: {
        name: ['Maria', 'Manuel', 'Miguel', 'Marta'],
        lastName: ['Martinez', 'Morales', 'Mendoza', 'Munoz', 'Medina'],
        animal: ['Mono', 'Murcielago', 'Mariposa'],
        food: ['Melon', 'Macarronis'],
        country: ['Mexico'],
      },
    N: {
        name: ['Nicolas', 'Natalia', 'Noe', 'Nadia'],
        lastName: ['Navarro', 'Nunez', 'Nieto'],
        animal: ['Nutria'],
        food: ['Nuez', 'Noodle'],
        country: ['Noruega'],
      },
    O: {
        name: ['Oscar', 'Olivia'],
        lastName: ['Ortega'],
        animal: ['Oso'],
        food: ['Oblea'],
        country: ['Oman'],
      },
    P: {
          name: ['Pedro', 'Pablo', 'Patricia', 'Paula', 'Paola'],
          lastName: ['Perez', 'Paredes', 'Pena', 'Ponce'],
          animal: ['Perro', 'Pajaro', 'Panda', 'Puma'],
          food: ['Pizza', 'Pescado', 'Pancake'],
          country: ['Peru', 'Polonia', 'Panama'],
        },
    Q: {
          name: ['Quirino', 'Quimera'],
          lastName: ['Quiroz', 'Quesada', 'Quintero'],
          animal: ['Quetzal'],
          food: ['Quesadilla', 'Queso'],
          country: [''],
      }, 
    R: {
          name: ['Rico', 'Rafael', 'Rafaela', 'Ramses', 'Raul'],
          lastName: ['Richardson', 'Ramirez'],
          animal: ['Rinoceronte'],
          food: ['Rice'],
          country: ['Rusia'],
      }, 
    S: {
          name: ['Sally', 'Samuel', 'Santino'],
          lastName: ['Sanchez', ''],
          animal: ['Sapo'],
          food: ['Sopa'],
          country: ['San Salvador', 'Santa Lucia'],
        },
    T: {
          name: ['Tiago', 'Tito', 'Temistocles'],
          lastName: [],
          animal: [],
          food: [],
          country: ['Taiwan', 'Trinidad y Tobago'],
      },
    U: {
          name: ['Ulma', 'Uvaldo'],
          lastName: [],
          animal: ['Elefante', 'Elephant', 'Camel'],
          food: ['Cake', 'Cereal', 'Curry'],
          country: ['Etiopia', 'Estonia', 'Estambul'],
        },
    V: {
          name: ['Vicente', 'Valeria', 'Vanessa', 'Victor'],
          lastName: ['Vargas', 'Vasquez', 'Vega', 'Villanueva'],
          animal: ['Vaca', 'Venado', 'Vibora'],
          food: ['Verduras', 'Vainilla', 'Vinagre'],
          country: ['Venezuela', 'Vietnan'],
      }, 
    W: {
          name: ['William', 'Wendy', 'Wilma'],
          lastName: ['Wilson', 'Wong', 'Whitman'],
          animal: [],
          food: ['Watermelon'],
          country: [],
        },
    X: {
          name: ['Ximena'],
          lastName: ['Xong'],
          animal: [],
          food: [],
          country: [],
      },
    Y: {
        name: ['Yara', 'Ylma', 'Yalma', 'Yamel'],
        lastName: ['Yvanez'],
        animal: ['Yeti'],
        food: ['Yuca'],
        country: ['Yemen'],
      },
    Z: {
        name: ['Zoe'],
        lastName: ['Zamora'],
        animal: ['Zorro'],
        food: [''],
        country: [''],
        }
  };
  
  export default predeterminedResponse;