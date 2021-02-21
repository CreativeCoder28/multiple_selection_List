
import './App.css';
import List from './component/Tree/List';

const mockData = [
  {
    "id": 1,
    "header": "SubCategories",
    "label": "Automatic control engineering and control technologies",
    "children": [
      {
        "id": 1,
        "header": "Sub-Products",
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
        "header": "Sub-Products",
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
        "header": "Sub-Products",
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
        "header": "Sub-Products",
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
        "header": "Sub-Products",
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
    "header": "SubCategories",
    "label": "Communication equipment",
    "children": [
      {
        "id": 1,
        "header": "Sub-Products",
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
        "header": "Sub-Products",
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
        "header": "Sub-Products",
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
        "header": "Sub-Products",
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
        "header": "Sub-Products",
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
    "header": "SubCategories",
    "label": "Electric Motors",
    "children": [
      {
        "id": 1,
        "header": "Sub-Products",
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
        "header": "Sub-Products",
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
        "header": "Sub-Products",
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
        "header": "Sub-Products",
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
        "header": "Sub-Products",
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
    "header": "SubCategories",
    "label": "Electric equipment",
    "children": [
      {
        "id": 1,
        "header": "Sub-Products",
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
        "header": "Sub-Products",
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
        "header": "Sub-Products",
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
        "header": "Sub-Products",
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
        "header": "Sub-Products",
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
    "header": "SubCategories",
    "label": "Electric components",
    "children": [
      {
        "id": 1,
        "header": "Sub-Products",
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
        "header": "Sub-Products",
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
        "header": "Sub-Products",
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
        "header": "Sub-Products",
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
        "header": "Sub-Products",
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
    "header": "SubCategories",
    "label": "Factory euipment, maintenance accessories",
    "children": [
      {
        "id": 1,
        "header": "Sub-Products",
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
        "header": "Sub-Products",
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
        "header": "Sub-Products",
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
        "header": "Sub-Products",
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
        "header": "Sub-Products",
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
    "header": "SubCategories",
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
    <div className="App .d-flex">
      <h1> Products </h1>
      <div className="panel">
        <List data={mockData}></List>
      </div>

    </div>
  );
}

export default App;
