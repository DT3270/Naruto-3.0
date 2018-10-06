           var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
            
            function startDB() {
            
                dataBase = indexedDB.open("object", 1);
                
                dataBase.onupgradeneeded = function (e) {

                    active = dataBase.result;
                    
                    object = active.createObjectStore("people", { keyPath : 'id', autoIncrement : true });
                    object.createIndex('by_name', 'name', { unique : false });
                    object.createIndex('by_dni', 'dni', { unique : true });
                };

                dataBase.onsuccess = function (e) {
                    alert('Base de datos cargada correctamente');
        
                };
        
                dataBase.onerror = function (e)  {
                    alert('Error cargando la base de datos');
                };
            }