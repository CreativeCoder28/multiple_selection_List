
import './App.css';
import List from './component/Tree/List';

const mockData = [
  {
    "id": 1,
    "header": "Products",
    "label": "Automatic control engineering and control technologies",
    "children": [
      {
        "id": 1,
        "header": "SubCategories",
        "label": "Bearings",
        "children": [
          {
            "id": 1,
            "label": "Blue Collectors"
          },
          {
            "id": 2,
            "label": "Yellow Collectors"
          },
          {
            "id": 3,
            "label": "Black Collectors"
          },
          {
            "id": 4,
            "label": "White Collectors"
          },
          {
            "id": 5,
            "label": "Red Collectors"
          }
        ]
      },
      {
        "id": 1,
        "label": "Current Collectors",
        "children": [
          {
            "id": 1,
            "label": "Blue Collectors"
          },
          {
            "id": 2,
            "label": "Yellow Collectors"
          },
          {
            "id": 3,
            "label": "Black Collectors"
          },
          {
            "id": 4,
            "label": "White Collectors"
          },
          {
            "id": 5,
            "label": "Red Collectors"
          }
        ]
      },
      {
        "id": 3,
        "label": "Fans and fan impellers",
        "children": [
          {
            "id": 1,
            "label": "Blue Collectors"
          },
          {
            "id": 2,
            "label": "Yellow Collectors"
          },
          {
            "id": 3,
            "label": "Black Collectors"
          },
          {
            "id": 4,
            "label": "White Collectors"
          },
          {
            "id": 5,
            "label": "Red Collectors"
          }
        ]
      },
      {
        "id": 4,
        "label": "Insulators",
        "children": [
          {
            "id": 1,
            "label": "Blue Collectors"
          },
          {
            "id": 2,
            "label": "Yellow Collectors"
          },
          {
            "id": 3,
            "label": "Black Collectors"
          },
          {
            "id": 4,
            "label": "White Collectors"
          },
          {
            "id": 5,
            "label": "Red Collectors"
          }
        ]
      },
      {
        "id": 5,
        "label": "Rotors and Sators",
        "children": [
          {
            "id": 1,
            "label": "Blue Collectors"
          },
          {
            "id": 2,
            "label": "Yellow Collectors"
          },
          {
            "id": 3,
            "label": "Black Collectors"
          },
          {
            "id": 4,
            "label": "White Collectors"
          },
          {
            "id": 5,
            "label": "Red Collectors"
          }
        ]
      }
    ]
  },
  {
    "id": 2,
    "label": "Communication equipment",
    "children": [
      {
        "id": 1,
        "label": "Bearings",
        "children": [
          {
            "id": 1,
            "label": "Blue Collectors"
          },
          {
            "id": 2,
            "label": "Yellow Collectors"
          },
          {
            "id": 3,
            "label": "Black Collectors"
          },
          {
            "id": 4,
            "label": "White Collectors"
          },
          {
            "id": 5,
            "label": "Red Collectors"
          }
        ]
      },
      {
        "id": 1,
        "label": "Current Collectors",
        "children": [
          {
            "id": 1,
            "label": "Blue Collectors"
          },
          {
            "id": 2,
            "label": "Yellow Collectors"
          },
          {
            "id": 3,
            "label": "Black Collectors"
          },
          {
            "id": 4,
            "label": "White Collectors"
          },
          {
            "id": 5,
            "label": "Red Collectors"
          }
        ]
      },
      {
        "id": 3,
        "label": "Fans and fan impellers",
        "children": [
          {
            "id": 1,
            "label": "Blue Collectors"
          },
          {
            "id": 2,
            "label": "Yellow Collectors"
          },
          {
            "id": 3,
            "label": "Black Collectors"
          },
          {
            "id": 4,
            "label": "White Collectors"
          },
          {
            "id": 5,
            "label": "Red Collectors"
          }
        ]
      },
      {
        "id": 4,
        "label": "Insulators",
        "children": [
          {
            "id": 1,
            "label": "Blue Collectors"
          },
          {
            "id": 2,
            "label": "Yellow Collectors"
          },
          {
            "id": 3,
            "label": "Black Collectors"
          },
          {
            "id": 4,
            "label": "White Collectors"
          },
          {
            "id": 5,
            "label": "Red Collectors"
          }
        ]
      },
      {
        "id": 5,
        "label": "Rotors and Sators",
        "children": [
          {
            "id": 1,
            "label": "Blue Collectors"
          },
          {
            "id": 2,
            "label": "Yellow Collectors"
          },
          {
            "id": 3,
            "label": "Black Collectors"
          },
          {
            "id": 4,
            "label": "White Collectors"
          },
          {
            "id": 5,
            "label": "Red Collectors"
          }
        ]
      }
    ]
  },
  {
    "id": 3,
    "label": "Electric Motors",
    "children": [
      {
        "id": 1,
        "label": "Bearings",
        "children": [
          {
            "id": 1,
            "label": "Blue Collectors"
          },
          {
            "id": 2,
            "label": "Yellow Collectors"
          },
          {
            "id": 3,
            "label": "Black Collectors"
          },
          {
            "id": 4,
            "label": "White Collectors"
          },
          {
            "id": 5,
            "label": "Red Collectors"
          }
        ]
      },
      {
        "id": 1,
        "label": "Current Collectors",
        "children": [
          {
            "id": 1,
            "label": "Blue Collectors"
          },
          {
            "id": 2,
            "label": "Yellow Collectors"
          },
          {
            "id": 3,
            "label": "Black Collectors"
          },
          {
            "id": 4,
            "label": "White Collectors"
          },
          {
            "id": 5,
            "label": "Red Collectors"
          }
        ]
      },
      {
        "id": 3,
        "label": "Fans and fan impellers",
        "children": [
          {
            "id": 1,
            "label": "Blue Collectors"
          },
          {
            "id": 2,
            "label": "Yellow Collectors"
          },
          {
            "id": 3,
            "label": "Black Collectors"
          },
          {
            "id": 4,
            "label": "White Collectors"
          },
          {
            "id": 5,
            "label": "Red Collectors"
          }
        ]
      },
      {
        "id": 4,
        "label": "Insulators",
        "children": [
          {
            "id": 1,
            "label": "Blue Collectors"
          },
          {
            "id": 2,
            "label": "Yellow Collectors"
          },
          {
            "id": 3,
            "label": "Black Collectors"
          },
          {
            "id": 4,
            "label": "White Collectors"
          },
          {
            "id": 5,
            "label": "Red Collectors"
          }
        ]
      },
      {
        "id": 5,
        "label": "Rotors and Sators",
        "children": [
          {
            "id": 1,
            "label": "Blue Collectors"
          },
          {
            "id": 2,
            "label": "Yellow Collectors"
          },
          {
            "id": 3,
            "label": "Black Collectors"
          },
          {
            "id": 4,
            "label": "White Collectors"
          },
          {
            "id": 5,
            "label": "Red Collectors"
          }
        ]
      }
    ]
  },
  {
    "id": 4,
    "label": "Electric equipment",
    "children": [
      {
        "id": 1,
        "label": "Bearings",
        "children": [
          {
            "id": 1,
            "label": "Blue Collectors"
          },
          {
            "id": 2,
            "label": "Yellow Collectors"
          },
          {
            "id": 3,
            "label": "Black Collectors"
          },
          {
            "id": 4,
            "label": "White Collectors"
          },
          {
            "id": 5,
            "label": "Red Collectors"
          }
        ]
      },
      {
        "id": 1,
        "label": "Current Collectors",
        "children": [
          {
            "id": 1,
            "label": "Blue Collectors"
          },
          {
            "id": 2,
            "label": "Yellow Collectors"
          },
          {
            "id": 3,
            "label": "Black Collectors"
          },
          {
            "id": 4,
            "label": "White Collectors"
          },
          {
            "id": 5,
            "label": "Red Collectors"
          }
        ]
      },
      {
        "id": 3,
        "label": "Fans and fan impellers",
        "children": [
          {
            "id": 1,
            "label": "Blue Collectors"
          },
          {
            "id": 2,
            "label": "Yellow Collectors"
          },
          {
            "id": 3,
            "label": "Black Collectors"
          },
          {
            "id": 4,
            "label": "White Collectors"
          },
          {
            "id": 5,
            "label": "Red Collectors"
          }
        ]
      },
      {
        "id": 4,
        "label": "Insulators",
        "children": [
          {
            "id": 1,
            "label": "Blue Collectors"
          },
          {
            "id": 2,
            "label": "Yellow Collectors"
          },
          {
            "id": 3,
            "label": "Black Collectors"
          },
          {
            "id": 4,
            "label": "White Collectors"
          },
          {
            "id": 5,
            "label": "Red Collectors"
          }
        ]
      },
      {
        "id": 5,
        "label": "Rotors and Sators",
        "children": [
          {
            "id": 1,
            "label": "Blue Collectors"
          },
          {
            "id": 2,
            "label": "Yellow Collectors"
          },
          {
            "id": 3,
            "label": "Black Collectors"
          },
          {
            "id": 4,
            "label": "White Collectors"
          },
          {
            "id": 5,
            "label": "Red Collectors"
          }
        ]
      }
    ]
  },
  {
    "id": 5,
    "label": "Electric components",
    "children": [
      {
        "id": 1,
        "label": "Bearings",
        "children": [
          {
            "id": 1,
            "label": "Blue Collectors"
          },
          {
            "id": 2,
            "label": "Yellow Collectors"
          },
          {
            "id": 3,
            "label": "Black Collectors"
          },
          {
            "id": 4,
            "label": "White Collectors"
          },
          {
            "id": 5,
            "label": "Red Collectors"
          }
        ]
      },
      {
        "id": 1,
        "label": "Current Collectors",
        "children": [
          {
            "id": 1,
            "label": "Blue Collectors"
          },
          {
            "id": 2,
            "label": "Yellow Collectors"
          },
          {
            "id": 3,
            "label": "Black Collectors"
          },
          {
            "id": 4,
            "label": "White Collectors"
          },
          {
            "id": 5,
            "label": "Red Collectors"
          }
        ]
      },
      {
        "id": 3,
        "label": "Fans and fan impellers",
        "children": [
          {
            "id": 1,
            "label": "Blue Collectors"
          },
          {
            "id": 2,
            "label": "Yellow Collectors"
          },
          {
            "id": 3,
            "label": "Black Collectors"
          },
          {
            "id": 4,
            "label": "White Collectors"
          },
          {
            "id": 5,
            "label": "Red Collectors"
          }
        ]
      },
      {
        "id": 4,
        "label": "Insulators",
        "children": [
          {
            "id": 1,
            "label": "Blue Collectors"
          },
          {
            "id": 2,
            "label": "Yellow Collectors"
          },
          {
            "id": 3,
            "label": "Black Collectors"
          },
          {
            "id": 4,
            "label": "White Collectors"
          },
          {
            "id": 5,
            "label": "Red Collectors"
          }
        ]
      },
      {
        "id": 5,
        "label": "Rotors and Sators",
        "children": [
          {
            "id": 1,
            "label": "Blue Collectors"
          },
          {
            "id": 2,
            "label": "Yellow Collectors"
          },
          {
            "id": 3,
            "label": "Black Collectors"
          },
          {
            "id": 4,
            "label": "White Collectors"
          },
          {
            "id": 5,
            "label": "Red Collectors"
          }
        ]
      }
    ]
  },
  {
    "id": 6,
    "label": "Factory euipment, maintenance accessories",
    "children": [
      {
        "id": 1,
        "label": "Bearings",
        "children": [
          {
            "id": 1,
            "label": "Blue Collectors"
          },
          {
            "id": 2,
            "label": "Yellow Collectors"
          },
          {
            "id": 3,
            "label": "Black Collectors"
          },
          {
            "id": 4,
            "label": "White Collectors"
          },
          {
            "id": 5,
            "label": "Red Collectors"
          }
        ]
      },
      {
        "id": 1,
        "label": "Current Collectors",
        "children": [
          {
            "id": 1,
            "label": "Blue Collectors"
          },
          {
            "id": 2,
            "label": "Yellow Collectors"
          },
          {
            "id": 3,
            "label": "Black Collectors"
          },
          {
            "id": 4,
            "label": "White Collectors"
          },
          {
            "id": 5,
            "label": "Red Collectors"
          }
        ]
      },
      {
        "id": 3,
        "label": "Fans and fan impellers",
        "children": [
          {
            "id": 1,
            "label": "Blue Collectors"
          },
          {
            "id": 2,
            "label": "Yellow Collectors"
          },
          {
            "id": 3,
            "label": "Black Collectors"
          },
          {
            "id": 4,
            "label": "White Collectors"
          },
          {
            "id": 5,
            "label": "Red Collectors"
          }
        ]
      },
      {
        "id": 4,
        "label": "Insulators",
        "children": [
          {
            "id": 1,
            "label": "Blue Collectors"
          },
          {
            "id": 2,
            "label": "Yellow Collectors"
          },
          {
            "id": 3,
            "label": "Black Collectors"
          },
          {
            "id": 4,
            "label": "White Collectors"
          },
          {
            "id": 5,
            "label": "Red Collectors"
          }
        ]
      },
      {
        "id": 5,
        "label": "Rotors and Sators",
        "children": [
          {
            "id": 1,
            "label": "Blue Collectors"
          },
          {
            "id": 2,
            "label": "Yellow Collectors"
          },
          {
            "id": 3,
            "label": "Black Collectors"
          },
          {
            "id": 4,
            "label": "White Collectors"
          },
          {
            "id": 5,
            "label": "Red Collectors"
          }
        ]
      }
    ]
  },
  {
    "id": 6,
    "label": "Laser Technology",
    "children": [
      {
        "id": 1,
        "label": "Bearings",
        "children": [
          {
            "id": 1,
            "label": "Blue Collectors"
          },
          {
            "id": 2,
            "label": "Yellow Collectors"
          },
          {
            "id": 3,
            "label": "Black Collectors"
          },
          {
            "id": 4,
            "label": "White Collectors"
          },
          {
            "id": 5,
            "label": "Red Collectors"
          }
        ]
      },
      {
        "id": 1,
        "label": "Current Collectors",
        "children": [
          {
            "id": 1,
            "label": "Blue Collectors"
          },
          {
            "id": 2,
            "label": "Yellow Collectors"
          },
          {
            "id": 3,
            "label": "Black Collectors"
          },
          {
            "id": 4,
            "label": "White Collectors"
          },
          {
            "id": 5,
            "label": "Red Collectors"
          }
        ]
      },
      {
        "id": 3,
        "label": "Fans and fan impellers",
        "children": [
          {
            "id": 1,
            "label": "Blue Collectors"
          },
          {
            "id": 2,
            "label": "Yellow Collectors"
          },
          {
            "id": 3,
            "label": "Black Collectors"
          },
          {
            "id": 4,
            "label": "White Collectors"
          },
          {
            "id": 5,
            "label": "Red Collectors"
          }
        ]
      },
      {
        "id": 4,
        "label": "Insulators",
        "children": [
          {
            "id": 1,
            "label": "Blue Collectors"
          },
          {
            "id": 2,
            "label": "Yellow Collectors"
          },
          {
            "id": 3,
            "label": "Black Collectors"
          },
          {
            "id": 4,
            "label": "White Collectors"
          },
          {
            "id": 5,
            "label": "Red Collectors"
          }
        ]
      },
      {
        "id": 5,
        "label": "Rotors and Sators",
        "children": [
          {
            "id": 1,
            "label": "Blue Collectors"
          },
          {
            "id": 2,
            "label": "Yellow Collectors"
          },
          {
            "id": 3,
            "label": "Black Collectors"
          },
          {
            "id": 4,
            "label": "White Collectors"
          },
          {
            "id": 5,
            "label": "Red Collectors"
          }
        ]
      }
    ]
  },

];

function App() {
  return (
    <div className="App  panel ">
      <List data={mockData}></List>
    </div>
  );
}

export default App;
