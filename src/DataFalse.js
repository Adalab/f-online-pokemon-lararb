const pokemonData = [
    {
      id: 1,
      name: "bulbasaur",
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      types: [
        {
          slot: 2,
          type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
        },
        {
          slot: 1,
          type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
        }
      ]
    },
    {
      id: 10,
      name: "caterpie",
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
      types: [
        {
          slot: 1,
          type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
        }
      ]
    },
    {
      id: 11,
      name: "metapod",
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
      types: [
        {
          slot: 1,
          type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
        }
      ]
    },
    {
      id: 13,
      name: "weedle",
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
      types: [
        {
          slot: 2,
          type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
        },
        {
          slot: 1,
          type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
        }
      ]
    },
    {
      id: 14,
      name: "kakuna",
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
      types: [
        {
          slot: 2,
          type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
        },
        {
          slot: 1,
          type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
        }
      ]
    },
    {
      id: 2,
      name: "ivysaur",
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
      types: [
        {
          slot: 2,
          type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
        },
        {
          slot: 1,
          type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
        }
      ]
    },
    {
      id: 3,
      name: "venusaur",
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
      types: [
        {
          slot: 2,
          type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
        },
        {
          slot: 1,
          type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
        }
      ]
    },
    {
      id: 5,
      name: "charmeleon",
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
      types: [
        {
          slot: 1,
          type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
        }
      ]
    },
    {
      id: 18,
      name: "pidgeot",
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
      types: [
        {
          slot: 2,
          type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
        },
        {
          slot: 1,
          type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
        }
      ]
    },
    {
      id: 19,
      name: "rattata",
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
      types: [
        {
          slot: 1,
          type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
        }
      ]
    },
    {
      id: 20,
      name: "raticate",
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
      types: [
        {
          slot: 1,
          type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
        }
      ]
    },
    {
      id: 21,
      name: "spearow",
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
      types: [
        {
          slot: 2,
          type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
        },
        {
          slot: 1,
          type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
        }
      ]
    },
    {
      id: 22,
      name: "fearow",
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
      types: [
        {
          slot: 2,
          type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
        },
        {
          slot: 1,
          type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
        }
      ]
    },
    {
      id: 23,
      name: "ekans",
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
      types: [
        {
          slot: 1,
          type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
        }
      ]
    },
    {
      id: 24,
      name: "arbok",
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
      types: [
        {
          slot: 1,
          type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
        }
      ]
    },
    {
      id: 4,
      name: "charmander",
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      types: [
        {
          slot: 1,
          type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
        }
      ]
    },
    {
      id: 25,
      name: "pikachu",
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      types: [
        {
          slot: 1,
          type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }
        }
      ]
    },
    {
      id: 8,
      name: "wartortle",
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
      types: [
        {
          slot: 1,
          type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
        }
      ]
    },
    {
      id: 6,
      name: "charizard",
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
      types: [
        {
          slot: 2,
          type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
        },
        {
          slot: 1,
          type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
        }
      ]
    },
    {
      id: 12,
      name: "butterfree",
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      types: [
        {
          slot: 2,
          type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
        },
        {
          slot: 1,
          type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
        }
      ]
    },
    {
      id: 15,
      name: "beedrill",
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
      types: [
        {
          slot: 2,
          type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
        },
        {
          slot: 1,
          type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
        }
      ]
    },
    {
      id: 16,
      name: "pidgey",
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
      types: [
        {
          slot: 2,
          type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
        },
        {
          slot: 1,
          type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
        }
      ]
    },
    {
      id: 17,
      name: "pidgeotto",
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
      types: [
        {
          slot: 2,
          type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
        },
        {
          slot: 1,
          type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
        }
      ]
    },
    {
      id: 7,
      name: "squirtle",
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
      types: [
        {
          slot: 1,
          type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
        }
      ]
    },
    {
      id: 9,
      name: "blastoise",
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
      types: [
        {
          slot: 1,
          type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
        }
      ]
    }
  ];

  export default pokemonData;