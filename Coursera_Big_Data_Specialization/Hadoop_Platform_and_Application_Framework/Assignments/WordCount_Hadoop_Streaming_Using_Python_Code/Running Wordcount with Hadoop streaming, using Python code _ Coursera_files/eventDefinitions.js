define("bundles/phoenix/lib/eventDefinitions",["require","exports","module","underscore","bundles/phoenix/template/models/userIdentity"],function(require,exports,module){"use strict";var _=require("underscore"),e=require("bundles/phoenix/template/models/userIdentity");module.exports={metadata:function metadata(t,e){return e=e||"itemMetadata",function(){return this[e].get(t)}},user:{id:function id(){return e.get("id")}}}});