import  { useState } from 'react';
import { motion } from 'framer-motion';
// import {  Compass, Mountain, Building, Leaf, Church } from 'lucide-react';



const regions = [
  {
    id: "koshi",
    name: "Koshi",
    description: "Tea gardens and diverse landscapes",
    image: "/api/placeholder/300/200",
    attractions: ["Sagarmatha", "Kanchenjunga"]
  },
  {
    id: "madhesh",
    name: "Madhesh",
    description: "Cultural heritage and historical sites",
    image: "/api/placeholder/300/200",
    attractions: ["Janaki Temple", "Lumbini"]
  },
  {
    id: "bagmati",
    name: "Bagmati",
    description: "Heart of Nepal's cultural heritage",
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDw8NDw8NDQ0NDw0NDQ0NDw8NDQ0NFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0lHSUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALkBEAMBEQACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAAAQIDBQQG/8QAORAAAQQBAgIGBwYGAwAAAAAAAAECERIDBCExUQUTIjJB0RUjUmGBkcEUM0JxobEGU2JjkqIkcoL/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAArEQEAAgEDAgYCAgIDAAAAAAAAARECAxITIVEEMUFhofAiMhSxI9FxgZH/2gAMAwEAAhEDEQA/APrsfAfcWwFsQWwCxBbBSxBbEVbGRbEVbGZgWxmYVbEpSxFWxmhbEUsSlWxmYUsZmFWxJgLEpSxKCwpSwoSwCxYhEsaGbFhGVcaiESxpEsWkSxqkSTVCWLSOFj1uSo4gWCrYBYgWFC2CrYgI4kwNI4zMKtjNC2MqWFKtjNC2MzCliUFiUq2MzCrYiliUq2M0pYUFiCWFKWFIliiWKjNjUIiuNUiWNRCIrjcQhYoli0iWNRCOEnoYJAtgFgFgLYgWCrYgskFsSlLEoWxKUsShbGaFsSlLEpSxKFsSlWxmYUsZ2qtibVLGaCxKVbChFcWhFcWMUSxYxRmxuIQsaiBLGqRLGohCTVIkikSTUQOFjs5liKsgJAWKEkUsBbEFkBYlC2JSrYUFiUpYlC2JQWJtVbEoLEpSxNotibVWxnaq2JtUsTaFhtUVxYxEsa2ozYsQhY1SMq41EBYtIli0hYtIWLQli0jhJ0YJAskUkBICQLICSCyFJAskCQEkoJFKSKFklBYUqySgsSltbE2lrYlKWJS2skpbLFoSw2iK4tJaK4tJaWNUlpYUWSWkJLQklQkUhJRiCskFCCKQBYAQQUBAFgKQBYCEEAKQAgBACAAFJSgLCUtqSlsFLYKLQtJaCiwtJaBLQoBEKAAqBRupAggVAVClRYVILACALUBACALBAgoQQKgICEC1IKhBFIAQAgKsEUVBExPksxMJBWUgokBEgBACAJBQgIQUSCjtBkIIEEtSBYQS1IFhAsWBYQLRYFqQLCALAtCBYQSwgWECwgWEFEgWEFCABmYuKWJpXuVd1VV8N+Rz0tHHT/V01NXLOerJ1ckgokCwgCCwgBAsQoQUIKjqZEMypJFCWAtQWKLCSWBbFJYSLRRYFAgSLAWEiwkWJIsJFiSWwkWJJQkCSAkCSAkCSVCQpIEkqElAqPPTpzAs7vSObY3Os+Hzc+XEXpvBskvWeTVM8Ga82Kr01gSd3bcmqpn+PmvLiqdM4V/E74puhJ8PmcuKN6awrO7tubVQfx8zmxX0zhmJdzmqwP4+a82IvTOFI3fvyYqj+PmcuI7pnCni/jGzHKI8PmcuKr0xhRJl+39t6/QnBn9k5cWl6YwxMv4T3HeQ4MzlxPTGGJl8RPcfw+Q4M/snLivpfDFrOiJ7juHyHBmcuI7pfCiSqujZe4/yHBn9k5cR3S+FPxO3VE+7fxX4Dgz+ycuIvS2FISzt9k9Xk8hwZ/ZOXE9LYZiXzE/d5PInBn9mDkxVvSuFZSztlhfV5PIcGf2YOTFxz9NYmtR7UfknwRjm89+1HjHzNY+Hymanok6uNOqdK4tt3IrvDq8i/nwQzw5/ZhrkxPSeLftP24+ry8p5Dhz+zByYnpPDstn9qI9Xk8hw5/ZhOTE9J4t+07bj6vJynkOHP7MLyYnpLFt2n77p6vJ5F4svswb8T0li9p3Gv3eXjMchxZ/ZhOTEXpHFv2ndnj6vLt+heLL7MG/EXpDFvu7ZJX1eXZP8ScWX2YXfB9vx83cLfd5eHPujjy+yb4R3SOJOLnJtO+PIm3yLGll2TfiynSeH2lRU8FY/57IOHI34r6Sw+37u6/yHFn2N+J6Rw+3z/C/yHFn2XfiekcPt/wCr/IceXZN+LSa/F7afFHJ9C8eXY3w7NzNVJRzVReCyhKmFuH5bTdOapLqmCyvfZ0I9ERatbHyRF+J7ctHTmury46ufZp/TWqc7Gq6dUVrlc1O2lnVckfJV+Rnh04ieq8uczH4uz+l9YrVRdMqIqKirZ2yGI0tKJ/ZqdTUr9WMfTGsRERMCKiIiIvb3SOPETo6V9ZI1NTsul6S1nbVMCOVXy7tK2HVbtx5Ii/EZael0uTHPU7NN12t6yeobaipW6923GZ5k2aO3zXdqX5Lm1musxVxY2qjlVkvVUV1XJ7XKfkIx0anqTlq9kzavXqiWZhRt8a7K7vI5FT8fOBjjoR5TJOWr6xC59Rr3Y3I5uKqoqOWXWj8pgYxoxl0JnVrrTrlza9WrLcCNVjp3fNY48eJmI0b9Vnlr0YXLr1YqeopRU/HNa/nyL/hv1s/y16N5Ha5cSoq6enVqi75LUr8pgkTo7vWyeSvRnUO1y43WfgpXeLzXb9S4zo7ukTZlGrXnDWddbtbJgjrMa7I/vWSPDnBMZ0fSJJjU9Zhcn2yzFdmwzZ1YY/ZaL7uUkidKpqJWY1L84I1d/v8AHanHq3d2RelX6/JWpfm1gbqpf69k2RXL1Tl3q36QTLLTqPx+SIz7/DirdT1SevbSERE6r3p4/ma3ae7y6/8AKVnXn8NvTV3bOZs9qqpjTbbcROlU1C1qX5sf8qz4zKi7WXqk37Ke4t6dR0+UrPv8MtTUxj9c5URW1amJNuyqJ4chu0+vT5Ss+7pXUducuTdN4Zh37P8A2Juw6dI+VrLv/TKdf2O1qNkVGwzTbJCf1fuW8OvSPn/RWXv8MK7PETqVS88MCdq08+MlvD2+U/L3+Fd16o+V1G8T9zvsnGPoInHp5fJ+Xv8ADSrll0u1O7YXZvDfj2eG4vH2Xr7qvWLO+p7sctuXd4EvH2OvumRHqiordW5FaicWx4+7gWJj2OvuwmD+1qPDjHkXf7wm32lv7Mn8vUcfevh+RN/vC7faWk07f5efhyd5E3+8LtjtLaYW/wAvP/g/yJvnvBUdpEYz2M6f+HeRbnvBUdpbpi8ceoX8muj9i3l3g6dnfDpnNV+3eci/6on0OeWcTTURS5dO5VYvsun9FT6md8dVq3R2J8KnNFMbotqkw4HI1qckRCTnEyRHQxaZyK7fvOt+iJ9BOcSRC/ZnXR0/hVv6yN8VRXW1yaVyq1Z7qz+ip9SRnEFGXSK5InxRfkskjUiJJi2n6RVarVXZRGpEStKukVUifCCchQmj7NZWIr8BydSmvsaVrKxWvwJydbKHaNFbVV2VIEanqUr9Gipuvii/FBGrRSrpGqqLyWUJySUv2Vsz4xHwHJJSt0zUn37qSc5WmMukaraljUm0p0TTpt7vcZ5FpepTf3jkKOpTbbh7hyFL1Kcibyjqk+Q3lKuL3EjViVnGYTqze9KKE3FLQbiig3lFS7gglgLFLYILFktoVQs5IVQlqQhmZUhCCbANiC7C1BYEsUm4CbigboKCboWgbigAAkXASOgSTodVJ0CR0CSVBZIqFtXkwhrNk6MBbEFwBUSQMqpqEJKJIFsUJKgjihYUpYzQliULYBYBJlVsAsShbCgsTatlhQSSgkUEigkUFhtCxdoWG0tLF2oWJSkkoWSSqucMYXJLGtqFhSJYUFhQlixEiKpYhEk1EIkmoCRCJIGbGhLCgsRSxJFsAsShbALALEFsKCwpRHikWxKCwpUsKCxaCwoLALALAWxFLEoEcKBzhCylioWAWAWCJYoljVIWKEgLBEsByk0FgEkoJASQWwoJAtgFhQWFBYUFhQWFBYULYlKWASAklBYilgLYBIUkgK4EpICSoklCwQkolgJY0DXou6LImKRqQEgcpNIDzAUEkCQEgJAslpSQEkCQEgJILICSKSQJKEkCSCyRSSBIUkgIv7qJkJASWxJLaJYojnFhH5rP/FSY8j8eRiKjHORH43d6F2hHJ9fnxPo4+B3YxljP/rxT4vblMTD68fTumyoiOerEWF7ct3T+tqwm/vOc+F1cJuIt0jxGnl5zT6+hV9VFkenWZ4VFsletdG/jt+5z8R+3l6R/Tej+v/c/29GTg6klGDSACRQkkCQJJRZFBICSCyRSQEgJASSQkikkFkBICTKkkFkKSQJIEksJLYSWwAhYRFNWPly6LG6bMa6eZ1x1co8pYnDGfOHnZ/4f0qrviRsz2mqrP2PRj4vVj1ccvDac+jr/AA5p2MwqmNVVi5c0TEwj1akr47NJ4rOcs/y7QeHxjHHp3l66Hmd1KMGkAIQCiACAUAAVSAQCAFJJISQJIKJAiqQCKEAkii1CWAsC2AsC2iGrAqOebEj2q1eCwbxy2ykxbOi0yYmJjbwRXL83Kv1NZ5znNyzhjGMVDuZaCoxJuEJAASQBBCgAIoAILJAkgSRSQIBSWKRQgEtVJYpmZUIAAAAASUSSoFgDSLJbAqBqAKMSdGCQqSREKpJAkUJIFkgSKUkkhJAkgSFUgECTKqAkyqksUlqEABICQEgJASVCQJJsAhJqAkqEmgkI5WO1MlgFgEgSSBICSUEhSQEmQVQpJBZMhIUILJlVkgskFkzKkgJASAkBICQEgSShJUJKEloJLSJJoJKhJocbHamCwoLEEsAsKCwCSBYUpYgWMi2IpYgskUkkhYKtiULYyq2JQskoJJQSKCwoRXFoJIFi0FhQWLQli0hYoSWICS0hYtCSVEsaoYOvqyhUBAISfIQqhlFE+agEJIpJUUnqAhRPIyIvFPiBpRCqSfJVMyKYBArRlAoy3h8wAUUopEQ0IpYQChfRFIIajyELHkgWEQpD/9k=",
    attractions: ["Durbar Square", "Pashupatinath"]
  },
  {
    id: "gandaki",
    name: "Gandaki",
    description: "Adventure and natural beauty",
    image: "/api/placeholder/300/200",
    attractions: ["Annapurna", "Pokhara"]
  },
  {
    id: "lumbini",
    name: "Lumbini",
    description: "Birthplace of Buddha",
    image: "data:image/jpeg;base64,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",
    attractions: ["Maya Devi", "Peace Pagoda"]
  },
  {
    id: "karnali",
    name: "Karnali",
    description: "Pristine wilderness and culture",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpZtGlEIuaSUZqXJC7IHMZd-JY35a7k6XQOQ&s",
    attractions: ["Rara Lake", "Shey Phoksundo"]
  }
];

function MapofNepal() {
  // const [selectedCategory, setSelectedCategory] = useState('provinces');
  const [hoveredRegion, setHoveredRegion] = useState(null);

  return (
    <div className="min-h-screen bg-gray-150">
      <div className="min-h-screen backdrop-blur-sm bg-gray-25">
        <div className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <motion.div 
              className="relative inline-block"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h1 className="text-6xl font-bold font-['Cinzel'] mb-4 relative z-10">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-700 via-green-700 to-green-700 drop-shadow-[0_0_15px_rgba(220,200,77,0.3)]">
                  Places to go
                </span>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-amber-600/0 via-green-700 to-green-700/0"></div>
              </h1>
            </motion.div>
            
            <motion.p 
              className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto font-['Crimson_Text'] italic"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Discover the hidden gems and iconic destinations across Nepal's diverse landscapes
            </motion.p>

            {/* Categories */}
       
          </motion.div>

          {/* Regions Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {regions.map((region, index) => (
              <motion.div
                key={region.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setHoveredRegion(region.id)}
                onHoverEnd={() => setHoveredRegion(null)}
                className="group cursor-pointer relative"
              >
                <motion.div 
                  className="relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={region.image}
                      alt={region.name}
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent">
                    <div className="absolute bottom-0 p-4 w-full">
                      <h3 className="text-lg font-bold mb-1 text-white font-['Cinzel']">{region.name}</h3>
                      <p className="text-white/90 text-sm mb-2 line-clamp-2 font-['Crimson_Text']">{region.description}</p>
                      <div className="flex flex-wrap gap-1">
 
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapofNepal;
