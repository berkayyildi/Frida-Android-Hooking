var module = Process.findModuleByName("libA.so");

Module.enumerateExportsSync(module.name).forEach(function (exp) {
       console.log("Hook: " + exp.name + " in: " + module.name + " at: " + ptr(exp.address));
       try {
           Interceptor.attach(ptr(exp.address), {
               onEnter: function (args) {
                   console.log("Called: "+ exp.name);
               }
           });
        } catch (e) {
           console.log("Error: " + e + " at F: " + exp.name + "in M: " + module.name);
        }
   });
