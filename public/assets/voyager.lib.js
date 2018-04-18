/*!
 * GraphQL Voyager - Represent any GraphQL API as an interactive graph
 * -------------------------------------------------------------
 *   Version: "1.0.0-rc.9"
 *   Repo: https://github.com/APIs-guru/graphql-voyager
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"), require("lodash"), require("react-redux"), require("reselect"), require("graphql"), require("svg-pan-zoom"), require("@f/animate"), require("react-modal"), require("classnames"), require("clipboard"), require("marked"), require("redux"), require("redux-thunk"));
	else if(typeof define === 'function' && define.amd)
		define("GraphQLVoyager", ["react", "react-dom", "lodash", "react-redux", "reselect", "graphql", "svg-pan-zoom", "@f/animate", "react-modal", "classnames", "clipboard", "marked", "redux", "redux-thunk"], factory);
	else if(typeof exports === 'object')
		exports["GraphQLVoyager"] = factory(require("react"), require("react-dom"), require("lodash"), require("react-redux"), require("reselect"), require("graphql"), require("svg-pan-zoom"), require("@f/animate"), require("react-modal"), require("classnames"), require("clipboard"), require("marked"), require("redux"), require("redux-thunk"));
	else
		root["GraphQLVoyager"] = factory(root["React"], root["ReactDOM"], root["_"], root["react-redux"], root["reselect"], root["graphql"], root["svg-pan-zoom"], root["@f/animate"], root["react-modal"], root["classnames"], root["clipboard"], root["marked"], root["redux"], root["redux-thunk"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_27__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_28__, __WEBPACK_EXTERNAL_MODULE_98__, __WEBPACK_EXTERNAL_MODULE_148__, __WEBPACK_EXTERNAL_MODULE_149__, __WEBPACK_EXTERNAL_MODULE_190__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_195__, __WEBPACK_EXTERNAL_MODULE_159__, __WEBPACK_EXTERNAL_MODULE_89__, __WEBPACK_EXTERNAL_MODULE_90__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 82);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GraphQLNonNull = exports.GraphQLList = exports.GraphQLInputObjectType = exports.GraphQLEnumType = exports.GraphQLUnionType = exports.GraphQLInterfaceType = exports.GraphQLObjectType = exports.GraphQLScalarType = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.isType = isType;
exports.assertType = assertType;
exports.isInputType = isInputType;
exports.assertInputType = assertInputType;
exports.isOutputType = isOutputType;
exports.assertOutputType = assertOutputType;
exports.isLeafType = isLeafType;
exports.assertLeafType = assertLeafType;
exports.isCompositeType = isCompositeType;
exports.assertCompositeType = assertCompositeType;
exports.isAbstractType = isAbstractType;
exports.assertAbstractType = assertAbstractType;
exports.getNullableType = getNullableType;
exports.isNamedType = isNamedType;
exports.assertNamedType = assertNamedType;
exports.getNamedType = getNamedType;

var _invariant = __webpack_require__(4);

var _invariant2 = _interopRequireDefault(_invariant);

var _isNullish = __webpack_require__(14);

var _isNullish2 = _interopRequireDefault(_isNullish);

var _kinds = __webpack_require__(10);

var Kind = _interopRequireWildcard(_kinds);

var _assertValidName = __webpack_require__(34);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

// Predicates & Assertions

/**
 * These are all of the possible kinds of types.
 */
function isType(type) {
  return type instanceof GraphQLScalarType || type instanceof GraphQLObjectType || type instanceof GraphQLInterfaceType || type instanceof GraphQLUnionType || type instanceof GraphQLEnumType || type instanceof GraphQLInputObjectType || type instanceof GraphQLList || type instanceof GraphQLNonNull;
}

function assertType(type) {
  !isType(type) ? (0, _invariant2.default)(0, 'Expected ' + String(type) + ' to be a GraphQL type.') : void 0;
  return type;
}

/**
 * These types may be used as input types for arguments and directives.
 */
function isInputType(type) {
  return type instanceof GraphQLScalarType || type instanceof GraphQLEnumType || type instanceof GraphQLInputObjectType || type instanceof GraphQLNonNull && isInputType(type.ofType) || type instanceof GraphQLList && isInputType(type.ofType);
}

function assertInputType(type) {
  !isInputType(type) ? (0, _invariant2.default)(0, 'Expected ' + String(type) + ' to be a GraphQL input type.') : void 0;
  return type;
}

/**
 * These types may be used as output types as the result of fields.
 */
function isOutputType(type) {
  return type instanceof GraphQLScalarType || type instanceof GraphQLObjectType || type instanceof GraphQLInterfaceType || type instanceof GraphQLUnionType || type instanceof GraphQLEnumType || type instanceof GraphQLNonNull && isOutputType(type.ofType) || type instanceof GraphQLList && isOutputType(type.ofType);
}

function assertOutputType(type) {
  !isOutputType(type) ? (0, _invariant2.default)(0, 'Expected ' + String(type) + ' to be a GraphQL output type.') : void 0;
  return type;
}

/**
 * These types may describe types which may be leaf values.
 */
function isLeafType(type) {
  return type instanceof GraphQLScalarType || type instanceof GraphQLEnumType;
}

function assertLeafType(type) {
  !isLeafType(type) ? (0, _invariant2.default)(0, 'Expected ' + String(type) + ' to be a GraphQL leaf type.') : void 0;
  return type;
}

/**
 * These types may describe the parent context of a selection set.
 */
function isCompositeType(type) {
  return type instanceof GraphQLObjectType || type instanceof GraphQLInterfaceType || type instanceof GraphQLUnionType;
}

function assertCompositeType(type) {
  !isCompositeType(type) ? (0, _invariant2.default)(0, 'Expected ' + String(type) + ' to be a GraphQL composite type.') : void 0;
  return type;
}

/**
 * These types may describe the parent context of a selection set.
 */
function isAbstractType(type) {
  return type instanceof GraphQLInterfaceType || type instanceof GraphQLUnionType;
}

function assertAbstractType(type) {
  !isAbstractType(type) ? (0, _invariant2.default)(0, 'Expected ' + String(type) + ' to be a GraphQL abstract type.') : void 0;
  return type;
}

/**
 * These types can all accept null as a value.
 */
function getNullableType(type) {
  return type instanceof GraphQLNonNull ? type.ofType : type;
}

/**
 * These named types do not include modifiers like List or NonNull.
 */
function isNamedType(type) {
  return type instanceof GraphQLScalarType || type instanceof GraphQLObjectType || type instanceof GraphQLInterfaceType || type instanceof GraphQLUnionType || type instanceof GraphQLEnumType || type instanceof GraphQLInputObjectType;
}

function assertNamedType(type) {
  !isNamedType(type) ? (0, _invariant2.default)(0, 'Expected ' + String(type) + ' to be a GraphQL named type.') : void 0;
  return type;
}

/* eslint-disable no-redeclare */
function getNamedType(type) {
  /* eslint-enable no-redeclare */
  if (type) {
    var unmodifiedType = type;
    while (unmodifiedType instanceof GraphQLList || unmodifiedType instanceof GraphQLNonNull) {
      unmodifiedType = unmodifiedType.ofType;
    }
    return unmodifiedType;
  }
}

/**
 * Used while defining GraphQL types to allow for circular references in
 * otherwise immutable type definitions.
 */


function resolveThunk(thunk) {
  return typeof thunk === 'function' ? thunk() : thunk;
}

/**
 * Scalar Type Definition
 *
 * The leaf values of any request and input values to arguments are
 * Scalars (or Enums) and are defined with a name and a series of functions
 * used to parse input from ast or variables and to ensure validity.
 *
 * Example:
 *
 *     const OddType = new GraphQLScalarType({
 *       name: 'Odd',
 *       serialize(value) {
 *         return value % 2 === 1 ? value : null;
 *       }
 *     });
 *
 */

var GraphQLScalarType = exports.GraphQLScalarType = function () {
  function GraphQLScalarType(config) {
    _classCallCheck(this, GraphQLScalarType);

    (0, _assertValidName.assertValidName)(config.name);
    this.name = config.name;
    this.description = config.description;
    this.astNode = config.astNode;
    !(typeof config.serialize === 'function') ? (0, _invariant2.default)(0, this.name + ' must provide "serialize" function. If this custom Scalar ' + 'is also used as an input type, ensure "parseValue" and "parseLiteral" ' + 'functions are also provided.') : void 0;
    if (config.parseValue || config.parseLiteral) {
      !(typeof config.parseValue === 'function' && typeof config.parseLiteral === 'function') ? (0, _invariant2.default)(0, this.name + ' must provide both "parseValue" and "parseLiteral" ' + 'functions.') : void 0;
    }
    this._scalarConfig = config;
  }

  // Serializes an internal value to include in a response.


  GraphQLScalarType.prototype.serialize = function serialize(value) {
    var serializer = this._scalarConfig.serialize;
    return serializer(value);
  };

  // Determines if an internal value is valid for this type.
  // Equivalent to checking for if the parsedValue is nullish.


  GraphQLScalarType.prototype.isValidValue = function isValidValue(value) {
    return !(0, _isNullish2.default)(this.parseValue(value));
  };

  // Parses an externally provided value to use as an input.


  GraphQLScalarType.prototype.parseValue = function parseValue(value) {
    var parser = this._scalarConfig.parseValue;
    return parser && !(0, _isNullish2.default)(value) ? parser(value) : undefined;
  };

  // Determines if an internal value is valid for this type.
  // Equivalent to checking for if the parsedLiteral is nullish.


  GraphQLScalarType.prototype.isValidLiteral = function isValidLiteral(valueNode) {
    return !(0, _isNullish2.default)(this.parseLiteral(valueNode));
  };

  // Parses an externally provided literal value to use as an input.


  GraphQLScalarType.prototype.parseLiteral = function parseLiteral(valueNode) {
    var parser = this._scalarConfig.parseLiteral;
    return parser ? parser(valueNode) : undefined;
  };

  GraphQLScalarType.prototype.toString = function toString() {
    return this.name;
  };

  return GraphQLScalarType;
}();

// Also provide toJSON and inspect aliases for toString.


GraphQLScalarType.prototype.toJSON = GraphQLScalarType.prototype.inspect = GraphQLScalarType.prototype.toString;

/**
 * Object Type Definition
 *
 * Almost all of the GraphQL types you define will be object types. Object types
 * have a name, but most importantly describe their fields.
 *
 * Example:
 *
 *     const AddressType = new GraphQLObjectType({
 *       name: 'Address',
 *       fields: {
 *         street: { type: GraphQLString },
 *         number: { type: GraphQLInt },
 *         formatted: {
 *           type: GraphQLString,
 *           resolve(obj) {
 *             return obj.number + ' ' + obj.street
 *           }
 *         }
 *       }
 *     });
 *
 * When two types need to refer to each other, or a type needs to refer to
 * itself in a field, you can use a function expression (aka a closure or a
 * thunk) to supply the fields lazily.
 *
 * Example:
 *
 *     const PersonType = new GraphQLObjectType({
 *       name: 'Person',
 *       fields: () => ({
 *         name: { type: GraphQLString },
 *         bestFriend: { type: PersonType },
 *       })
 *     });
 *
 */
var GraphQLObjectType = exports.GraphQLObjectType = function () {
  function GraphQLObjectType(config) {
    _classCallCheck(this, GraphQLObjectType);

    (0, _assertValidName.assertValidName)(config.name, config.isIntrospection);
    this.name = config.name;
    this.description = config.description;
    this.astNode = config.astNode;
    this.extensionASTNodes = config.extensionASTNodes || [];
    if (config.isTypeOf) {
      !(typeof config.isTypeOf === 'function') ? (0, _invariant2.default)(0, this.name + ' must provide "isTypeOf" as a function.') : void 0;
    }
    this.isTypeOf = config.isTypeOf;
    this._typeConfig = config;
  }

  GraphQLObjectType.prototype.getFields = function getFields() {
    return this._fields || (this._fields = defineFieldMap(this, this._typeConfig.fields));
  };

  GraphQLObjectType.prototype.getInterfaces = function getInterfaces() {
    return this._interfaces || (this._interfaces = defineInterfaces(this, this._typeConfig.interfaces));
  };

  GraphQLObjectType.prototype.toString = function toString() {
    return this.name;
  };

  return GraphQLObjectType;
}();

// Also provide toJSON and inspect aliases for toString.


GraphQLObjectType.prototype.toJSON = GraphQLObjectType.prototype.inspect = GraphQLObjectType.prototype.toString;

function defineInterfaces(type, interfacesThunk) {
  var interfaces = resolveThunk(interfacesThunk);
  if (!interfaces) {
    return [];
  }
  !Array.isArray(interfaces) ? (0, _invariant2.default)(0, type.name + ' interfaces must be an Array or a function which returns ' + 'an Array.') : void 0;

  var implementedTypeNames = Object.create(null);
  interfaces.forEach(function (iface) {
    !(iface instanceof GraphQLInterfaceType) ? (0, _invariant2.default)(0, type.name + ' may only implement Interface types, it cannot ' + ('implement: ' + String(iface) + '.')) : void 0;
    !!implementedTypeNames[iface.name] ? (0, _invariant2.default)(0, type.name + ' may declare it implements ' + iface.name + ' only once.') : void 0;
    implementedTypeNames[iface.name] = true;
    if (typeof iface.resolveType !== 'function') {
      !(typeof type.isTypeOf === 'function') ? (0, _invariant2.default)(0, 'Interface Type ' + iface.name + ' does not provide a "resolveType" ' + ('function and implementing Type ' + type.name + ' does not provide a ') + '"isTypeOf" function. There is no way to resolve this implementing ' + 'type during execution.') : void 0;
    }
  });
  return interfaces;
}

function defineFieldMap(type, fieldsThunk) {
  var fieldMap = resolveThunk(fieldsThunk);
  !isPlainObj(fieldMap) ? (0, _invariant2.default)(0, type.name + ' fields must be an object with field names as keys or a ' + 'function which returns such an object.') : void 0;

  var fieldNames = Object.keys(fieldMap);
  !(fieldNames.length > 0) ? (0, _invariant2.default)(0, type.name + ' fields must be an object with field names as keys or a ' + 'function which returns such an object.') : void 0;

  var resultFieldMap = Object.create(null);
  fieldNames.forEach(function (fieldName) {
    (0, _assertValidName.assertValidName)(fieldName);
    var fieldConfig = fieldMap[fieldName];
    !isPlainObj(fieldConfig) ? (0, _invariant2.default)(0, type.name + '.' + fieldName + ' field config must be an object') : void 0;
    !!fieldConfig.hasOwnProperty('isDeprecated') ? (0, _invariant2.default)(0, type.name + '.' + fieldName + ' should provide "deprecationReason" instead ' + 'of "isDeprecated".') : void 0;
    var field = _extends({}, fieldConfig, {
      isDeprecated: Boolean(fieldConfig.deprecationReason),
      name: fieldName
    });
    !isOutputType(field.type) ? (0, _invariant2.default)(0, type.name + '.' + fieldName + ' field type must be Output Type but ' + ('got: ' + String(field.type) + '.')) : void 0;
    !isValidResolver(field.resolve) ? (0, _invariant2.default)(0, type.name + '.' + fieldName + ' field resolver must be a function if ' + ('provided, but got: ' + String(field.resolve) + '.')) : void 0;
    var argsConfig = fieldConfig.args;
    if (!argsConfig) {
      field.args = [];
    } else {
      !isPlainObj(argsConfig) ? (0, _invariant2.default)(0, type.name + '.' + fieldName + ' args must be an object with argument ' + 'names as keys.') : void 0;
      field.args = Object.keys(argsConfig).map(function (argName) {
        (0, _assertValidName.assertValidName)(argName);
        var arg = argsConfig[argName];
        !isInputType(arg.type) ? (0, _invariant2.default)(0, type.name + '.' + fieldName + '(' + argName + ':) argument type must be ' + ('Input Type but got: ' + String(arg.type) + '.')) : void 0;
        return {
          name: argName,
          description: arg.description === undefined ? null : arg.description,
          type: arg.type,
          defaultValue: arg.defaultValue,
          astNode: arg.astNode
        };
      });
    }
    resultFieldMap[fieldName] = field;
  });
  return resultFieldMap;
}

function isPlainObj(obj) {
  return obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && !Array.isArray(obj);
}

// If a resolver is defined, it must be a function.
function isValidResolver(resolver) {
  return resolver == null || typeof resolver === 'function';
}

/**
 * Interface Type Definition
 *
 * When a field can return one of a heterogeneous set of types, a Interface type
 * is used to describe what types are possible, what fields are in common across
 * all types, as well as a function to determine which type is actually used
 * when the field is resolved.
 *
 * Example:
 *
 *     const EntityType = new GraphQLInterfaceType({
 *       name: 'Entity',
 *       fields: {
 *         name: { type: GraphQLString }
 *       }
 *     });
 *
 */
var GraphQLInterfaceType = exports.GraphQLInterfaceType = function () {
  function GraphQLInterfaceType(config) {
    _classCallCheck(this, GraphQLInterfaceType);

    (0, _assertValidName.assertValidName)(config.name);
    this.name = config.name;
    this.description = config.description;
    this.astNode = config.astNode;
    if (config.resolveType) {
      !(typeof config.resolveType === 'function') ? (0, _invariant2.default)(0, this.name + ' must provide "resolveType" as a function.') : void 0;
    }
    this.resolveType = config.resolveType;
    this._typeConfig = config;
  }

  GraphQLInterfaceType.prototype.getFields = function getFields() {
    return this._fields || (this._fields = defineFieldMap(this, this._typeConfig.fields));
  };

  GraphQLInterfaceType.prototype.toString = function toString() {
    return this.name;
  };

  return GraphQLInterfaceType;
}();

// Also provide toJSON and inspect aliases for toString.


GraphQLInterfaceType.prototype.toJSON = GraphQLInterfaceType.prototype.inspect = GraphQLInterfaceType.prototype.toString;

/**
 * Union Type Definition
 *
 * When a field can return one of a heterogeneous set of types, a Union type
 * is used to describe what types are possible as well as providing a function
 * to determine which type is actually used when the field is resolved.
 *
 * Example:
 *
 *     const PetType = new GraphQLUnionType({
 *       name: 'Pet',
 *       types: [ DogType, CatType ],
 *       resolveType(value) {
 *         if (value instanceof Dog) {
 *           return DogType;
 *         }
 *         if (value instanceof Cat) {
 *           return CatType;
 *         }
 *       }
 *     });
 *
 */
var GraphQLUnionType = exports.GraphQLUnionType = function () {
  function GraphQLUnionType(config) {
    _classCallCheck(this, GraphQLUnionType);

    (0, _assertValidName.assertValidName)(config.name);
    this.name = config.name;
    this.description = config.description;
    this.astNode = config.astNode;
    if (config.resolveType) {
      !(typeof config.resolveType === 'function') ? (0, _invariant2.default)(0, this.name + ' must provide "resolveType" as a function.') : void 0;
    }
    this.resolveType = config.resolveType;
    this._typeConfig = config;
  }

  GraphQLUnionType.prototype.getTypes = function getTypes() {
    return this._types || (this._types = defineTypes(this, this._typeConfig.types));
  };

  GraphQLUnionType.prototype.toString = function toString() {
    return this.name;
  };

  return GraphQLUnionType;
}();

// Also provide toJSON and inspect aliases for toString.


GraphQLUnionType.prototype.toJSON = GraphQLUnionType.prototype.inspect = GraphQLUnionType.prototype.toString;

function defineTypes(unionType, typesThunk) {
  var types = resolveThunk(typesThunk);

  !(Array.isArray(types) && types.length > 0) ? (0, _invariant2.default)(0, 'Must provide Array of types or a function which returns ' + ('such an array for Union ' + unionType.name + '.')) : void 0;
  var includedTypeNames = Object.create(null);
  types.forEach(function (objType) {
    !(objType instanceof GraphQLObjectType) ? (0, _invariant2.default)(0, unionType.name + ' may only contain Object types, it cannot contain: ' + (String(objType) + '.')) : void 0;
    !!includedTypeNames[objType.name] ? (0, _invariant2.default)(0, unionType.name + ' can include ' + objType.name + ' type only once.') : void 0;
    includedTypeNames[objType.name] = true;
    if (typeof unionType.resolveType !== 'function') {
      !(typeof objType.isTypeOf === 'function') ? (0, _invariant2.default)(0, 'Union type "' + unionType.name + '" does not provide a "resolveType" ' + ('function and possible type "' + objType.name + '" does not provide an ') + '"isTypeOf" function. There is no way to resolve this possible type ' + 'during execution.') : void 0;
    }
  });

  return types;
}

/**
 * Enum Type Definition
 *
 * Some leaf values of requests and input values are Enums. GraphQL serializes
 * Enum values as strings, however internally Enums can be represented by any
 * kind of type, often integers.
 *
 * Example:
 *
 *     const RGBType = new GraphQLEnumType({
 *       name: 'RGB',
 *       values: {
 *         RED: { value: 0 },
 *         GREEN: { value: 1 },
 *         BLUE: { value: 2 }
 *       }
 *     });
 *
 * Note: If a value is not provided in a definition, the name of the enum value
 * will be used as its internal value.
 */
var GraphQLEnumType /* <T> */ = exports.GraphQLEnumType = function () {
  function GraphQLEnumType(config /* <T> */) {
    _classCallCheck(this, GraphQLEnumType);

    this.name = config.name;
    (0, _assertValidName.assertValidName)(config.name, config.isIntrospection);
    this.description = config.description;
    this.astNode = config.astNode;
    this._values = defineEnumValues(this, config.values);
    this._enumConfig = config;
  }

  GraphQLEnumType.prototype.getValues = function getValues() {
    return this._values;
  };

  GraphQLEnumType.prototype.getValue = function getValue(name) {
    return this._getNameLookup()[name];
  };

  GraphQLEnumType.prototype.serialize = function serialize(value /* T */) {
    var enumValue = this._getValueLookup().get(value);
    return enumValue ? enumValue.name : null;
  };

  GraphQLEnumType.prototype.isValidValue = function isValidValue(value) {
    return typeof value === 'string' && this._getNameLookup()[value] !== undefined;
  };

  GraphQLEnumType.prototype.parseValue = function parseValue(value) /* T */{
    if (typeof value === 'string') {
      var enumValue = this._getNameLookup()[value];
      if (enumValue) {
        return enumValue.value;
      }
    }
  };

  GraphQLEnumType.prototype.isValidLiteral = function isValidLiteral(valueNode) {
    return valueNode.kind === Kind.ENUM && this._getNameLookup()[valueNode.value] !== undefined;
  };

  GraphQLEnumType.prototype.parseLiteral = function parseLiteral(valueNode) /* T */{
    if (valueNode.kind === Kind.ENUM) {
      var enumValue = this._getNameLookup()[valueNode.value];
      if (enumValue) {
        return enumValue.value;
      }
    }
  };

  GraphQLEnumType.prototype._getValueLookup = function _getValueLookup() {
    if (!this._valueLookup) {
      var lookup = new Map();
      this.getValues().forEach(function (value) {
        lookup.set(value.value, value);
      });
      this._valueLookup = lookup;
    }
    return this._valueLookup;
  };

  GraphQLEnumType.prototype._getNameLookup = function _getNameLookup() {
    if (!this._nameLookup) {
      var lookup = Object.create(null);
      this.getValues().forEach(function (value) {
        lookup[value.name] = value;
      });
      this._nameLookup = lookup;
    }
    return this._nameLookup;
  };

  GraphQLEnumType.prototype.toString = function toString() {
    return this.name;
  };

  return GraphQLEnumType;
}();

// Also provide toJSON and inspect aliases for toString.


GraphQLEnumType.prototype.toJSON = GraphQLEnumType.prototype.inspect = GraphQLEnumType.prototype.toString;

function defineEnumValues(type, valueMap /* <T> */
) {
  !isPlainObj(valueMap) ? (0, _invariant2.default)(0, type.name + ' values must be an object with value names as keys.') : void 0;
  var valueNames = Object.keys(valueMap);
  !(valueNames.length > 0) ? (0, _invariant2.default)(0, type.name + ' values must be an object with value names as keys.') : void 0;
  return valueNames.map(function (valueName) {
    (0, _assertValidName.assertValidName)(valueName);
    !(['true', 'false', 'null'].indexOf(valueName) === -1) ? (0, _invariant2.default)(0, 'Name "' + valueName + '" can not be used as an Enum value.') : void 0;

    var value = valueMap[valueName];
    !isPlainObj(value) ? (0, _invariant2.default)(0, type.name + '.' + valueName + ' must refer to an object with a "value" key ' + ('representing an internal value but got: ' + String(value) + '.')) : void 0;
    !!value.hasOwnProperty('isDeprecated') ? (0, _invariant2.default)(0, type.name + '.' + valueName + ' should provide "deprecationReason" instead ' + 'of "isDeprecated".') : void 0;
    return {
      name: valueName,
      description: value.description,
      isDeprecated: Boolean(value.deprecationReason),
      deprecationReason: value.deprecationReason,
      astNode: value.astNode,
      value: value.hasOwnProperty('value') ? value.value : valueName
    };
  });
} /* <T> */


/**
 * Input Object Type Definition
 *
 * An input object defines a structured collection of fields which may be
 * supplied to a field argument.
 *
 * Using `NonNull` will ensure that a value must be provided by the query
 *
 * Example:
 *
 *     const GeoPoint = new GraphQLInputObjectType({
 *       name: 'GeoPoint',
 *       fields: {
 *         lat: { type: new GraphQLNonNull(GraphQLFloat) },
 *         lon: { type: new GraphQLNonNull(GraphQLFloat) },
 *         alt: { type: GraphQLFloat, defaultValue: 0 },
 *       }
 *     });
 *
 */
var GraphQLInputObjectType = exports.GraphQLInputObjectType = function () {
  function GraphQLInputObjectType(config) {
    _classCallCheck(this, GraphQLInputObjectType);

    (0, _assertValidName.assertValidName)(config.name);
    this.name = config.name;
    this.description = config.description;
    this.astNode = config.astNode;
    this._typeConfig = config;
  }

  GraphQLInputObjectType.prototype.getFields = function getFields() {
    return this._fields || (this._fields = this._defineFieldMap());
  };

  GraphQLInputObjectType.prototype._defineFieldMap = function _defineFieldMap() {
    var _this = this;

    var fieldMap = resolveThunk(this._typeConfig.fields);
    !isPlainObj(fieldMap) ? (0, _invariant2.default)(0, this.name + ' fields must be an object with field names as keys or a ' + 'function which returns such an object.') : void 0;
    var fieldNames = Object.keys(fieldMap);
    !(fieldNames.length > 0) ? (0, _invariant2.default)(0, this.name + ' fields must be an object with field names as keys or a ' + 'function which returns such an object.') : void 0;
    var resultFieldMap = Object.create(null);
    fieldNames.forEach(function (fieldName) {
      (0, _assertValidName.assertValidName)(fieldName);
      var field = _extends({}, fieldMap[fieldName], {
        name: fieldName
      });
      !isInputType(field.type) ? (0, _invariant2.default)(0, _this.name + '.' + fieldName + ' field type must be Input Type but ' + ('got: ' + String(field.type) + '.')) : void 0;
      !(field.resolve == null) ? (0, _invariant2.default)(0, _this.name + '.' + fieldName + ' field type has a resolve property, but ' + 'Input Types cannot define resolvers.') : void 0;
      resultFieldMap[fieldName] = field;
    });
    return resultFieldMap;
  };

  GraphQLInputObjectType.prototype.toString = function toString() {
    return this.name;
  };

  return GraphQLInputObjectType;
}();

// Also provide toJSON and inspect aliases for toString.


GraphQLInputObjectType.prototype.toJSON = GraphQLInputObjectType.prototype.inspect = GraphQLInputObjectType.prototype.toString;

/**
 * List Modifier
 *
 * A list is a kind of type marker, a wrapping type which points to another
 * type. Lists are often created within the context of defining the fields of
 * an object type.
 *
 * Example:
 *
 *     const PersonType = new GraphQLObjectType({
 *       name: 'Person',
 *       fields: () => ({
 *         parents: { type: new GraphQLList(Person) },
 *         children: { type: new GraphQLList(Person) },
 *       })
 *     })
 *
 */
var GraphQLList = exports.GraphQLList = function () {
  function GraphQLList(type) {
    _classCallCheck(this, GraphQLList);

    !isType(type) ? (0, _invariant2.default)(0, 'Can only create List of a GraphQLType but got: ' + String(type) + '.') : void 0;
    this.ofType = type;
  }

  GraphQLList.prototype.toString = function toString() {
    return '[' + String(this.ofType) + ']';
  };

  return GraphQLList;
}();

// Also provide toJSON and inspect aliases for toString.


GraphQLList.prototype.toJSON = GraphQLList.prototype.inspect = GraphQLList.prototype.toString;

/**
 * Non-Null Modifier
 *
 * A non-null is a kind of type marker, a wrapping type which points to another
 * type. Non-null types enforce that their values are never null and can ensure
 * an error is raised if this ever occurs during a request. It is useful for
 * fields which you can make a strong guarantee on non-nullability, for example
 * usually the id field of a database row will never be null.
 *
 * Example:
 *
 *     const RowType = new GraphQLObjectType({
 *       name: 'Row',
 *       fields: () => ({
 *         id: { type: new GraphQLNonNull(GraphQLString) },
 *       })
 *     })
 *
 * Note: the enforcement of non-nullability occurs within the executor.
 */

var GraphQLNonNull = exports.GraphQLNonNull = function () {
  function GraphQLNonNull(type) {
    _classCallCheck(this, GraphQLNonNull);

    !(isType(type) && !(type instanceof GraphQLNonNull)) ? (0, _invariant2.default)(0, 'Can only create NonNull of a Nullable GraphQLType but got: ' + (String(type) + '.')) : void 0;
    this.ofType = type;
  }

  GraphQLNonNull.prototype.toString = function toString() {
    return this.ofType.toString() + '!';
  };

  return GraphQLNonNull;
}();

// Also provide toJSON and inspect aliases for toString.


GraphQLNonNull.prototype.toJSON = GraphQLNonNull.prototype.inspect = GraphQLNonNull.prototype.toString;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(118)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(120)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = invariant;

/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

function invariant(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modal__ = __webpack_require__(92);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__modal__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__modal__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__modal__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_0__modal__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_0__modal__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_0__modal__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_0__modal__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_0__modal__["h"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "C", function() { return __WEBPACK_IMPORTED_MODULE_0__modal__["i"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "H", function() { return __WEBPACK_IMPORTED_MODULE_0__modal__["j"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__introspection__ = __webpack_require__(93);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__introspection__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_1__introspection__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__svg__ = __webpack_require__(94);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_2__svg__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "I", function() { return __WEBPACK_IMPORTED_MODULE_2__svg__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__display__ = __webpack_require__(95);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__display__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__display__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_3__display__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_3__display__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_3__display__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_3__display__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __WEBPACK_IMPORTED_MODULE_3__display__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "y", function() { return __WEBPACK_IMPORTED_MODULE_3__display__["h"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "D", function() { return __WEBPACK_IMPORTED_MODULE_3__display__["i"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__viewport__ = __webpack_require__(96);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_4__viewport__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_4__viewport__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_4__viewport__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_4__viewport__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_4__viewport__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_4__viewport__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "z", function() { return __WEBPACK_IMPORTED_MODULE_4__viewport__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "A", function() { return __WEBPACK_IMPORTED_MODULE_4__viewport__["h"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "B", function() { return __WEBPACK_IMPORTED_MODULE_4__viewport__["i"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "E", function() { return __WEBPACK_IMPORTED_MODULE_4__viewport__["j"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "F", function() { return __WEBPACK_IMPORTED_MODULE_4__viewport__["k"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "G", function() { return __WEBPACK_IMPORTED_MODULE_4__viewport__["l"]; });







/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _ThemeProvider = __webpack_require__(117);

Object.defineProperty(exports, 'ThemeProvider', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ThemeProvider).default;
  }
});

var _themr = __webpack_require__(122);

Object.defineProperty(exports, 'themr', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_themr).default;
  }
});
Object.defineProperty(exports, 'themeable', {
  enumerable: true,
  get: function get() {
    return _themr.themeable;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var APP_BAR = exports.APP_BAR = 'RTAppBar';
var AUTOCOMPLETE = exports.AUTOCOMPLETE = 'RTAutocomplete';
var AVATAR = exports.AVATAR = 'RTAvatar';
var BUTTON = exports.BUTTON = 'RTButton';
var CARD = exports.CARD = 'RTCard';
var CHIP = exports.CHIP = 'RTChip';
var CHECKBOX = exports.CHECKBOX = 'RTCheckbox';
var DATE_PICKER = exports.DATE_PICKER = 'RTDatePicker';
var DIALOG = exports.DIALOG = 'RTDialog';
var DRAWER = exports.DRAWER = 'RTDrawer';
var DROPDOWN = exports.DROPDOWN = 'RTDropdown';
var INPUT = exports.INPUT = 'RTInput';
var LAYOUT = exports.LAYOUT = 'RTLayout';
var LINK = exports.LINK = 'RTLink';
var LIST = exports.LIST = 'RTList';
var MENU = exports.MENU = 'RTMenu';
var NAVIGATION = exports.NAVIGATION = 'RTNavigation';
var OVERLAY = exports.OVERLAY = 'RTOverlay';
var PROGRESS_BAR = exports.PROGRESS_BAR = 'RTProgressBar';
var RADIO = exports.RADIO = 'RTRadio';
var RIPPLE = exports.RIPPLE = 'RTRipple';
var SLIDER = exports.SLIDER = 'RTSlider';
var SNACKBAR = exports.SNACKBAR = 'RTSnackbar';
var SWITCH = exports.SWITCH = 'RTSwitch';
var TABLE = exports.TABLE = 'RTTable';
var TABS = exports.TABS = 'RTTabs';
var TOOLTIP = exports.TOOLTIP = 'RTTooltip';
var TIME_PICKER = exports.TIME_PICKER = 'RTTimePicker';

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

// Name

var NAME = exports.NAME = 'Name';

// Document

var DOCUMENT = exports.DOCUMENT = 'Document';
var OPERATION_DEFINITION = exports.OPERATION_DEFINITION = 'OperationDefinition';
var VARIABLE_DEFINITION = exports.VARIABLE_DEFINITION = 'VariableDefinition';
var VARIABLE = exports.VARIABLE = 'Variable';
var SELECTION_SET = exports.SELECTION_SET = 'SelectionSet';
var FIELD = exports.FIELD = 'Field';
var ARGUMENT = exports.ARGUMENT = 'Argument';

// Fragments

var FRAGMENT_SPREAD = exports.FRAGMENT_SPREAD = 'FragmentSpread';
var INLINE_FRAGMENT = exports.INLINE_FRAGMENT = 'InlineFragment';
var FRAGMENT_DEFINITION = exports.FRAGMENT_DEFINITION = 'FragmentDefinition';

// Values

var INT = exports.INT = 'IntValue';
var FLOAT = exports.FLOAT = 'FloatValue';
var STRING = exports.STRING = 'StringValue';
var BOOLEAN = exports.BOOLEAN = 'BooleanValue';
var NULL = exports.NULL = 'NullValue';
var ENUM = exports.ENUM = 'EnumValue';
var LIST = exports.LIST = 'ListValue';
var OBJECT = exports.OBJECT = 'ObjectValue';
var OBJECT_FIELD = exports.OBJECT_FIELD = 'ObjectField';

// Directives

var DIRECTIVE = exports.DIRECTIVE = 'Directive';

// Types

var NAMED_TYPE = exports.NAMED_TYPE = 'NamedType';
var LIST_TYPE = exports.LIST_TYPE = 'ListType';
var NON_NULL_TYPE = exports.NON_NULL_TYPE = 'NonNullType';

// Type System Definitions

var SCHEMA_DEFINITION = exports.SCHEMA_DEFINITION = 'SchemaDefinition';
var OPERATION_TYPE_DEFINITION = exports.OPERATION_TYPE_DEFINITION = 'OperationTypeDefinition';

// Type Definitions

var SCALAR_TYPE_DEFINITION = exports.SCALAR_TYPE_DEFINITION = 'ScalarTypeDefinition';
var OBJECT_TYPE_DEFINITION = exports.OBJECT_TYPE_DEFINITION = 'ObjectTypeDefinition';
var FIELD_DEFINITION = exports.FIELD_DEFINITION = 'FieldDefinition';
var INPUT_VALUE_DEFINITION = exports.INPUT_VALUE_DEFINITION = 'InputValueDefinition';
var INTERFACE_TYPE_DEFINITION = exports.INTERFACE_TYPE_DEFINITION = 'InterfaceTypeDefinition';
var UNION_TYPE_DEFINITION = exports.UNION_TYPE_DEFINITION = 'UnionTypeDefinition';
var ENUM_TYPE_DEFINITION = exports.ENUM_TYPE_DEFINITION = 'EnumTypeDefinition';
var ENUM_VALUE_DEFINITION = exports.ENUM_VALUE_DEFINITION = 'EnumValueDefinition';
var INPUT_OBJECT_TYPE_DEFINITION = exports.INPUT_OBJECT_TYPE_DEFINITION = 'InputObjectTypeDefinition';

// Type Extensions

var TYPE_EXTENSION_DEFINITION = exports.TYPE_EXTENSION_DEFINITION = 'TypeExtensionDefinition';

// Directive Definitions

var DIRECTIVE_DEFINITION = exports.DIRECTIVE_DEFINITION = 'DirectiveDefinition';

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__introspection__ = __webpack_require__(97);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__introspection__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__introspection__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(51);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__utils__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__utils__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__utils__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__utils__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_1__utils__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_1__utils__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_1__utils__["g"]; });




/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
	setTimeout(fn, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__(53);
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GraphQLID = exports.GraphQLBoolean = exports.GraphQLString = exports.GraphQLFloat = exports.GraphQLInt = undefined;

var _definition = __webpack_require__(2);

var _kinds = __webpack_require__(10);

var Kind = _interopRequireWildcard(_kinds);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// As per the GraphQL Spec, Integers are only treated as valid when a valid
// 32-bit signed integer, providing the broadest support across platforms.
//
// n.b. JavaScript's integers are safe between -(2^53 - 1) and 2^53 - 1 because
// they are internally represented as IEEE 754 doubles.

/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

var MAX_INT = 2147483647;
var MIN_INT = -2147483648;

function coerceInt(value) {
  if (value === '') {
    throw new TypeError('Int cannot represent non 32-bit signed integer value: (empty string)');
  }
  var num = Number(value);
  if (num !== num || num > MAX_INT || num < MIN_INT) {
    throw new TypeError('Int cannot represent non 32-bit signed integer value: ' + String(value));
  }
  var int = Math.floor(num);
  if (int !== num) {
    throw new TypeError('Int cannot represent non-integer value: ' + String(value));
  }
  return int;
}

var GraphQLInt = exports.GraphQLInt = new _definition.GraphQLScalarType({
  name: 'Int',
  description: 'The `Int` scalar type represents non-fractional signed whole numeric ' + 'values. Int can represent values between -(2^31) and 2^31 - 1. ',
  serialize: coerceInt,
  parseValue: coerceInt,
  parseLiteral: function parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      var num = parseInt(ast.value, 10);
      if (num <= MAX_INT && num >= MIN_INT) {
        return num;
      }
    }
    return null;
  }
});

function coerceFloat(value) {
  if (value === '') {
    throw new TypeError('Float cannot represent non numeric value: (empty string)');
  }
  var num = Number(value);
  if (num === num) {
    return num;
  }
  throw new TypeError('Float cannot represent non numeric value: ' + String(value));
}

var GraphQLFloat = exports.GraphQLFloat = new _definition.GraphQLScalarType({
  name: 'Float',
  description: 'The `Float` scalar type represents signed double-precision fractional ' + 'values as specified by ' + '[IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). ',
  serialize: coerceFloat,
  parseValue: coerceFloat,
  parseLiteral: function parseLiteral(ast) {
    return ast.kind === Kind.FLOAT || ast.kind === Kind.INT ? parseFloat(ast.value) : null;
  }
});

function coerceString(value) {
  if (Array.isArray(value)) {
    throw new TypeError('String cannot represent an array value: [' + String(value) + ']');
  }
  return String(value);
}

var GraphQLString = exports.GraphQLString = new _definition.GraphQLScalarType({
  name: 'String',
  description: 'The `String` scalar type represents textual data, represented as UTF-8 ' + 'character sequences. The String type is most often used by GraphQL to ' + 'represent free-form human-readable text.',
  serialize: coerceString,
  parseValue: coerceString,
  parseLiteral: function parseLiteral(ast) {
    return ast.kind === Kind.STRING ? ast.value : null;
  }
});

var GraphQLBoolean = exports.GraphQLBoolean = new _definition.GraphQLScalarType({
  name: 'Boolean',
  description: 'The `Boolean` scalar type represents `true` or `false`.',
  serialize: Boolean,
  parseValue: Boolean,
  parseLiteral: function parseLiteral(ast) {
    return ast.kind === Kind.BOOLEAN ? ast.value : null;
  }
});

var GraphQLID = exports.GraphQLID = new _definition.GraphQLScalarType({
  name: 'ID',
  description: 'The `ID` scalar type represents a unique identifier, often used to ' + 'refetch an object or as key for a cache. The ID type appears in a JSON ' + 'response as a String; however, it is not intended to be human-readable. ' + 'When expected as an input type, any string (such as `"4"`) or integer ' + '(such as `4`) input value will be accepted as an ID.',
  serialize: String,
  parseValue: String,
  parseLiteral: function parseLiteral(ast) {
    return ast.kind === Kind.STRING || ast.kind === Kind.INT ? ast.value : null;
  }
});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isNullish;

/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * Returns true if a value is null, undefined, or NaN.
 */
function isNullish(value) {
  return value === null || value === undefined || value !== value;
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.specifiedDirectives = exports.GraphQLDeprecatedDirective = exports.DEFAULT_DEPRECATION_REASON = exports.GraphQLSkipDirective = exports.GraphQLIncludeDirective = exports.GraphQLDirective = exports.DirectiveLocation = undefined;

var _definition = __webpack_require__(2);

var _scalars = __webpack_require__(13);

var _invariant = __webpack_require__(4);

var _invariant2 = _interopRequireDefault(_invariant);

var _assertValidName = __webpack_require__(34);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

var DirectiveLocation = exports.DirectiveLocation = {
  // Operations
  QUERY: 'QUERY',
  MUTATION: 'MUTATION',
  SUBSCRIPTION: 'SUBSCRIPTION',
  FIELD: 'FIELD',
  FRAGMENT_DEFINITION: 'FRAGMENT_DEFINITION',
  FRAGMENT_SPREAD: 'FRAGMENT_SPREAD',
  INLINE_FRAGMENT: 'INLINE_FRAGMENT',
  // Schema Definitions
  SCHEMA: 'SCHEMA',
  SCALAR: 'SCALAR',
  OBJECT: 'OBJECT',
  FIELD_DEFINITION: 'FIELD_DEFINITION',
  ARGUMENT_DEFINITION: 'ARGUMENT_DEFINITION',
  INTERFACE: 'INTERFACE',
  UNION: 'UNION',
  ENUM: 'ENUM',
  ENUM_VALUE: 'ENUM_VALUE',
  INPUT_OBJECT: 'INPUT_OBJECT',
  INPUT_FIELD_DEFINITION: 'INPUT_FIELD_DEFINITION'
};

// eslint-disable-line

/**
 * Directives are used by the GraphQL runtime as a way of modifying execution
 * behavior. Type system creators will usually not create these directly.
 */
var GraphQLDirective = exports.GraphQLDirective = function GraphQLDirective(config) {
  _classCallCheck(this, GraphQLDirective);

  !config.name ? (0, _invariant2.default)(0, 'Directive must be named.') : void 0;
  (0, _assertValidName.assertValidName)(config.name);
  !Array.isArray(config.locations) ? (0, _invariant2.default)(0, 'Must provide locations for directive.') : void 0;
  this.name = config.name;
  this.description = config.description;
  this.locations = config.locations;
  this.astNode = config.astNode;

  var args = config.args;
  if (!args) {
    this.args = [];
  } else {
    !!Array.isArray(args) ? (0, _invariant2.default)(0, '@' + config.name + ' args must be an object with argument names as keys.') : void 0;
    this.args = Object.keys(args).map(function (argName) {
      (0, _assertValidName.assertValidName)(argName);
      var arg = args[argName];
      !(0, _definition.isInputType)(arg.type) ? (0, _invariant2.default)(0, '@' + config.name + '(' + argName + ':) argument type must be ' + ('Input Type but got: ' + String(arg.type) + '.')) : void 0;
      return {
        name: argName,
        description: arg.description === undefined ? null : arg.description,
        type: arg.type,
        defaultValue: arg.defaultValue,
        astNode: arg.astNode
      };
    });
  }
};

/**
 * Used to conditionally include fields or fragments.
 */
var GraphQLIncludeDirective = exports.GraphQLIncludeDirective = new GraphQLDirective({
  name: 'include',
  description: 'Directs the executor to include this field or fragment only when ' + 'the `if` argument is true.',
  locations: [DirectiveLocation.FIELD, DirectiveLocation.FRAGMENT_SPREAD, DirectiveLocation.INLINE_FRAGMENT],
  args: {
    if: {
      type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
      description: 'Included when true.'
    }
  }
});

/**
 * Used to conditionally skip (exclude) fields or fragments.
 */
var GraphQLSkipDirective = exports.GraphQLSkipDirective = new GraphQLDirective({
  name: 'skip',
  description: 'Directs the executor to skip this field or fragment when the `if` ' + 'argument is true.',
  locations: [DirectiveLocation.FIELD, DirectiveLocation.FRAGMENT_SPREAD, DirectiveLocation.INLINE_FRAGMENT],
  args: {
    if: {
      type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
      description: 'Skipped when true.'
    }
  }
});

/**
 * Constant string used for default reason for a deprecation.
 */
var DEFAULT_DEPRECATION_REASON = exports.DEFAULT_DEPRECATION_REASON = 'No longer supported';

/**
 * Used to declare element of a GraphQL schema as deprecated.
 */
var GraphQLDeprecatedDirective = exports.GraphQLDeprecatedDirective = new GraphQLDirective({
  name: 'deprecated',
  description: 'Marks an element of a GraphQL schema as no longer supported.',
  locations: [DirectiveLocation.FIELD_DEFINITION, DirectiveLocation.ENUM_VALUE],
  args: {
    reason: {
      type: _scalars.GraphQLString,
      description: 'Explains why this element was deprecated, usually also including a ' + 'suggestion for how to access supported similar data. Formatted ' + 'in [Markdown](https://daringfireball.net/projects/markdown/).',
      defaultValue: DEFAULT_DEPRECATION_REASON
    }
  }
});

/**
 * The full list of specified directives.
 */
var specifiedDirectives = exports.specifiedDirectives = [GraphQLIncludeDirective, GraphQLSkipDirective, GraphQLDeprecatedDirective];

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FontIcon = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var FontIcon = function FontIcon(_ref // eslint-disable-line
) {
  var alt = _ref.alt,
      children = _ref.children,
      className = _ref.className,
      theme = _ref.theme,
      value = _ref.value,
      other = _objectWithoutProperties(_ref, ['alt', 'children', 'className', 'theme', 'value']);

  return _react2.default.createElement(
    'span',
    _extends({
      'data-react-toolbox': 'font-icon',
      'aria-label': alt,
      className: (0, _classnames2.default)({
        'material-icons': typeof value === 'string' || typeof children === 'string'
      }, className)
    }, other),
    value,
    children
  );
};

FontIcon.propTypes = {
  alt: _propTypes2.default.string,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  theme: _propTypes2.default.object, // eslint-disable-line
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element])
};

FontIcon.defaultProps = {
  alt: '',
  className: ''
};

exports.default = FontIcon;
exports.FontIcon = FontIcon;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var _isPlaceholder = __webpack_require__(44);


/**
 * Optimized internal one-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
module.exports = function _curry1(fn) {
  return function f1(a) {
    if (arguments.length === 0 || _isPlaceholder(a)) {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  };
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BrowseButton = exports.IconButton = exports.Button = undefined;

var _reactCssThemr = __webpack_require__(7);

var _identifiers = __webpack_require__(8);

var _Button = __webpack_require__(63);

var _BrowseButton = __webpack_require__(130);

var _IconButton = __webpack_require__(131);

var _FontIcon = __webpack_require__(16);

var _ripple = __webpack_require__(67);

var _ripple2 = _interopRequireDefault(_ripple);

var _theme = __webpack_require__(133);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = (0, _Button.buttonFactory)((0, _ripple2.default)({ centered: false }), _FontIcon.FontIcon);
var IconButton = (0, _IconButton.iconButtonFactory)((0, _ripple2.default)({ centered: true }), _FontIcon.FontIcon);
var BrowseButton = (0, _BrowseButton.browseButtonFactory)((0, _ripple2.default)({ centered: false }), _FontIcon.FontIcon);
var ThemedButton = (0, _reactCssThemr.themr)(_identifiers.BUTTON, _theme2.default)(Button);
var ThemedIconButton = (0, _reactCssThemr.themr)(_identifiers.BUTTON, _theme2.default)(IconButton);
var ThemedBrowseButton = (0, _reactCssThemr.themr)(_identifiers.BUTTON, _theme2.default)(BrowseButton);

exports.default = ThemedButton;
exports.Button = ThemedButton;
exports.IconButton = ThemedIconButton;
exports.BrowseButton = ThemedBrowseButton;

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__type_graph__ = __webpack_require__(69);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__type_graph__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__type_graph__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__type_graph__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__viewport__ = __webpack_require__(147);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__viewport__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__svg_renderer__ = __webpack_require__(152);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__svg_renderer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dot__ = __webpack_require__(70);
/* unused harmony namespace reexport */






/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = keyMap;

/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * Creates a keyed JS object from an array, given a function to produce the keys
 * for each value in the array.
 *
 * This provides a convenient lookup for the array items if the key function
 * produces unique results.
 *
 *     const phoneBook = [
 *       { name: 'Jon', num: '555-1234' },
 *       { name: 'Jenny', num: '867-5309' }
 *     ]
 *
 *     // { Jon: { name: 'Jon', num: '555-1234' },
 *     //   Jenny: { name: 'Jenny', num: '867-5309' } }
 *     const entriesByName = keyMap(
 *       phoneBook,
 *       entry => entry.name
 *     )
 *
 *     // { name: 'Jenny', num: '857-6309' }
 *     const jennyEntry = entriesByName['Jenny']
 *
 */
function keyMap(list, keyFn) {
  return list.reduce(function (map, item) {
    return map[keyFn(item)] = item, map;
  }, Object.create(null));
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.valueFromAST = valueFromAST;

var _keyMap = __webpack_require__(20);

var _keyMap2 = _interopRequireDefault(_keyMap);

var _invariant = __webpack_require__(4);

var _invariant2 = _interopRequireDefault(_invariant);

var _isNullish = __webpack_require__(14);

var _isNullish2 = _interopRequireDefault(_isNullish);

var _isInvalid = __webpack_require__(22);

var _isInvalid2 = _interopRequireDefault(_isInvalid);

var _kinds = __webpack_require__(10);

var Kind = _interopRequireWildcard(_kinds);

var _definition = __webpack_require__(2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Produces a JavaScript value given a GraphQL Value AST.
 *
 * A GraphQL type must be provided, which will be used to interpret different
 * GraphQL Value literals.
 *
 * Returns `undefined` when the value could not be validly coerced according to
 * the provided type.
 *
 * | GraphQL Value        | JSON Value    |
 * | -------------------- | ------------- |
 * | Input Object         | Object        |
 * | List                 | Array         |
 * | Boolean              | Boolean       |
 * | String               | String        |
 * | Int / Float          | Number        |
 * | Enum Value           | Mixed         |
 * | NullValue            | null          |
 *
 */

/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

function valueFromAST(valueNode, type, variables) {
  if (!valueNode) {
    // When there is no node, then there is also no value.
    // Importantly, this is different from returning the value null.
    return;
  }

  if (type instanceof _definition.GraphQLNonNull) {
    if (valueNode.kind === Kind.NULL) {
      return; // Invalid: intentionally return no value.
    }
    return valueFromAST(valueNode, type.ofType, variables);
  }

  if (valueNode.kind === Kind.NULL) {
    // This is explicitly returning the value null.
    return null;
  }

  if (valueNode.kind === Kind.VARIABLE) {
    var variableName = valueNode.name.value;
    if (!variables || (0, _isInvalid2.default)(variables[variableName])) {
      // No valid return value.
      return;
    }
    // Note: we're not doing any checking that this variable is correct. We're
    // assuming that this query has been validated and the variable usage here
    // is of the correct type.
    return variables[variableName];
  }

  if (type instanceof _definition.GraphQLList) {
    var itemType = type.ofType;
    if (valueNode.kind === Kind.LIST) {
      var coercedValues = [];
      var itemNodes = valueNode.values;
      for (var i = 0; i < itemNodes.length; i++) {
        if (isMissingVariable(itemNodes[i], variables)) {
          // If an array contains a missing variable, it is either coerced to
          // null or if the item type is non-null, it considered invalid.
          if (itemType instanceof _definition.GraphQLNonNull) {
            return; // Invalid: intentionally return no value.
          }
          coercedValues.push(null);
        } else {
          var itemValue = valueFromAST(itemNodes[i], itemType, variables);
          if ((0, _isInvalid2.default)(itemValue)) {
            return; // Invalid: intentionally return no value.
          }
          coercedValues.push(itemValue);
        }
      }
      return coercedValues;
    }
    var coercedValue = valueFromAST(valueNode, itemType, variables);
    if ((0, _isInvalid2.default)(coercedValue)) {
      return; // Invalid: intentionally return no value.
    }
    return [coercedValue];
  }

  if (type instanceof _definition.GraphQLInputObjectType) {
    if (valueNode.kind !== Kind.OBJECT) {
      return; // Invalid: intentionally return no value.
    }
    var coercedObj = Object.create(null);
    var fields = type.getFields();
    var fieldNodes = (0, _keyMap2.default)(valueNode.fields, function (field) {
      return field.name.value;
    });
    var fieldNames = Object.keys(fields);
    for (var _i = 0; _i < fieldNames.length; _i++) {
      var fieldName = fieldNames[_i];
      var field = fields[fieldName];
      var fieldNode = fieldNodes[fieldName];
      if (!fieldNode || isMissingVariable(fieldNode.value, variables)) {
        if (!(0, _isInvalid2.default)(field.defaultValue)) {
          coercedObj[fieldName] = field.defaultValue;
        } else if (field.type instanceof _definition.GraphQLNonNull) {
          return; // Invalid: intentionally return no value.
        }
        continue;
      }
      var fieldValue = valueFromAST(fieldNode.value, field.type, variables);
      if ((0, _isInvalid2.default)(fieldValue)) {
        return; // Invalid: intentionally return no value.
      }
      coercedObj[fieldName] = fieldValue;
    }
    return coercedObj;
  }

  !(type instanceof _definition.GraphQLScalarType || type instanceof _definition.GraphQLEnumType) ? (0, _invariant2.default)(0, 'Must be input type') : void 0;

  var parsed = type.parseLiteral(valueNode);
  if ((0, _isNullish2.default)(parsed) && !type.isValidLiteral(valueNode)) {
    // Invalid values represent a failure to parse correctly, in which case
    // no value is returned.
    return;
  }

  return parsed;
}

// Returns true if the provided valueNode is a variable which is not defined
// in the set of variables.
function isMissingVariable(valueNode, variables) {
  return valueNode.kind === Kind.VARIABLE && (!variables || (0, _isInvalid2.default)(variables[valueNode.name.value]));
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isInvalid;

/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * Returns true if a value is undefined, or NaN.
 */
function isInvalid(value) {
  return value === undefined || value !== value;
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GraphQLError = GraphQLError;

var _location = __webpack_require__(55);

/**
 * A GraphQLError describes an Error found during the parse, validate, or
 * execute phases of performing a GraphQL operation. In addition to a message
 * and stack trace, it also includes information about the locations in a
 * GraphQL document and/or execution result that correspond to the Error.
 */
function GraphQLError( // eslint-disable-line no-redeclare
message, nodes, source, positions, path, originalError) {
  // Compute locations in the source for the given nodes/positions.
  var _source = source;
  if (!_source && nodes && nodes.length > 0) {
    var node = nodes[0];
    _source = node && node.loc && node.loc.source;
  }

  var _positions = positions;
  if (!_positions && nodes) {
    _positions = nodes.filter(function (node) {
      return Boolean(node.loc);
    }).map(function (node) {
      return node.loc.start;
    });
  }
  if (_positions && _positions.length === 0) {
    _positions = undefined;
  }

  var _locations = void 0;
  var _source2 = _source; // seems here Flow need a const to resolve type.
  if (_source2 && _positions) {
    _locations = _positions.map(function (pos) {
      return (0, _location.getLocation)(_source2, pos);
    });
  }

  Object.defineProperties(this, {
    message: {
      value: message,
      // By being enumerable, JSON.stringify will include `message` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: true,
      writable: true
    },
    locations: {
      // Coercing falsey values to undefined ensures they will not be included
      // in JSON.stringify() when not provided.
      value: _locations || undefined,
      // By being enumerable, JSON.stringify will include `locations` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: true
    },
    path: {
      // Coercing falsey values to undefined ensures they will not be included
      // in JSON.stringify() when not provided.
      value: path || undefined,
      // By being enumerable, JSON.stringify will include `path` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: true
    },
    nodes: {
      value: nodes || undefined
    },
    source: {
      value: _source || undefined
    },
    positions: {
      value: _positions || undefined
    },
    originalError: {
      value: originalError
    }
  });

  // Include (non-enumerable) stack trace.
  if (originalError && originalError.stack) {
    Object.defineProperty(this, 'stack', {
      value: originalError.stack,
      writable: true,
      configurable: true
    });
  } else if (Error.captureStackTrace) {
    Error.captureStackTrace(this, GraphQLError);
  } else {
    Object.defineProperty(this, 'stack', {
      value: Error().stack,
      writable: true,
      configurable: true
    });
  }
}
/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

GraphQLError.prototype = Object.create(Error.prototype, {
  constructor: { value: GraphQLError },
  name: { value: 'GraphQLError' }
});

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GraphQLSchema = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _definition = __webpack_require__(2);

var _directives = __webpack_require__(15);

var _introspection = __webpack_require__(25);

var _find = __webpack_require__(39);

var _find2 = _interopRequireDefault(_find);

var _invariant = __webpack_require__(4);

var _invariant2 = _interopRequireDefault(_invariant);

var _typeComparators = __webpack_require__(57);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * Schema Definition
 *
 * A Schema is created by supplying the root types of each type of operation,
 * query and mutation (optional). A schema definition is then supplied to the
 * validator and executor.
 *
 * Example:
 *
 *     const MyAppSchema = new GraphQLSchema({
 *       query: MyAppQueryRootType,
 *       mutation: MyAppMutationRootType,
 *     })
 *
 * Note: If an array of `directives` are provided to GraphQLSchema, that will be
 * the exact list of directives represented and allowed. If `directives` is not
 * provided then a default set of the specified directives (e.g. @include and
 * @skip) will be used. If you wish to provide *additional* directives to these
 * specified directives, you must explicitly declare them. Example:
 *
 *     const MyAppSchema = new GraphQLSchema({
 *       ...
 *       directives: specifiedDirectives.concat([ myCustomDirective ]),
 *     })
 *
 */
var GraphQLSchema = exports.GraphQLSchema = function () {
  function GraphQLSchema(config) {
    var _this = this;

    _classCallCheck(this, GraphQLSchema);

    !((typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object') ? (0, _invariant2.default)(0, 'Must provide configuration object.') : void 0;

    !(config.query instanceof _definition.GraphQLObjectType) ? (0, _invariant2.default)(0, 'Schema query must be Object Type but got: ' + String(config.query) + '.') : void 0;
    this._queryType = config.query;

    !(!config.mutation || config.mutation instanceof _definition.GraphQLObjectType) ? (0, _invariant2.default)(0, 'Schema mutation must be Object Type if provided but got: ' + String(config.mutation) + '.') : void 0;
    this._mutationType = config.mutation;

    !(!config.subscription || config.subscription instanceof _definition.GraphQLObjectType) ? (0, _invariant2.default)(0, 'Schema subscription must be Object Type if provided but got: ' + String(config.subscription) + '.') : void 0;
    this._subscriptionType = config.subscription;

    !(!config.types || Array.isArray(config.types)) ? (0, _invariant2.default)(0, 'Schema types must be Array if provided but got: ' + String(config.types) + '.') : void 0;

    !(!config.directives || Array.isArray(config.directives) && config.directives.every(function (directive) {
      return directive instanceof _directives.GraphQLDirective;
    })) ? (0, _invariant2.default)(0, 'Schema directives must be Array<GraphQLDirective> if provided but got: ' + String(config.directives) + '.') : void 0;
    // Provide specified directives (e.g. @include and @skip) by default.
    this._directives = config.directives || _directives.specifiedDirectives;
    this.astNode = config.astNode || null;

    // Build type map now to detect any errors within this schema.
    var initialTypes = [this.getQueryType(), this.getMutationType(), this.getSubscriptionType(), _introspection.__Schema];

    var types = config.types;
    if (types) {
      initialTypes = initialTypes.concat(types);
    }

    this._typeMap = initialTypes.reduce(typeMapReducer, Object.create(null));

    // Keep track of all implementations by interface name.
    this._implementations = Object.create(null);
    Object.keys(this._typeMap).forEach(function (typeName) {
      var type = _this._typeMap[typeName];
      if (type instanceof _definition.GraphQLObjectType) {
        type.getInterfaces().forEach(function (iface) {
          var impls = _this._implementations[iface.name];
          if (impls) {
            impls.push(type);
          } else {
            _this._implementations[iface.name] = [type];
          }
        });
      }
    });

    // Enforce correct interface implementations.
    Object.keys(this._typeMap).forEach(function (typeName) {
      var type = _this._typeMap[typeName];
      if (type instanceof _definition.GraphQLObjectType) {
        type.getInterfaces().forEach(function (iface) {
          return assertObjectImplementsInterface(_this, type, iface);
        });
      }
    });
  }

  GraphQLSchema.prototype.getQueryType = function getQueryType() {
    return this._queryType;
  };

  GraphQLSchema.prototype.getMutationType = function getMutationType() {
    return this._mutationType;
  };

  GraphQLSchema.prototype.getSubscriptionType = function getSubscriptionType() {
    return this._subscriptionType;
  };

  GraphQLSchema.prototype.getTypeMap = function getTypeMap() {
    return this._typeMap;
  };

  GraphQLSchema.prototype.getType = function getType(name) {
    return this.getTypeMap()[name];
  };

  GraphQLSchema.prototype.getPossibleTypes = function getPossibleTypes(abstractType) {
    if (abstractType instanceof _definition.GraphQLUnionType) {
      return abstractType.getTypes();
    }
    !(abstractType instanceof _definition.GraphQLInterfaceType) ? (0, _invariant2.default)(0) : void 0;
    return this._implementations[abstractType.name];
  };

  GraphQLSchema.prototype.isPossibleType = function isPossibleType(abstractType, possibleType) {
    var possibleTypeMap = this._possibleTypeMap;
    if (!possibleTypeMap) {
      this._possibleTypeMap = possibleTypeMap = Object.create(null);
    }

    if (!possibleTypeMap[abstractType.name]) {
      var possibleTypes = this.getPossibleTypes(abstractType);
      !Array.isArray(possibleTypes) ? (0, _invariant2.default)(0, 'Could not find possible implementing types for ' + abstractType.name + ' ' + 'in schema. Check that schema.types is defined and is an array of ' + 'all possible types in the schema.') : void 0;
      possibleTypeMap[abstractType.name] = possibleTypes.reduce(function (map, type) {
        return map[type.name] = true, map;
      }, Object.create(null));
    }

    return Boolean(possibleTypeMap[abstractType.name][possibleType.name]);
  };

  GraphQLSchema.prototype.getDirectives = function getDirectives() {
    return this._directives;
  };

  GraphQLSchema.prototype.getDirective = function getDirective(name) {
    return (0, _find2.default)(this.getDirectives(), function (directive) {
      return directive.name === name;
    });
  };

  return GraphQLSchema;
}();

function typeMapReducer(map, type) {
  if (!type) {
    return map;
  }
  if (type instanceof _definition.GraphQLList || type instanceof _definition.GraphQLNonNull) {
    return typeMapReducer(map, type.ofType);
  }
  if (map[type.name]) {
    !(map[type.name] === type) ? (0, _invariant2.default)(0, 'Schema must contain unique named types but contains multiple ' + ('types named "' + type.name + '".')) : void 0;
    return map;
  }
  map[type.name] = type;

  var reducedMap = map;

  if (type instanceof _definition.GraphQLUnionType) {
    reducedMap = type.getTypes().reduce(typeMapReducer, reducedMap);
  }

  if (type instanceof _definition.GraphQLObjectType) {
    reducedMap = type.getInterfaces().reduce(typeMapReducer, reducedMap);
  }

  if (type instanceof _definition.GraphQLObjectType || type instanceof _definition.GraphQLInterfaceType) {
    var fieldMap = type.getFields();
    Object.keys(fieldMap).forEach(function (fieldName) {
      var field = fieldMap[fieldName];

      if (field.args) {
        var fieldArgTypes = field.args.map(function (arg) {
          return arg.type;
        });
        reducedMap = fieldArgTypes.reduce(typeMapReducer, reducedMap);
      }
      reducedMap = typeMapReducer(reducedMap, field.type);
    });
  }

  if (type instanceof _definition.GraphQLInputObjectType) {
    var _fieldMap = type.getFields();
    Object.keys(_fieldMap).forEach(function (fieldName) {
      var field = _fieldMap[fieldName];
      reducedMap = typeMapReducer(reducedMap, field.type);
    });
  }

  return reducedMap;
}

function assertObjectImplementsInterface(schema, object, iface) {
  var objectFieldMap = object.getFields();
  var ifaceFieldMap = iface.getFields();

  // Assert each interface field is implemented.
  Object.keys(ifaceFieldMap).forEach(function (fieldName) {
    var objectField = objectFieldMap[fieldName];
    var ifaceField = ifaceFieldMap[fieldName];

    // Assert interface field exists on object.
    !objectField ? (0, _invariant2.default)(0, '"' + iface.name + '" expects field "' + fieldName + '" but "' + object.name + '" ' + 'does not provide it.') : void 0;

    // Assert interface field type is satisfied by object field type, by being
    // a valid subtype. (covariant)
    !(0, _typeComparators.isTypeSubTypeOf)(schema, objectField.type, ifaceField.type) ? (0, _invariant2.default)(0, iface.name + '.' + fieldName + ' expects type "' + String(ifaceField.type) + '" ' + 'but ' + (object.name + '.' + fieldName + ' provides type "' + String(objectField.type) + '".')) : void 0;

    // Assert each interface field arg is implemented.
    ifaceField.args.forEach(function (ifaceArg) {
      var argName = ifaceArg.name;
      var objectArg = (0, _find2.default)(objectField.args, function (arg) {
        return arg.name === argName;
      });

      // Assert interface field arg exists on object field.
      !objectArg ? (0, _invariant2.default)(0, iface.name + '.' + fieldName + ' expects argument "' + argName + '" but ' + (object.name + '.' + fieldName + ' does not provide it.')) : void 0;

      // Assert interface field arg type matches object field arg type.
      // (invariant)
      !(0, _typeComparators.isEqualType)(ifaceArg.type, objectArg.type) ? (0, _invariant2.default)(0, iface.name + '.' + fieldName + '(' + argName + ':) expects type ' + ('"' + String(ifaceArg.type) + '" but ') + (object.name + '.' + fieldName + '(' + argName + ':) provides type ') + ('"' + String(objectArg.type) + '".')) : void 0;
    });

    // Assert additional arguments must not be required.
    objectField.args.forEach(function (objectArg) {
      var argName = objectArg.name;
      var ifaceArg = (0, _find2.default)(ifaceField.args, function (arg) {
        return arg.name === argName;
      });
      if (!ifaceArg) {
        !!(objectArg.type instanceof _definition.GraphQLNonNull) ? (0, _invariant2.default)(0, object.name + '.' + fieldName + '(' + argName + ':) is of required type ' + ('"' + String(objectArg.type) + '" but is not also provided by the ') + ('interface ' + iface.name + '.' + fieldName + '.')) : void 0;
      }
    });
  });
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TypeNameMetaFieldDef = exports.TypeMetaFieldDef = exports.SchemaMetaFieldDef = exports.__TypeKind = exports.TypeKind = exports.__EnumValue = exports.__InputValue = exports.__Field = exports.__Type = exports.__DirectiveLocation = exports.__Directive = exports.__Schema = undefined;

var _isInvalid = __webpack_require__(22);

var _isInvalid2 = _interopRequireDefault(_isInvalid);

var _astFromValue = __webpack_require__(36);

var _printer = __webpack_require__(29);

var _definition = __webpack_require__(2);

var _scalars = __webpack_require__(13);

var _directives = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

var __Schema = exports.__Schema = new _definition.GraphQLObjectType({
  name: '__Schema',
  isIntrospection: true,
  description: 'A GraphQL Schema defines the capabilities of a GraphQL server. It ' + 'exposes all available types and directives on the server, as well as ' + 'the entry points for query, mutation, and subscription operations.',
  fields: function fields() {
    return {
      types: {
        description: 'A list of all types supported by this server.',
        type: new _definition.GraphQLNonNull(new _definition.GraphQLList(new _definition.GraphQLNonNull(__Type))),
        resolve: function resolve(schema) {
          var typeMap = schema.getTypeMap();
          return Object.keys(typeMap).map(function (key) {
            return typeMap[key];
          });
        }
      },
      queryType: {
        description: 'The type that query operations will be rooted at.',
        type: new _definition.GraphQLNonNull(__Type),
        resolve: function resolve(schema) {
          return schema.getQueryType();
        }
      },
      mutationType: {
        description: 'If this server supports mutation, the type that ' + 'mutation operations will be rooted at.',
        type: __Type,
        resolve: function resolve(schema) {
          return schema.getMutationType();
        }
      },
      subscriptionType: {
        description: 'If this server support subscription, the type that ' + 'subscription operations will be rooted at.',
        type: __Type,
        resolve: function resolve(schema) {
          return schema.getSubscriptionType();
        }
      },
      directives: {
        description: 'A list of all directives supported by this server.',
        type: new _definition.GraphQLNonNull(new _definition.GraphQLList(new _definition.GraphQLNonNull(__Directive))),
        resolve: function resolve(schema) {
          return schema.getDirectives();
        }
      }
    };
  }
});

var __Directive = exports.__Directive = new _definition.GraphQLObjectType({
  name: '__Directive',
  isIntrospection: true,
  description: 'A Directive provides a way to describe alternate runtime execution and ' + 'type validation behavior in a GraphQL document.' + '\n\nIn some cases, you need to provide options to alter GraphQL\'s ' + 'execution behavior in ways field arguments will not suffice, such as ' + 'conditionally including or skipping a field. Directives provide this by ' + 'describing additional information to the executor.',
  fields: function fields() {
    return {
      name: { type: new _definition.GraphQLNonNull(_scalars.GraphQLString) },
      description: { type: _scalars.GraphQLString },
      locations: {
        type: new _definition.GraphQLNonNull(new _definition.GraphQLList(new _definition.GraphQLNonNull(__DirectiveLocation)))
      },
      args: {
        type: new _definition.GraphQLNonNull(new _definition.GraphQLList(new _definition.GraphQLNonNull(__InputValue))),
        resolve: function resolve(directive) {
          return directive.args || [];
        }
      },
      // NOTE: the following three fields are deprecated and are no longer part
      // of the GraphQL specification.
      onOperation: {
        deprecationReason: 'Use `locations`.',
        type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
        resolve: function resolve(d) {
          return d.locations.indexOf(_directives.DirectiveLocation.QUERY) !== -1 || d.locations.indexOf(_directives.DirectiveLocation.MUTATION) !== -1 || d.locations.indexOf(_directives.DirectiveLocation.SUBSCRIPTION) !== -1;
        }
      },
      onFragment: {
        deprecationReason: 'Use `locations`.',
        type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
        resolve: function resolve(d) {
          return d.locations.indexOf(_directives.DirectiveLocation.FRAGMENT_SPREAD) !== -1 || d.locations.indexOf(_directives.DirectiveLocation.INLINE_FRAGMENT) !== -1 || d.locations.indexOf(_directives.DirectiveLocation.FRAGMENT_DEFINITION) !== -1;
        }
      },
      onField: {
        deprecationReason: 'Use `locations`.',
        type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
        resolve: function resolve(d) {
          return d.locations.indexOf(_directives.DirectiveLocation.FIELD) !== -1;
        }
      }
    };
  }
});

var __DirectiveLocation = exports.__DirectiveLocation = new _definition.GraphQLEnumType({
  name: '__DirectiveLocation',
  isIntrospection: true,
  description: 'A Directive can be adjacent to many parts of the GraphQL language, a ' + '__DirectiveLocation describes one such possible adjacencies.',
  values: {
    QUERY: {
      value: _directives.DirectiveLocation.QUERY,
      description: 'Location adjacent to a query operation.'
    },
    MUTATION: {
      value: _directives.DirectiveLocation.MUTATION,
      description: 'Location adjacent to a mutation operation.'
    },
    SUBSCRIPTION: {
      value: _directives.DirectiveLocation.SUBSCRIPTION,
      description: 'Location adjacent to a subscription operation.'
    },
    FIELD: {
      value: _directives.DirectiveLocation.FIELD,
      description: 'Location adjacent to a field.'
    },
    FRAGMENT_DEFINITION: {
      value: _directives.DirectiveLocation.FRAGMENT_DEFINITION,
      description: 'Location adjacent to a fragment definition.'
    },
    FRAGMENT_SPREAD: {
      value: _directives.DirectiveLocation.FRAGMENT_SPREAD,
      description: 'Location adjacent to a fragment spread.'
    },
    INLINE_FRAGMENT: {
      value: _directives.DirectiveLocation.INLINE_FRAGMENT,
      description: 'Location adjacent to an inline fragment.'
    },
    SCHEMA: {
      value: _directives.DirectiveLocation.SCHEMA,
      description: 'Location adjacent to a schema definition.'
    },
    SCALAR: {
      value: _directives.DirectiveLocation.SCALAR,
      description: 'Location adjacent to a scalar definition.'
    },
    OBJECT: {
      value: _directives.DirectiveLocation.OBJECT,
      description: 'Location adjacent to an object type definition.'
    },
    FIELD_DEFINITION: {
      value: _directives.DirectiveLocation.FIELD_DEFINITION,
      description: 'Location adjacent to a field definition.'
    },
    ARGUMENT_DEFINITION: {
      value: _directives.DirectiveLocation.ARGUMENT_DEFINITION,
      description: 'Location adjacent to an argument definition.'
    },
    INTERFACE: {
      value: _directives.DirectiveLocation.INTERFACE,
      description: 'Location adjacent to an interface definition.'
    },
    UNION: {
      value: _directives.DirectiveLocation.UNION,
      description: 'Location adjacent to a union definition.'
    },
    ENUM: {
      value: _directives.DirectiveLocation.ENUM,
      description: 'Location adjacent to an enum definition.'
    },
    ENUM_VALUE: {
      value: _directives.DirectiveLocation.ENUM_VALUE,
      description: 'Location adjacent to an enum value definition.'
    },
    INPUT_OBJECT: {
      value: _directives.DirectiveLocation.INPUT_OBJECT,
      description: 'Location adjacent to an input object type definition.'
    },
    INPUT_FIELD_DEFINITION: {
      value: _directives.DirectiveLocation.INPUT_FIELD_DEFINITION,
      description: 'Location adjacent to an input object field definition.'
    }
  }
});

var __Type = exports.__Type = new _definition.GraphQLObjectType({
  name: '__Type',
  isIntrospection: true,
  description: 'The fundamental unit of any GraphQL Schema is the type. There are ' + 'many kinds of types in GraphQL as represented by the `__TypeKind` enum.' + '\n\nDepending on the kind of a type, certain fields describe ' + 'information about that type. Scalar types provide no information ' + 'beyond a name and description, while Enum types provide their values. ' + 'Object and Interface types provide the fields they describe. Abstract ' + 'types, Union and Interface, provide the Object types possible ' + 'at runtime. List and NonNull types compose other types.',
  fields: function fields() {
    return {
      kind: {
        type: new _definition.GraphQLNonNull(__TypeKind),
        resolve: function resolve(type) {
          if (type instanceof _definition.GraphQLScalarType) {
            return TypeKind.SCALAR;
          } else if (type instanceof _definition.GraphQLObjectType) {
            return TypeKind.OBJECT;
          } else if (type instanceof _definition.GraphQLInterfaceType) {
            return TypeKind.INTERFACE;
          } else if (type instanceof _definition.GraphQLUnionType) {
            return TypeKind.UNION;
          } else if (type instanceof _definition.GraphQLEnumType) {
            return TypeKind.ENUM;
          } else if (type instanceof _definition.GraphQLInputObjectType) {
            return TypeKind.INPUT_OBJECT;
          } else if (type instanceof _definition.GraphQLList) {
            return TypeKind.LIST;
          } else if (type instanceof _definition.GraphQLNonNull) {
            return TypeKind.NON_NULL;
          }
          throw new Error('Unknown kind of type: ' + type);
        }
      },
      name: { type: _scalars.GraphQLString },
      description: { type: _scalars.GraphQLString },
      fields: {
        type: new _definition.GraphQLList(new _definition.GraphQLNonNull(__Field)),
        args: {
          includeDeprecated: { type: _scalars.GraphQLBoolean, defaultValue: false }
        },
        resolve: function resolve(type, _ref) {
          var includeDeprecated = _ref.includeDeprecated;

          if (type instanceof _definition.GraphQLObjectType || type instanceof _definition.GraphQLInterfaceType) {
            var fieldMap = type.getFields();
            var fields = Object.keys(fieldMap).map(function (fieldName) {
              return fieldMap[fieldName];
            });
            if (!includeDeprecated) {
              fields = fields.filter(function (field) {
                return !field.deprecationReason;
              });
            }
            return fields;
          }
          return null;
        }
      },
      interfaces: {
        type: new _definition.GraphQLList(new _definition.GraphQLNonNull(__Type)),
        resolve: function resolve(type) {
          if (type instanceof _definition.GraphQLObjectType) {
            return type.getInterfaces();
          }
        }
      },
      possibleTypes: {
        type: new _definition.GraphQLList(new _definition.GraphQLNonNull(__Type)),
        resolve: function resolve(type, args, context, _ref2) {
          var schema = _ref2.schema;

          if ((0, _definition.isAbstractType)(type)) {
            return schema.getPossibleTypes(type);
          }
        }
      },
      enumValues: {
        type: new _definition.GraphQLList(new _definition.GraphQLNonNull(__EnumValue)),
        args: {
          includeDeprecated: { type: _scalars.GraphQLBoolean, defaultValue: false }
        },
        resolve: function resolve(type, _ref3) {
          var includeDeprecated = _ref3.includeDeprecated;

          if (type instanceof _definition.GraphQLEnumType) {
            var values = type.getValues();
            if (!includeDeprecated) {
              values = values.filter(function (value) {
                return !value.deprecationReason;
              });
            }
            return values;
          }
        }
      },
      inputFields: {
        type: new _definition.GraphQLList(new _definition.GraphQLNonNull(__InputValue)),
        resolve: function resolve(type) {
          if (type instanceof _definition.GraphQLInputObjectType) {
            var fieldMap = type.getFields();
            return Object.keys(fieldMap).map(function (fieldName) {
              return fieldMap[fieldName];
            });
          }
        }
      },
      ofType: { type: __Type }
    };
  }
});

var __Field = exports.__Field = new _definition.GraphQLObjectType({
  name: '__Field',
  isIntrospection: true,
  description: 'Object and Interface types are described by a list of Fields, each of ' + 'which has a name, potentially a list of arguments, and a return type.',
  fields: function fields() {
    return {
      name: { type: new _definition.GraphQLNonNull(_scalars.GraphQLString) },
      description: { type: _scalars.GraphQLString },
      args: {
        type: new _definition.GraphQLNonNull(new _definition.GraphQLList(new _definition.GraphQLNonNull(__InputValue))),
        resolve: function resolve(field) {
          return field.args || [];
        }
      },
      type: { type: new _definition.GraphQLNonNull(__Type) },
      isDeprecated: { type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean) },
      deprecationReason: {
        type: _scalars.GraphQLString
      }
    };
  }
});

var __InputValue = exports.__InputValue = new _definition.GraphQLObjectType({
  name: '__InputValue',
  isIntrospection: true,
  description: 'Arguments provided to Fields or Directives and the input fields of an ' + 'InputObject are represented as Input Values which describe their type ' + 'and optionally a default value.',
  fields: function fields() {
    return {
      name: { type: new _definition.GraphQLNonNull(_scalars.GraphQLString) },
      description: { type: _scalars.GraphQLString },
      type: { type: new _definition.GraphQLNonNull(__Type) },
      defaultValue: {
        type: _scalars.GraphQLString,
        description: 'A GraphQL-formatted string representing the default value for this ' + 'input value.',
        resolve: function resolve(inputVal) {
          return (0, _isInvalid2.default)(inputVal.defaultValue) ? null : (0, _printer.print)((0, _astFromValue.astFromValue)(inputVal.defaultValue, inputVal.type));
        }
      }
    };
  }
});

var __EnumValue = exports.__EnumValue = new _definition.GraphQLObjectType({
  name: '__EnumValue',
  isIntrospection: true,
  description: 'One possible value for a given Enum. Enum values are unique values, not ' + 'a placeholder for a string or numeric value. However an Enum value is ' + 'returned in a JSON response as a string.',
  fields: function fields() {
    return {
      name: { type: new _definition.GraphQLNonNull(_scalars.GraphQLString) },
      description: { type: _scalars.GraphQLString },
      isDeprecated: { type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean) },
      deprecationReason: {
        type: _scalars.GraphQLString
      }
    };
  }
});

var TypeKind = exports.TypeKind = {
  SCALAR: 'SCALAR',
  OBJECT: 'OBJECT',
  INTERFACE: 'INTERFACE',
  UNION: 'UNION',
  ENUM: 'ENUM',
  INPUT_OBJECT: 'INPUT_OBJECT',
  LIST: 'LIST',
  NON_NULL: 'NON_NULL'
};

var __TypeKind = exports.__TypeKind = new _definition.GraphQLEnumType({
  name: '__TypeKind',
  isIntrospection: true,
  description: 'An enum describing what kind of type a given `__Type` is.',
  values: {
    SCALAR: {
      value: TypeKind.SCALAR,
      description: 'Indicates this type is a scalar.'
    },
    OBJECT: {
      value: TypeKind.OBJECT,
      description: 'Indicates this type is an object. ' + '`fields` and `interfaces` are valid fields.'
    },
    INTERFACE: {
      value: TypeKind.INTERFACE,
      description: 'Indicates this type is an interface. ' + '`fields` and `possibleTypes` are valid fields.'
    },
    UNION: {
      value: TypeKind.UNION,
      description: 'Indicates this type is a union. ' + '`possibleTypes` is a valid field.'
    },
    ENUM: {
      value: TypeKind.ENUM,
      description: 'Indicates this type is an enum. ' + '`enumValues` is a valid field.'
    },
    INPUT_OBJECT: {
      value: TypeKind.INPUT_OBJECT,
      description: 'Indicates this type is an input object. ' + '`inputFields` is a valid field.'
    },
    LIST: {
      value: TypeKind.LIST,
      description: 'Indicates this type is a list. ' + '`ofType` is a valid field.'
    },
    NON_NULL: {
      value: TypeKind.NON_NULL,
      description: 'Indicates this type is a non-null. ' + '`ofType` is a valid field.'
    }
  }
});

/**
 * Note that these are GraphQLField and not GraphQLFieldConfig,
 * so the format for args is different.
 */

var SchemaMetaFieldDef = exports.SchemaMetaFieldDef = {
  name: '__schema',
  type: new _definition.GraphQLNonNull(__Schema),
  description: 'Access the current type schema of this server.',
  args: [],
  resolve: function resolve(source, args, context, _ref4) {
    var schema = _ref4.schema;
    return schema;
  }
};

var TypeMetaFieldDef = exports.TypeMetaFieldDef = {
  name: '__type',
  type: __Type,
  description: 'Request the type information of a single type.',
  args: [{ name: 'name', type: new _definition.GraphQLNonNull(_scalars.GraphQLString) }],
  resolve: function resolve(source, _ref5, context, _ref6) {
    var name = _ref5.name;
    var schema = _ref6.schema;
    return schema.getType(name);
  }
};

var TypeNameMetaFieldDef = exports.TypeNameMetaFieldDef = {
  name: '__typename',
  type: new _definition.GraphQLNonNull(_scalars.GraphQLString),
  description: 'The name of the current Object type at runtime.',
  args: [],
  resolve: function resolve(source, args, context, _ref7) {
    var parentType = _ref7.parentType;
    return parentType.name;
  }
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(27);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames2 = __webpack_require__(1);

var _classnames3 = _interopRequireDefault(_classnames2);

var _reactCssThemr = __webpack_require__(7);

var _dissoc = __webpack_require__(127);

var _dissoc2 = _interopRequireDefault(_dissoc);

var _identifiers = __webpack_require__(8);

var _events = __webpack_require__(45);

var _events2 = _interopRequireDefault(_events);

var _prefixer = __webpack_require__(129);

var _prefixer2 = _interopRequireDefault(_prefixer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaults = {
  centered: false,
  className: '',
  multiple: true,
  passthrough: true,
  spread: 2,
  theme: {}
};

var rippleFactory = function rippleFactory() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _defaults$options = _extends({}, defaults, options),
      defaultCentered = _defaults$options.centered,
      defaultClassName = _defaults$options.className,
      defaultMultiple = _defaults$options.multiple,
      defaultPassthrough = _defaults$options.passthrough,
      defaultSpread = _defaults$options.spread,
      defaultTheme = _defaults$options.theme,
      props = _objectWithoutProperties(_defaults$options, ['centered', 'className', 'multiple', 'passthrough', 'spread', 'theme']);

  return function (ComposedComponent) {
    var RippledComponent = function (_Component) {
      _inherits(RippledComponent, _Component);

      function RippledComponent() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, RippledComponent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RippledComponent.__proto__ || Object.getPrototypeOf(RippledComponent)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
          ripples: {}
        }, _this.rippleNodes = {}, _this.doRipple = function () {
          return !_this.props.disabled && _this.props.ripple;
        }, _this.handleMouseDown = function (event) {
          if (_this.props.onMouseDown) _this.props.onMouseDown(event);
          if (_this.doRipple()) {
            var _events$getMousePosit = _events2.default.getMousePosition(event),
                x = _events$getMousePosit.x,
                y = _events$getMousePosit.y;

            _this.animateRipple(x, y, false);
          }
        }, _this.handleTouchStart = function (event) {
          if (_this.props.onTouchStart) _this.props.onTouchStart(event);
          if (_this.doRipple()) {
            var _events$getTouchPosit = _events2.default.getTouchPosition(event),
                x = _events$getTouchPosit.x,
                y = _events$getTouchPosit.y;

            _this.animateRipple(x, y, true);
          }
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }

      _createClass(RippledComponent, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
          // If a new ripple was just added, add a remove event listener to its animation
          if (Object.keys(prevState.ripples).length < Object.keys(this.state.ripples).length) {
            this.addRippleRemoveEventListener(this.getLastKey());
          }
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          var _this2 = this;

          // Remove document event listeners for ripple if they still exists
          Object.keys(this.state.ripples).forEach(function (key) {
            _this2.state.ripples[key].endRipple();
          });
        }

        /**
         * Find out a descriptor object for the ripple element being created depending on
         * the position where the it was triggered and the component's dimensions.
         *
         * @param {Number} x Coordinate x in the viewport where ripple was triggered
         * @param {Number} y Coordinate y in the viewport where ripple was triggered
         * @return {Object} Descriptor element including position and size of the element
         */

      }, {
        key: 'getDescriptor',
        value: function getDescriptor(x, y) {
          var _ReactDOM$findDOMNode = _reactDom2.default.findDOMNode(this).getBoundingClientRect(),
              left = _ReactDOM$findDOMNode.left,
              top = _ReactDOM$findDOMNode.top,
              height = _ReactDOM$findDOMNode.height,
              width = _ReactDOM$findDOMNode.width;

          var _props = this.props,
              centered = _props.rippleCentered,
              spread = _props.rippleSpread;

          return {
            left: centered ? 0 : x - left - width / 2,
            top: centered ? 0 : y - top - height / 2,
            width: width * spread
          };
        }

        /**
         * Increments and internal counter and returns the next value as a string. It
         * is used to assign key references to new ripple elements.
         *
         * @return {String} Key to be assigned to a ripple.
         */

      }, {
        key: 'getNextKey',
        value: function getNextKey() {
          this.currentCount = this.currentCount ? this.currentCount + 1 : 1;
          return 'ripple' + this.currentCount;
        }

        /**
         * Return the last generated key for a ripple element. When there is only one ripple
         * and to get the reference when a ripple was just created.
         *
         * @return {String} The last generated ripple key.
         */

      }, {
        key: 'getLastKey',
        value: function getLastKey() {
          return 'ripple' + this.currentCount;
        }

        /**
         * Variable to store the ripple references
         */

      }, {
        key: 'rippleShouldTrigger',


        /**
         * Determine if a ripple should start depending if its a touch event. For mobile both
         * touchStart and mouseDown are launched so in case is touch we should always trigger
         * but if its not we should check if a touch was already triggered to decide.
         *
         * @param {Boolean} isTouch True in case a touch event triggered the ripple false otherwise.
         * @return {Boolean} True in case the ripple should trigger or false if it shouldn't.
         */
        value: function rippleShouldTrigger(isTouch) {
          var shouldStart = isTouch ? true : !this.touchCache;
          this.touchCache = isTouch;
          return shouldStart;
        }

        /**
         * Start a ripple animation on an specific point with touch or mouse events. First
         * decides if the animation should trigger. If the ripple is multiple or there is no
         * ripple present, it creates a new key. If it's a simple ripple and already exists,
         * it just restarts the current ripple. The animation happens in two state changes
         * to allow triggering via css.
         *
         * @param {Number} x Coordinate X on the screen where animation should start
         * @param {Number} y Coordinate Y on the screen where animation should start
         * @param {Boolean} isTouch Use events from touch or mouse.
         */

      }, {
        key: 'animateRipple',
        value: function animateRipple(x, y, isTouch) {
          var _this3 = this;

          if (this.rippleShouldTrigger(isTouch)) {
            var _getDescriptor = this.getDescriptor(x, y),
                top = _getDescriptor.top,
                left = _getDescriptor.left,
                width = _getDescriptor.width;

            var noRipplesActive = Object.keys(this.state.ripples).length === 0;
            var key = this.props.rippleMultiple || noRipplesActive ? this.getNextKey() : this.getLastKey();
            var endRipple = this.addRippleDeactivateEventListener(isTouch, key);
            var initialState = {
              active: false,
              restarting: true,
              top: top,
              left: left,
              width: width,
              endRipple: endRipple
            };
            var runningState = { active: true, restarting: false };
            var ripples = _extends({}, this.state.ripples, _defineProperty({}, key, initialState));
            this.setState({ ripples: ripples }, function () {
              if (_this3.rippleNodes[key]) _this3.rippleNodes[key].offsetWidth; // eslint-disable-line
              _this3.setState({
                ripples: _extends({}, _this3.state.ripples, _defineProperty({}, key, Object.assign({}, _this3.state.ripples[key], runningState)))
              });
            });
          }
        }

        /**
         * Add an event listener to the reference with given key so when the animation transition
         * ends we can be sure that it finished and it can be safely removed from the state.
         * This function is called whenever a new ripple is added to the component.
         *
         * @param {String} rippleKey Is the key of the ripple to add the event.
         */

      }, {
        key: 'addRippleRemoveEventListener',
        value: function addRippleRemoveEventListener(rippleKey) {
          var self = this;
          var rippleNode = this.rippleNodes[rippleKey];
          _events2.default.addEventListenerOnTransitionEnded(rippleNode, function onOpacityEnd(e) {
            if (e.propertyName === 'opacity') {
              if (self.props.onRippleEnded) self.props.onRippleEnded(e);
              _events2.default.removeEventListenerOnTransitionEnded(self.rippleNodes[rippleKey], onOpacityEnd);
              delete self.rippleNodes[rippleKey];
              self.setState({ ripples: (0, _dissoc2.default)(rippleKey, self.state.ripples) });
            }
          });
        }

        /**
         * Add an event listener to the document needed to deactivate a ripple and make it dissappear.
         * Deactivation can happen with a touchend or mouseup depending on the trigger type. The
         * ending function is created from a factory function and returned.
         *
         * @param {Boolean} isTouch True in case the trigger was a touch event false otherwise.
         * @param {String} rippleKey It's a key to identify the ripple that should be deactivated.
         * @return {Function} Callback function that deactivates the ripple and removes the listener
         */

      }, {
        key: 'addRippleDeactivateEventListener',
        value: function addRippleDeactivateEventListener(isTouch, rippleKey) {
          var eventType = isTouch ? 'touchend' : 'mouseup';
          var endRipple = this.createRippleDeactivateCallback(eventType, rippleKey);
          document.addEventListener(eventType, endRipple);
          return endRipple;
        }

        /**
         * Generates a function that can be called to deactivate a ripple and remove its finishing
         * event listener. If is generated because we need to store it to be called on unmount in case
         * the ripple is still running.
         *
         * @param {String} eventType Is the event type that can be touchend or mouseup
         * @param {String} rippleKey Is the key representing the ripple
         * @return {Function} Callback function that deactivates the ripple and removes the listener
         */

      }, {
        key: 'createRippleDeactivateCallback',
        value: function createRippleDeactivateCallback(eventType, rippleKey) {
          var self = this;
          return function endRipple() {
            document.removeEventListener(eventType, endRipple);
            self.setState({
              ripples: _extends({}, self.state.ripples, _defineProperty({}, rippleKey, Object.assign({}, self.state.ripples[rippleKey], {
                active: false
              })))
            });
          };
        }
      }, {
        key: 'renderRipple',
        value: function renderRipple(key, className, _ref2) {
          var _classnames,
              _this4 = this;

          var active = _ref2.active,
              left = _ref2.left,
              restarting = _ref2.restarting,
              top = _ref2.top,
              width = _ref2.width;

          var scale = restarting ? 0 : 1;
          var transform = 'translate3d(' + (-width / 2 + left) + 'px, ' + (-width / 2 + top) + 'px, 0) scale(' + scale + ')';
          var _className = (0, _classnames3.default)(this.props.theme.ripple, (_classnames = {}, _defineProperty(_classnames, this.props.theme.rippleActive, active), _defineProperty(_classnames, this.props.theme.rippleRestarting, restarting), _classnames), className);
          return _react2.default.createElement(
            'span',
            _extends({
              key: key,
              'data-react-toolbox': 'ripple',
              className: this.props.theme.rippleWrapper
            }, props),
            _react2.default.createElement('span', {
              className: _className,
              ref: function ref(node) {
                if (node) _this4.rippleNodes[key] = node;
              },
              style: (0, _prefixer2.default)({ transform: transform }, { width: width, height: width })
            })
          );
        }
      }, {
        key: 'render',
        value: function render() {
          var _this5 = this;

          var _props2 = this.props,
              children = _props2.children,
              disabled = _props2.disabled,
              ripple = _props2.ripple,
              onRippleEnded = _props2.onRippleEnded,
              rippleCentered = _props2.rippleCentered,
              rippleClassName = _props2.rippleClassName,
              rippleMultiple = _props2.rippleMultiple,
              rippleSpread = _props2.rippleSpread,
              theme = _props2.theme,
              other = _objectWithoutProperties(_props2, ['children', 'disabled', 'ripple', 'onRippleEnded', 'rippleCentered', 'rippleClassName', 'rippleMultiple', 'rippleSpread', 'theme']);

          var ripples = this.state.ripples;

          var childRipples = Object.keys(ripples).map(function (key) {
            return _this5.renderRipple(key, rippleClassName, ripples[key]);
          });
          var childProps = _extends({
            onMouseDown: this.handleMouseDown,
            onTouchStart: this.handleTouchStart
          }, other);
          var finalProps = defaultPassthrough ? _extends({}, childProps, { theme: theme, disabled: disabled }) : childProps;

          return !ripple ? _react2.default.createElement(ComposedComponent, finalProps, children) : _react2.default.createElement(ComposedComponent, finalProps, [children, childRipples]);
        }
      }]);

      return RippledComponent;
    }(_react.Component);

    RippledComponent.propTypes = {
      children: _propTypes2.default.node,
      disabled: _propTypes2.default.bool,
      onMouseDown: _propTypes2.default.func,
      onRippleEnded: _propTypes2.default.func,
      onTouchStart: _propTypes2.default.func,
      ripple: _propTypes2.default.bool,
      rippleCentered: _propTypes2.default.bool,
      rippleClassName: _propTypes2.default.string,
      rippleMultiple: _propTypes2.default.bool,
      rippleSpread: _propTypes2.default.number,
      theme: _propTypes2.default.shape({
        ripple: _propTypes2.default.string,
        rippleActive: _propTypes2.default.string,
        rippleRestarting: _propTypes2.default.string,
        rippleWrapper: _propTypes2.default.string
      })
    };
    RippledComponent.defaultProps = {
      disabled: false,
      ripple: true,
      rippleCentered: defaultCentered,
      rippleClassName: defaultClassName,
      rippleMultiple: defaultMultiple,
      rippleSpread: defaultSpread
    };


    return (0, _reactCssThemr.themr)(_identifiers.RIPPLE, defaultTheme)(RippledComponent);
  };
};

exports.default = rippleFactory;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_27__;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_28__;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.print = print;

var _visitor = __webpack_require__(38);

/**
 * Converts an AST into a string, using one set of reasonable
 * formatting rules.
 */
function print(ast) {
  return (0, _visitor.visit)(ast, { leave: printDocASTReducer });
} /**
   *  Copyright (c) 2015, Facebook, Inc.
   *  All rights reserved.
   *
   *  This source code is licensed under the BSD-style license found in the
   *  LICENSE file in the root directory of this source tree. An additional grant
   *  of patent rights can be found in the PATENTS file in the same directory.
   */

var printDocASTReducer = {
  Name: function Name(node) {
    return node.value;
  },
  Variable: function Variable(node) {
    return '$' + node.name;
  },

  // Document

  Document: function Document(node) {
    return join(node.definitions, '\n\n') + '\n';
  },

  OperationDefinition: function OperationDefinition(node) {
    var op = node.operation;
    var name = node.name;
    var varDefs = wrap('(', join(node.variableDefinitions, ', '), ')');
    var directives = join(node.directives, ' ');
    var selectionSet = node.selectionSet;
    // Anonymous queries with no directives or variable definitions can use
    // the query short form.
    return !name && !directives && !varDefs && op === 'query' ? selectionSet : join([op, join([name, varDefs]), directives, selectionSet], ' ');
  },


  VariableDefinition: function VariableDefinition(_ref) {
    var variable = _ref.variable,
        type = _ref.type,
        defaultValue = _ref.defaultValue;
    return variable + ': ' + type + wrap(' = ', defaultValue);
  },

  SelectionSet: function SelectionSet(_ref2) {
    var selections = _ref2.selections;
    return block(selections);
  },

  Field: function Field(_ref3) {
    var alias = _ref3.alias,
        name = _ref3.name,
        args = _ref3.arguments,
        directives = _ref3.directives,
        selectionSet = _ref3.selectionSet;
    return join([wrap('', alias, ': ') + name + wrap('(', join(args, ', '), ')'), join(directives, ' '), selectionSet], ' ');
  },

  Argument: function Argument(_ref4) {
    var name = _ref4.name,
        value = _ref4.value;
    return name + ': ' + value;
  },

  // Fragments

  FragmentSpread: function FragmentSpread(_ref5) {
    var name = _ref5.name,
        directives = _ref5.directives;
    return '...' + name + wrap(' ', join(directives, ' '));
  },

  InlineFragment: function InlineFragment(_ref6) {
    var typeCondition = _ref6.typeCondition,
        directives = _ref6.directives,
        selectionSet = _ref6.selectionSet;
    return join(['...', wrap('on ', typeCondition), join(directives, ' '), selectionSet], ' ');
  },

  FragmentDefinition: function FragmentDefinition(_ref7) {
    var name = _ref7.name,
        typeCondition = _ref7.typeCondition,
        directives = _ref7.directives,
        selectionSet = _ref7.selectionSet;
    return 'fragment ' + name + ' on ' + typeCondition + ' ' + wrap('', join(directives, ' '), ' ') + selectionSet;
  },

  // Value

  IntValue: function IntValue(_ref8) {
    var value = _ref8.value;
    return value;
  },
  FloatValue: function FloatValue(_ref9) {
    var value = _ref9.value;
    return value;
  },
  StringValue: function StringValue(_ref10) {
    var value = _ref10.value;
    return JSON.stringify(value);
  },
  BooleanValue: function BooleanValue(_ref11) {
    var value = _ref11.value;
    return JSON.stringify(value);
  },
  NullValue: function NullValue() {
    return 'null';
  },
  EnumValue: function EnumValue(_ref12) {
    var value = _ref12.value;
    return value;
  },
  ListValue: function ListValue(_ref13) {
    var values = _ref13.values;
    return '[' + join(values, ', ') + ']';
  },
  ObjectValue: function ObjectValue(_ref14) {
    var fields = _ref14.fields;
    return '{' + join(fields, ', ') + '}';
  },
  ObjectField: function ObjectField(_ref15) {
    var name = _ref15.name,
        value = _ref15.value;
    return name + ': ' + value;
  },

  // Directive

  Directive: function Directive(_ref16) {
    var name = _ref16.name,
        args = _ref16.arguments;
    return '@' + name + wrap('(', join(args, ', '), ')');
  },

  // Type

  NamedType: function NamedType(_ref17) {
    var name = _ref17.name;
    return name;
  },
  ListType: function ListType(_ref18) {
    var type = _ref18.type;
    return '[' + type + ']';
  },
  NonNullType: function NonNullType(_ref19) {
    var type = _ref19.type;
    return type + '!';
  },

  // Type System Definitions

  SchemaDefinition: function SchemaDefinition(_ref20) {
    var directives = _ref20.directives,
        operationTypes = _ref20.operationTypes;
    return join(['schema', join(directives, ' '), block(operationTypes)], ' ');
  },

  OperationTypeDefinition: function OperationTypeDefinition(_ref21) {
    var operation = _ref21.operation,
        type = _ref21.type;
    return operation + ': ' + type;
  },

  ScalarTypeDefinition: function ScalarTypeDefinition(_ref22) {
    var name = _ref22.name,
        directives = _ref22.directives;
    return join(['scalar', name, join(directives, ' ')], ' ');
  },

  ObjectTypeDefinition: function ObjectTypeDefinition(_ref23) {
    var name = _ref23.name,
        interfaces = _ref23.interfaces,
        directives = _ref23.directives,
        fields = _ref23.fields;
    return join(['type', name, wrap('implements ', join(interfaces, ', ')), join(directives, ' '), block(fields)], ' ');
  },

  FieldDefinition: function FieldDefinition(_ref24) {
    var name = _ref24.name,
        args = _ref24.arguments,
        type = _ref24.type,
        directives = _ref24.directives;
    return name + wrap('(', join(args, ', '), ')') + ': ' + type + wrap(' ', join(directives, ' '));
  },

  InputValueDefinition: function InputValueDefinition(_ref25) {
    var name = _ref25.name,
        type = _ref25.type,
        defaultValue = _ref25.defaultValue,
        directives = _ref25.directives;
    return join([name + ': ' + type, wrap('= ', defaultValue), join(directives, ' ')], ' ');
  },

  InterfaceTypeDefinition: function InterfaceTypeDefinition(_ref26) {
    var name = _ref26.name,
        directives = _ref26.directives,
        fields = _ref26.fields;
    return join(['interface', name, join(directives, ' '), block(fields)], ' ');
  },

  UnionTypeDefinition: function UnionTypeDefinition(_ref27) {
    var name = _ref27.name,
        directives = _ref27.directives,
        types = _ref27.types;
    return join(['union', name, join(directives, ' '), '= ' + join(types, ' | ')], ' ');
  },

  EnumTypeDefinition: function EnumTypeDefinition(_ref28) {
    var name = _ref28.name,
        directives = _ref28.directives,
        values = _ref28.values;
    return join(['enum', name, join(directives, ' '), block(values)], ' ');
  },

  EnumValueDefinition: function EnumValueDefinition(_ref29) {
    var name = _ref29.name,
        directives = _ref29.directives;
    return join([name, join(directives, ' ')], ' ');
  },

  InputObjectTypeDefinition: function InputObjectTypeDefinition(_ref30) {
    var name = _ref30.name,
        directives = _ref30.directives,
        fields = _ref30.fields;
    return join(['input', name, join(directives, ' '), block(fields)], ' ');
  },

  TypeExtensionDefinition: function TypeExtensionDefinition(_ref31) {
    var definition = _ref31.definition;
    return 'extend ' + definition;
  },

  DirectiveDefinition: function DirectiveDefinition(_ref32) {
    var name = _ref32.name,
        args = _ref32.arguments,
        locations = _ref32.locations;
    return 'directive @' + name + wrap('(', join(args, ', '), ')') + ' on ' + join(locations, ' | ');
  }
};

/**
 * Given maybeArray, print an empty string if it is null or empty, otherwise
 * print all items together separated by separator if provided
 */
function join(maybeArray, separator) {
  return maybeArray ? maybeArray.filter(function (x) {
    return x;
  }).join(separator || '') : '';
}

/**
 * Given array, print each item on its own line, wrapped in an
 * indented "{ }" block.
 */
function block(array) {
  return array && array.length !== 0 ? indent('{\n' + join(array, '\n')) + '\n}' : '{}';
}

/**
 * If maybeString is not null or empty, then wrap with start and end, otherwise
 * print an empty string.
 */
function wrap(start, maybeString, end) {
  return maybeString ? start + maybeString + (end || '') : '';
}

function indent(maybeString) {
  return maybeString && maybeString.replace(/\n/g, '\n  ');
}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(17);
var _isPlaceholder = __webpack_require__(44);


/**
 * Optimized internal two-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
module.exports = function _curry2(fn) {
  return function f2(a, b) {
    switch (arguments.length) {
      case 0:
        return f2;
      case 1:
        return _isPlaceholder(a) ? f2
             : _curry1(function(_b) { return fn(a, _b); });
      default:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f2
             : _isPlaceholder(a) ? _curry1(function(_a) { return fn(_a, b); })
             : _isPlaceholder(b) ? _curry1(function(_b) { return fn(a, _b); })
             : fn(a, b);
    }
  };
};


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_marked__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_marked___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_marked__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Markdown = /** @class */ (function (_super) {
    __extends(Markdown, _super);
    function Markdown() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Markdown.prototype.shouldComponentUpdate = function (nextProps) {
        return this.props.text !== nextProps.text;
    };
    Markdown.prototype.render = function () {
        var _a = this.props, text = _a.text, className = _a.className;
        if (!text)
            return null;
        var html = __WEBPACK_IMPORTED_MODULE_1_marked__(text, { sanitize: true });
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: className, dangerouslySetInnerHTML: { __html: html } }));
    };
    return Markdown;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (Markdown);


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = configureStore;
/* harmony export (immutable) */ __webpack_exports__["b"] = observeStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers__ = __webpack_require__(91);




function configureStore(preloadedState) {
    var composeEnhancers;
    if (false) {
        composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
    }
    else {
        composeEnhancers = __WEBPACK_IMPORTED_MODULE_1_redux__["compose"];
    }
    return Object(__WEBPACK_IMPORTED_MODULE_1_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_3__reducers__["a" /* rootReducer */], preloadedState, composeEnhancers(Object(__WEBPACK_IMPORTED_MODULE_1_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_2_redux_thunk___default.a)));
}
// Initial version was copy-pasted from
// https://github.com/reactjs/redux/issues/303#issuecomment-125184409
function observeStore(store) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var onChange = args.pop();
    var selectors = args;
    var currentState;
    function handleChange() {
        var nextState = __WEBPACK_IMPORTED_MODULE_0_lodash__["map"](selectors, function (f) { return f(store.getState()); });
        var stateChanged = __WEBPACK_IMPORTED_MODULE_0_lodash__(nextState)
            .zip(currentState)
            .some(function (_a) {
            var x = _a[0], y = _a[1];
            return (x !== y);
        });
        if (stateChanged) {
            currentState = nextState;
            onChange.apply(void 0, currentState);
        }
    }
    var unsubscribe = store.subscribe(handleChange);
    handleChange();
    return unsubscribe;
}


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = keyValMap;

/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * Creates a keyed JS object from an array, given a function to produce the keys
 * and a function to produce the values from each item in the array.
 *
 *     const phoneBook = [
 *       { name: 'Jon', num: '555-1234' },
 *       { name: 'Jenny', num: '867-5309' }
 *     ]
 *
 *     // { Jon: '555-1234', Jenny: '867-5309' }
 *     const phonesByName = keyValMap(
 *       phoneBook,
 *       entry => entry.name,
 *       entry => entry.num
 *     )
 *
 */
function keyValMap(list, keyFn, valFn) {
  return list.reduce(function (map, item) {
    return map[keyFn(item)] = valFn(item), map;
  }, Object.create(null));
}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertValidName = assertValidName;
exports.formatWarning = formatWarning;

/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

var NAME_RX = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
var ERROR_PREFIX_RX = /^Error: /;

// Silences warnings if an environment flag is enabled
var noNameWarning = Boolean(process && process.env && process.env.GRAPHQL_NO_NAME_WARNING);

// Ensures console warnings are only issued once.
var hasWarnedAboutDunder = false;

/**
 * Upholds the spec rules about naming.
 */
function assertValidName(name, isIntrospection) {
  if (!name || typeof name !== 'string') {
    throw new Error('Must be named. Unexpected name: ' + name + '.');
  }
  if (!isIntrospection && !hasWarnedAboutDunder && !noNameWarning && name.slice(0, 2) === '__') {
    hasWarnedAboutDunder = true;
    /* eslint-disable no-console */
    if (console && console.warn) {
      var error = new Error('Name "' + name + '" must not begin with "__", which is reserved by ' + 'GraphQL introspection. In a future release of graphql this will ' + 'become a hard error.');
      console.warn(formatWarning(error));
    }
    /* eslint-enable no-console */
  }
  if (!NAME_RX.test(name)) {
    throw new Error('Names must match /^[_a-zA-Z][_a-zA-Z0-9]*$/ but "' + name + '" does not.');
  }
}

/**
 * Returns a human-readable warning based an the supplied Error object,
 * including stack trace information if available.
 */
function formatWarning(error) {
  var formatted = '';
  var errorString = String(error).replace(ERROR_PREFIX_RX, '');
  var stack = error.stack;
  if (stack) {
    formatted = stack.replace(ERROR_PREFIX_RX, '');
  }
  if (formatted.indexOf(errorString) === -1) {
    formatted = errorString + '\n' + formatted;
  }
  return formatted.trim();
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GraphQLError = __webpack_require__(23);

Object.defineProperty(exports, 'GraphQLError', {
  enumerable: true,
  get: function get() {
    return _GraphQLError.GraphQLError;
  }
});

var _syntaxError = __webpack_require__(103);

Object.defineProperty(exports, 'syntaxError', {
  enumerable: true,
  get: function get() {
    return _syntaxError.syntaxError;
  }
});

var _locatedError = __webpack_require__(104);

Object.defineProperty(exports, 'locatedError', {
  enumerable: true,
  get: function get() {
    return _locatedError.locatedError;
  }
});

var _formatError = __webpack_require__(105);

Object.defineProperty(exports, 'formatError', {
  enumerable: true,
  get: function get() {
    return _formatError.formatError;
  }
});

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

exports.astFromValue = astFromValue;

var _iterall = __webpack_require__(37);

var _invariant = __webpack_require__(4);

var _invariant2 = _interopRequireDefault(_invariant);

var _isNullish = __webpack_require__(14);

var _isNullish2 = _interopRequireDefault(_isNullish);

var _isInvalid = __webpack_require__(22);

var _isInvalid2 = _interopRequireDefault(_isInvalid);

var _kinds = __webpack_require__(10);

var Kind = _interopRequireWildcard(_kinds);

var _definition = __webpack_require__(2);

var _scalars = __webpack_require__(13);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Produces a GraphQL Value AST given a JavaScript value.
 *
 * A GraphQL type must be provided, which will be used to interpret different
 * JavaScript values.
 *
 * | JSON Value    | GraphQL Value        |
 * | ------------- | -------------------- |
 * | Object        | Input Object         |
 * | Array         | List                 |
 * | Boolean       | Boolean              |
 * | String        | String / Enum Value  |
 * | Number        | Int / Float          |
 * | Mixed         | Enum Value           |
 * | null          | NullValue            |
 *
 */
function astFromValue(value, type) {
  // Ensure flow knows that we treat function params as const.
  var _value = value;

  if (type instanceof _definition.GraphQLNonNull) {
    var astValue = astFromValue(_value, type.ofType);
    if (astValue && astValue.kind === Kind.NULL) {
      return null;
    }
    return astValue;
  }

  // only explicit null, not undefined, NaN
  if (_value === null) {
    return { kind: Kind.NULL };
  }

  // undefined, NaN
  if ((0, _isInvalid2.default)(_value)) {
    return null;
  }

  // Convert JavaScript array to GraphQL list. If the GraphQLType is a list, but
  // the value is not an array, convert the value using the list's item type.
  if (type instanceof _definition.GraphQLList) {
    var itemType = type.ofType;
    if ((0, _iterall.isCollection)(_value)) {
      var valuesNodes = [];
      (0, _iterall.forEach)(_value, function (item) {
        var itemNode = astFromValue(item, itemType);
        if (itemNode) {
          valuesNodes.push(itemNode);
        }
      });
      return { kind: Kind.LIST, values: valuesNodes };
    }
    return astFromValue(_value, itemType);
  }

  // Populate the fields of the input object by creating ASTs from each value
  // in the JavaScript object according to the fields in the input type.
  if (type instanceof _definition.GraphQLInputObjectType) {
    if (_value === null || (typeof _value === 'undefined' ? 'undefined' : _typeof(_value)) !== 'object') {
      return null;
    }
    var fields = type.getFields();
    var fieldNodes = [];
    Object.keys(fields).forEach(function (fieldName) {
      var fieldType = fields[fieldName].type;
      var fieldValue = astFromValue(_value[fieldName], fieldType);
      if (fieldValue) {
        fieldNodes.push({
          kind: Kind.OBJECT_FIELD,
          name: { kind: Kind.NAME, value: fieldName },
          value: fieldValue
        });
      }
    });
    return { kind: Kind.OBJECT, fields: fieldNodes };
  }

  !(type instanceof _definition.GraphQLScalarType || type instanceof _definition.GraphQLEnumType) ? (0, _invariant2.default)(0, 'Must provide Input Type, cannot use: ' + String(type)) : void 0;

  // Since value is an internally represented value, it must be serialized
  // to an externally represented value before converting into an AST.
  var serialized = type.serialize(_value);
  if ((0, _isNullish2.default)(serialized)) {
    return null;
  }

  // Others serialize based on their corresponding JavaScript scalar types.
  if (typeof serialized === 'boolean') {
    return { kind: Kind.BOOLEAN, value: serialized };
  }

  // JavaScript numbers can be Int or Float values.
  if (typeof serialized === 'number') {
    var stringNum = String(serialized);
    return (/^[0-9]+$/.test(stringNum) ? { kind: Kind.INT, value: stringNum } : { kind: Kind.FLOAT, value: stringNum }
    );
  }

  if (typeof serialized === 'string') {
    // Enum types use Enum literals.
    if (type instanceof _definition.GraphQLEnumType) {
      return { kind: Kind.ENUM, value: serialized };
    }

    // ID types can use Int literals.
    if (type === _scalars.GraphQLID && /^[0-9]+$/.test(serialized)) {
      return { kind: Kind.INT, value: serialized };
    }

    // Use JSON stringify, which uses the same string encoding as GraphQL,
    // then remove the quotes.
    return {
      kind: Kind.STRING,
      value: JSON.stringify(serialized).slice(1, -1)
    };
  }

  throw new TypeError('Cannot convert value to AST: ' + String(serialized));
}

/***/ }),
/* 37 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2016, Lee Byron
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @ignore
 */

/**
 * [Iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterator)
 * is a *protocol* which describes a standard way to produce a sequence of
 * values, typically the values of the Iterable represented by this Iterator.
 *
 * While described by the [ES2015 version of JavaScript](http://www.ecma-international.org/ecma-262/6.0/#sec-iterator-interface)
 * it can be utilized by any version of JavaScript.
 *
 * @typedef {Object} Iterator
 * @template T The type of each iterated value
 * @property {function (): { value: T, done: boolean }} next
 *   A method which produces either the next value in a sequence or a result
 *   where the `done` property is `true` indicating the end of the Iterator.
 */

/**
 * [Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterable)
 * is a *protocol* which when implemented allows a JavaScript object to define
 * their iteration behavior, such as what values are looped over in a `for..of`
 * loop or `iterall`'s `forEach` function. Many [built-in types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#Builtin_iterables)
 * implement the Iterable protocol, including `Array` and `Map`.
 *
 * While described by the [ES2015 version of JavaScript](http://www.ecma-international.org/ecma-262/6.0/#sec-iterable-interface)
 * it can be utilized by any version of JavaScript.
 *
 * @typedef {Object} Iterable
 * @template T The type of each iterated value
 * @property {function (): Iterator<T>} Symbol.iterator
 *   A method which produces an Iterator for this Iterable.
 */

// In ES2015 (or a polyfilled) environment, this will be Symbol.iterator
var SYMBOL_ITERATOR = typeof Symbol === 'function' && Symbol.iterator

/**
 * A property name to be used as the name of an Iterable's method responsible
 * for producing an Iterator, referred to as `@@iterator`. Typically represents
 * the value `Symbol.iterator` but falls back to the string `"@@iterator"` when
 * `Symbol.iterator` is not defined.
 *
 * Use `$$iterator` for defining new Iterables instead of `Symbol.iterator`,
 * but do not use it for accessing existing Iterables, instead use
 * `getIterator()` or `isIterable()`.
 *
 * @example
 *
 * var $$iterator = require('iterall').$$iterator
 *
 * function Counter (to) {
 *   this.to = to
 * }
 *
 * Counter.prototype[$$iterator] = function () {
 *   return {
 *     to: this.to,
 *     num: 0,
 *     next () {
 *       if (this.num >= this.to) {
 *         return { value: undefined, done: true }
 *       }
 *       return { value: this.num++, done: false }
 *     }
 *   }
 * }
 *
 * var counter = new Counter(3)
 * for (var number of counter) {
 *   console.log(number) // 0 ... 1 ... 2
 * }
 *
 * @type {Symbol|string}
 */
var $$iterator = SYMBOL_ITERATOR || '@@iterator'
exports.$$iterator = $$iterator

/**
 * Returns true if the provided object implements the Iterator protocol via
 * either implementing a `Symbol.iterator` or `"@@iterator"` method.
 *
 * @example
 *
 * var isIterable = require('iterall').isIterable
 * isIterable([ 1, 2, 3 ]) // true
 * isIterable('ABC') // true
 * isIterable({ length: 1, 0: 'Alpha' }) // false
 * isIterable({ key: 'value' }) // false
 * isIterable(new Map()) // true
 *
 * @param obj
 *   A value which might implement the Iterable protocol.
 * @return {boolean} true if Iterable.
 */
function isIterable(obj) {
  return !!getIteratorMethod(obj)
}
exports.isIterable = isIterable

/**
 * Returns true if the provided object implements the Array-like protocol via
 * defining a positive-integer `length` property.
 *
 * @example
 *
 * var isArrayLike = require('iterall').isArrayLike
 * isArrayLike([ 1, 2, 3 ]) // true
 * isArrayLike('ABC') // true
 * isArrayLike({ length: 1, 0: 'Alpha' }) // true
 * isArrayLike({ key: 'value' }) // false
 * isArrayLike(new Map()) // false
 *
 * @param obj
 *   A value which might implement the Array-like protocol.
 * @return {boolean} true if Array-like.
 */
function isArrayLike(obj) {
  var length = obj != null && obj.length
  return typeof length === 'number' && length >= 0 && length % 1 === 0
}
exports.isArrayLike = isArrayLike

/**
 * Returns true if the provided object is an Object (i.e. not a string literal)
 * and is either Iterable or Array-like.
 *
 * This may be used in place of [Array.isArray()][isArray] to determine if an
 * object should be iterated-over. It always excludes string literals and
 * includes Arrays (regardless of if it is Iterable). It also includes other
 * Array-like objects such as NodeList, TypedArray, and Buffer.
 *
 * @example
 *
 * var isCollection = require('iterall').isCollection
 * isCollection([ 1, 2, 3 ]) // true
 * isCollection('ABC') // false
 * isCollection({ length: 1, 0: 'Alpha' }) // true
 * isCollection({ key: 'value' }) // false
 * isCollection(new Map()) // true
 *
 * @example
 *
 * var forEach = require('iterall').forEach
 * if (isCollection(obj)) {
 *   forEach(obj, function (value) {
 *     console.log(value)
 *   })
 * }
 *
 * @param obj
 *   An Object value which might implement the Iterable or Array-like protocols.
 * @return {boolean} true if Iterable or Array-like Object.
 */
function isCollection(obj) {
  return Object(obj) === obj && (isArrayLike(obj) || isIterable(obj))
}
exports.isCollection = isCollection

/**
 * If the provided object implements the Iterator protocol, its Iterator object
 * is returned. Otherwise returns undefined.
 *
 * @example
 *
 * var getIterator = require('iterall').getIterator
 * var iterator = getIterator([ 1, 2, 3 ])
 * iterator.next() // { value: 1, done: false }
 * iterator.next() // { value: 2, done: false }
 * iterator.next() // { value: 3, done: false }
 * iterator.next() // { value: undefined, done: true }
 *
 * @template T the type of each iterated value
 * @param {Iterable<T>} iterable
 *   An Iterable object which is the source of an Iterator.
 * @return {Iterator<T>} new Iterator instance.
 */
function getIterator(iterable) {
  var method = getIteratorMethod(iterable)
  if (method) {
    return method.call(iterable)
  }
}
exports.getIterator = getIterator

/**
 * If the provided object implements the Iterator protocol, the method
 * responsible for producing its Iterator object is returned.
 *
 * This is used in rare cases for performance tuning. This method must be called
 * with obj as the contextual this-argument.
 *
 * @example
 *
 * var getIteratorMethod = require('iterall').getIteratorMethod
 * var myArray = [ 1, 2, 3 ]
 * var method = getIteratorMethod(myArray)
 * if (method) {
 *   var iterator = method.call(myArray)
 * }
 *
 * @template T the type of each iterated value
 * @param {Iterable<T>} iterable
 *   An Iterable object which defines an `@@iterator` method.
 * @return {function(): Iterator<T>} `@@iterator` method.
 */
function getIteratorMethod(iterable) {
  if (iterable != null) {
    var method =
      (SYMBOL_ITERATOR && iterable[SYMBOL_ITERATOR]) || iterable['@@iterator']
    if (typeof method === 'function') {
      return method
    }
  }
}
exports.getIteratorMethod = getIteratorMethod

/**
 * Similar to `getIterator()`, this method returns a new Iterator given an
 * Iterable. However it will also create an Iterator for a non-Iterable
 * Array-like collection, such as Array in a non-ES2015 environment.
 *
 * `createIterator` is complimentary to `forEach`, but allows a "pull"-based
 * iteration as opposed to `forEach`'s "push"-based iteration.
 *
 * `createIterator` produces an Iterator for Array-likes with the same behavior
 * as ArrayIteratorPrototype described in the ECMAScript specification, and
 * does *not* skip over "holes".
 *
 * @example
 *
 * var createIterator = require('iterall').createIterator
 *
 * var myArraylike = { length: 3, 0: 'Alpha', 1: 'Bravo', 2: 'Charlie' }
 * var iterator = createIterator(myArraylike)
 * iterator.next() // { value: 'Alpha', done: false }
 * iterator.next() // { value: 'Bravo', done: false }
 * iterator.next() // { value: 'Charlie', done: false }
 * iterator.next() // { value: undefined, done: true }
 *
 * @template T the type of each iterated value
 * @param {Iterable<T>|{ length: number }} collection
 *   An Iterable or Array-like object to produce an Iterator.
 * @return {Iterator<T>} new Iterator instance.
 */
function createIterator(collection) {
  if (collection != null) {
    var iterator = getIterator(collection)
    if (iterator) {
      return iterator
    }
    if (isArrayLike(collection)) {
      return new ArrayLikeIterator(collection)
    }
  }
}
exports.createIterator = createIterator

// When the object provided to `createIterator` is not Iterable but is
// Array-like, this simple Iterator is created.
function ArrayLikeIterator(obj) {
  this._o = obj
  this._i = 0
}

// Note: all Iterators are themselves Iterable.
ArrayLikeIterator.prototype[$$iterator] = function() {
  return this
}

// A simple state-machine determines the IteratorResult returned, yielding
// each value in the Array-like object in order of their indicies.
ArrayLikeIterator.prototype.next = function() {
  if (this._o === void 0 || this._i >= this._o.length) {
    this._o = void 0
    return { value: void 0, done: true }
  }
  return { value: this._o[this._i++], done: false }
}

/**
 * Given an object which either implements the Iterable protocol or is
 * Array-like, iterate over it, calling the `callback` at each iteration.
 *
 * Use `forEach` where you would expect to use a `for ... of` loop in ES6.
 * However `forEach` adheres to the behavior of [Array#forEach][] described in
 * the ECMAScript specification, skipping over "holes" in Array-likes. It will
 * also delegate to a `forEach` method on `collection` if one is defined,
 * ensuring native performance for `Arrays`.
 *
 * Similar to [Array#forEach][], the `callback` function accepts three
 * arguments, and is provided with `thisArg` as the calling context.
 *
 * Note: providing an infinite Iterator to forEach will produce an error.
 *
 * [Array#forEach]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 *
 * @example
 *
 * var forEach = require('iterall').forEach
 *
 * forEach(myIterable, function (value, index, iterable) {
 *   console.log(value, index, iterable === myIterable)
 * })
 *
 * @example
 *
 * // ES6:
 * for (let value of myIterable) {
 *   console.log(value)
 * }
 *
 * // Any JavaScript environment:
 * forEach(myIterable, function (value) {
 *   console.log(value)
 * })
 *
 * @template T the type of each iterated value
 * @param {Iterable<T>|{ length: number }} collection
 *   The Iterable or array to iterate over.
 * @param {function(T, number, object)} callback
 *   Function to execute for each iteration, taking up to three arguments
 * @param [thisArg]
 *   Optional. Value to use as `this` when executing `callback`.
 */
function forEach(collection, callback, thisArg) {
  if (collection != null) {
    if (typeof collection.forEach === 'function') {
      return collection.forEach(callback, thisArg)
    }
    var i = 0
    var iterator = getIterator(collection)
    if (iterator) {
      var step
      while (!(step = iterator.next()).done) {
        callback.call(thisArg, step.value, i++, collection)
        // Infinite Iterators could cause forEach to run forever.
        // After a very large number of iterations, produce an error.
        /* istanbul ignore if */
        if (i > 9999999) {
          throw new TypeError('Near-infinite iteration.')
        }
      }
    } else if (isArrayLike(collection)) {
      for (; i < collection.length; i++) {
        if (collection.hasOwnProperty(i)) {
          callback.call(thisArg, collection[i], i, collection)
        }
      }
    }
  }
}
exports.forEach = forEach

/////////////////////////////////////////////////////
//                                                 //
//                 ASYNC ITERATORS                 //
//                                                 //
/////////////////////////////////////////////////////

/**
 * [AsyncIterator](https://tc39.github.io/proposal-async-iteration/)
 * is a *protocol* which describes a standard way to produce and consume an
 * asynchronous sequence of values, typically the values of the AsyncIterable
 * represented by this AsyncIterator.
 *
 * AsyncIterator is similar to Observable or Stream.
 *
 * While described as a proposed addition to the [ES2017 version of JavaScript](https://tc39.github.io/proposal-async-iteration/)
 * it can be utilized by any version of JavaScript.
 *
 * @typedef {Object} AsyncIterator
 * @template T The type of each iterated value
 * @property {function (): Promise<{ value: T, done: boolean }>} next
 *   A method which produces a Promise which resolves to either the next value
 *   in a sequence or a result where the `done` property is `true` indicating
 *   the end of the sequence of values. It may also produce a Promise which
 *   becomes rejected, indicating a failure.
 */

/**
 * AsyncIterable is a *protocol* which when implemented allows a JavaScript
 * object to define their asynchronous iteration behavior, such as what values
 * are looped over in a `for-await-of` loop or `iterall`'s `forAwaitEach`
 * function.
 *
 * While described as a proposed addition to the [ES2017 version of JavaScript](https://tc39.github.io/proposal-async-iteration/)
 * it can be utilized by any version of JavaScript.
 *
 * @typedef {Object} AsyncIterable
 * @template T The type of each iterated value
 * @property {function (): AsyncIterator<T>} Symbol.asyncIterator
 *   A method which produces an AsyncIterator for this AsyncIterable.
 */

// In ES2017 (or a polyfilled) environment, this will be Symbol.asyncIterator
var SYMBOL_ASYNC_ITERATOR = typeof Symbol === 'function' && Symbol.asyncIterator

/**
 * A property name to be used as the name of an AsyncIterable's method
 * responsible for producing an Iterator, referred to as `@@asyncIterator`.
 * Typically represents the value `Symbol.asyncIterator` but falls back to the
 * string `"@@asyncIterator"` when `Symbol.asyncIterator` is not defined.
 *
 * Use `$$asyncIterator` for defining new AsyncIterables instead of
 * `Symbol.asyncIterator`, but do not use it for accessing existing Iterables,
 * instead use `getAsyncIterator()` or `isAsyncIterable()`.
 *
 * @example
 *
 * var $$asyncIterator = require('iterall').$$asyncIterator
 *
 * function Chirper (to) {
 *   this.to = to
 * }
 *
 * Chirper.prototype[$$asyncIterator] = function () {
 *   return {
 *     to: this.to,
 *     num: 0,
 *     next () {
 *       return new Promise(function (resolve) {
 *         if (this.num >= this.to) {
 *           resolve({ value: undefined, done: true })
 *         } else {
 *           setTimeout(function () {
 *             resolve({ value: this.num++, done: false })
 *           }, 1000)
 *         }
 *       }
 *     }
 *   }
 * }
 *
 * var chirper = new Chirper(3)
 * for await (var number of chirper) {
 *   console.log(number) // 0 ...wait... 1 ...wait... 2
 * }
 *
 * @type {Symbol|string}
 */
var $$asyncIterator = SYMBOL_ASYNC_ITERATOR || '@@asyncIterator'
exports.$$asyncIterator = $$asyncIterator

/**
 * Returns true if the provided object implements the AsyncIterator protocol via
 * either implementing a `Symbol.asyncIterator` or `"@@asyncIterator"` method.
 *
 * @example
 *
 * var isAsyncIterable = require('iterall').isAsyncIterable
 * isAsyncIterable(myStream) // true
 * isAsyncIterable('ABC') // false
 *
 * @param obj
 *   A value which might implement the AsyncIterable protocol.
 * @return {boolean} true if AsyncIterable.
 */
function isAsyncIterable(obj) {
  return !!getAsyncIteratorMethod(obj)
}
exports.isAsyncIterable = isAsyncIterable

/**
 * If the provided object implements the AsyncIterator protocol, its
 * AsyncIterator object is returned. Otherwise returns undefined.
 *
 * @example
 *
 * var getAsyncIterator = require('iterall').getAsyncIterator
 * var asyncIterator = getAsyncIterator(myStream)
 * asyncIterator.next().then(console.log) // { value: 1, done: false }
 * asyncIterator.next().then(console.log) // { value: 2, done: false }
 * asyncIterator.next().then(console.log) // { value: 3, done: false }
 * asyncIterator.next().then(console.log) // { value: undefined, done: true }
 *
 * @template T the type of each iterated value
 * @param {AsyncIterable<T>} asyncIterable
 *   An AsyncIterable object which is the source of an AsyncIterator.
 * @return {AsyncIterator<T>} new AsyncIterator instance.
 */
function getAsyncIterator(asyncIterable) {
  var method = getAsyncIteratorMethod(asyncIterable)
  if (method) {
    return method.call(asyncIterable)
  }
}
exports.getAsyncIterator = getAsyncIterator

/**
 * If the provided object implements the AsyncIterator protocol, the method
 * responsible for producing its AsyncIterator object is returned.
 *
 * This is used in rare cases for performance tuning. This method must be called
 * with obj as the contextual this-argument.
 *
 * @example
 *
 * var getAsyncIteratorMethod = require('iterall').getAsyncIteratorMethod
 * var method = getAsyncIteratorMethod(myStream)
 * if (method) {
 *   var asyncIterator = method.call(myStream)
 * }
 *
 * @template T the type of each iterated value
 * @param {AsyncIterable<T>} asyncIterable
 *   An AsyncIterable object which defines an `@@asyncIterator` method.
 * @return {function(): AsyncIterator<T>} `@@asyncIterator` method.
 */
function getAsyncIteratorMethod(asyncIterable) {
  if (asyncIterable != null) {
    var method =
      (SYMBOL_ASYNC_ITERATOR && asyncIterable[SYMBOL_ASYNC_ITERATOR]) ||
      asyncIterable['@@asyncIterator']
    if (typeof method === 'function') {
      return method
    }
  }
}
exports.getAsyncIteratorMethod = getAsyncIteratorMethod

/**
 * Similar to `getAsyncIterator()`, this method returns a new AsyncIterator
 * given an AsyncIterable. However it will also create an AsyncIterator for a
 * non-async Iterable as well as non-Iterable Array-like collection, such as
 * Array in a pre-ES2015 environment.
 *
 * `createAsyncIterator` is complimentary to `forAwaitEach`, but allows a
 * buffering "pull"-based iteration as opposed to `forAwaitEach`'s
 * "push"-based iteration.
 *
 * `createAsyncIterator` produces an AsyncIterator for non-async Iterables as
 * described in the ECMAScript proposal [Async-from-Sync Iterator Objects](https://tc39.github.io/proposal-async-iteration/#sec-async-from-sync-iterator-objects).
 *
 * > Note: Creating `AsyncIterator`s requires the existence of `Promise`.
 * > While `Promise` has been available in modern browsers for a number of
 * > years, legacy browsers (like IE 11) may require a polyfill.
 *
 * @example
 *
 * var createAsyncIterator = require('iterall').createAsyncIterator
 *
 * var myArraylike = { length: 3, 0: 'Alpha', 1: 'Bravo', 2: 'Charlie' }
 * var iterator = createAsyncIterator(myArraylike)
 * iterator.next().then(console.log) // { value: 'Alpha', done: false }
 * iterator.next().then(console.log) // { value: 'Bravo', done: false }
 * iterator.next().then(console.log) // { value: 'Charlie', done: false }
 * iterator.next().then(console.log) // { value: undefined, done: true }
 *
 * @template T the type of each iterated value
 * @param {AsyncIterable<T>|Iterable<T>|{ length: number }} source
 *   An AsyncIterable, Iterable, or Array-like object to produce an Iterator.
 * @return {AsyncIterator<T>} new AsyncIterator instance.
 */
function createAsyncIterator(source) {
  if (source != null) {
    var asyncIterator = getAsyncIterator(source)
    if (asyncIterator) {
      return asyncIterator
    }
    var iterator = createIterator(source)
    if (iterator) {
      return new AsyncFromSyncIterator(iterator)
    }
  }
}
exports.createAsyncIterator = createAsyncIterator

// When the object provided to `createAsyncIterator` is not AsyncIterable but is
// sync Iterable, this simple wrapper is created.
function AsyncFromSyncIterator(iterator) {
  this._i = iterator
}

// Note: all AsyncIterators are themselves AsyncIterable.
AsyncFromSyncIterator.prototype[$$asyncIterator] = function() {
  return this
}

// A simple state-machine determines the IteratorResult returned, yielding
// each value in the Array-like object in order of their indicies.
AsyncFromSyncIterator.prototype.next = function() {
  var step = this._i.next()
  return Promise.resolve(step.value).then(function(value) {
    return { value: value, done: step.done }
  })
}

/**
 * Given an object which either implements the AsyncIterable protocol or is
 * Array-like, iterate over it, calling the `callback` at each iteration.
 *
 * Use `forAwaitEach` where you would expect to use a `for-await-of` loop.
 *
 * Similar to [Array#forEach][], the `callback` function accepts three
 * arguments, and is provided with `thisArg` as the calling context.
 *
 * > Note: Using `forAwaitEach` requires the existence of `Promise`.
 * > While `Promise` has been available in modern browsers for a number of
 * > years, legacy browsers (like IE 11) may require a polyfill.
 *
 * @example
 *
 * var forAwaitEach = require('iterall').forAwaitEach
 *
 * forAwaitEach(myIterable, function (value, index, iterable) {
 *   console.log(value, index, iterable === myIterable)
 * })
 *
 * @example
 *
 * // ES2017:
 * for await (let value of myAsyncIterable) {
 *   console.log(await doSomethingAsync(value))
 * }
 * console.log('done')
 *
 * // Any JavaScript environment:
 * forAwaitEach(myAsyncIterable, function (value) {
 *   return doSomethingAsync(value).then(console.log)
 * }).then(function () {
 *   console.log('done')
 * })
 *
 * @template T the type of each iterated value
 * @param {AsyncIterable<T>|Iterable<Promise<T> | T>|{ length: number }} source
 *   The AsyncIterable or array to iterate over.
 * @param {function(T, number, object)} callback
 *   Function to execute for each iteration, taking up to three arguments
 * @param [thisArg]
 *   Optional. Value to use as `this` when executing `callback`.
 */
function forAwaitEach(source, callback, thisArg) {
  var asyncIterator = createAsyncIterator(source)
  if (asyncIterator) {
    var i = 0
    function next() {
      return asyncIterator.next().then(function(step) {
        if (!step.done) {
          return Promise.resolve(
            callback.call(thisArg, step.value, i++, source)
          ).then(next)
        }
      })
    }
    return next()
  }
}
exports.forAwaitEach = forAwaitEach


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.visit = visit;
exports.visitInParallel = visitInParallel;
exports.visitWithTypeInfo = visitWithTypeInfo;
exports.getVisitFn = getVisitFn;
/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

var QueryDocumentKeys = exports.QueryDocumentKeys = {
  Name: [],

  Document: ['definitions'],
  OperationDefinition: ['name', 'variableDefinitions', 'directives', 'selectionSet'],
  VariableDefinition: ['variable', 'type', 'defaultValue'],
  Variable: ['name'],
  SelectionSet: ['selections'],
  Field: ['alias', 'name', 'arguments', 'directives', 'selectionSet'],
  Argument: ['name', 'value'],

  FragmentSpread: ['name', 'directives'],
  InlineFragment: ['typeCondition', 'directives', 'selectionSet'],
  FragmentDefinition: ['name', 'typeCondition', 'directives', 'selectionSet'],

  IntValue: [],
  FloatValue: [],
  StringValue: [],
  BooleanValue: [],
  NullValue: [],
  EnumValue: [],
  ListValue: ['values'],
  ObjectValue: ['fields'],
  ObjectField: ['name', 'value'],

  Directive: ['name', 'arguments'],

  NamedType: ['name'],
  ListType: ['type'],
  NonNullType: ['type'],

  SchemaDefinition: ['directives', 'operationTypes'],
  OperationTypeDefinition: ['type'],

  ScalarTypeDefinition: ['name', 'directives'],
  ObjectTypeDefinition: ['name', 'interfaces', 'directives', 'fields'],
  FieldDefinition: ['name', 'arguments', 'type', 'directives'],
  InputValueDefinition: ['name', 'type', 'defaultValue', 'directives'],
  InterfaceTypeDefinition: ['name', 'directives', 'fields'],
  UnionTypeDefinition: ['name', 'directives', 'types'],
  EnumTypeDefinition: ['name', 'directives', 'values'],
  EnumValueDefinition: ['name', 'directives'],
  InputObjectTypeDefinition: ['name', 'directives', 'fields'],

  TypeExtensionDefinition: ['definition'],

  DirectiveDefinition: ['name', 'arguments', 'locations']
};

var BREAK = exports.BREAK = {};

/**
 * visit() will walk through an AST using a depth first traversal, calling
 * the visitor's enter function at each node in the traversal, and calling the
 * leave function after visiting that node and all of its child nodes.
 *
 * By returning different values from the enter and leave functions, the
 * behavior of the visitor can be altered, including skipping over a sub-tree of
 * the AST (by returning false), editing the AST by returning a value or null
 * to remove the value, or to stop the whole traversal by returning BREAK.
 *
 * When using visit() to edit an AST, the original AST will not be modified, and
 * a new version of the AST with the changes applied will be returned from the
 * visit function.
 *
 *     const editedAST = visit(ast, {
 *       enter(node, key, parent, path, ancestors) {
 *         // @return
 *         //   undefined: no action
 *         //   false: skip visiting this node
 *         //   visitor.BREAK: stop visiting altogether
 *         //   null: delete this node
 *         //   any value: replace this node with the returned value
 *       },
 *       leave(node, key, parent, path, ancestors) {
 *         // @return
 *         //   undefined: no action
 *         //   false: no action
 *         //   visitor.BREAK: stop visiting altogether
 *         //   null: delete this node
 *         //   any value: replace this node with the returned value
 *       }
 *     });
 *
 * Alternatively to providing enter() and leave() functions, a visitor can
 * instead provide functions named the same as the kinds of AST nodes, or
 * enter/leave visitors at a named key, leading to four permutations of
 * visitor API:
 *
 * 1) Named visitors triggered when entering a node a specific kind.
 *
 *     visit(ast, {
 *       Kind(node) {
 *         // enter the "Kind" node
 *       }
 *     })
 *
 * 2) Named visitors that trigger upon entering and leaving a node of
 *    a specific kind.
 *
 *     visit(ast, {
 *       Kind: {
 *         enter(node) {
 *           // enter the "Kind" node
 *         }
 *         leave(node) {
 *           // leave the "Kind" node
 *         }
 *       }
 *     })
 *
 * 3) Generic visitors that trigger upon entering and leaving any node.
 *
 *     visit(ast, {
 *       enter(node) {
 *         // enter any node
 *       },
 *       leave(node) {
 *         // leave any node
 *       }
 *     })
 *
 * 4) Parallel visitors for entering and leaving nodes of a specific kind.
 *
 *     visit(ast, {
 *       enter: {
 *         Kind(node) {
 *           // enter the "Kind" node
 *         }
 *       },
 *       leave: {
 *         Kind(node) {
 *           // leave the "Kind" node
 *         }
 *       }
 *     })
 */
function visit(root, visitor, keyMap) {
  var visitorKeys = keyMap || QueryDocumentKeys;

  var stack = void 0;
  var inArray = Array.isArray(root);
  var keys = [root];
  var index = -1;
  var edits = [];
  var parent = void 0;
  var path = [];
  var ancestors = [];
  var newRoot = root;

  do {
    index++;
    var isLeaving = index === keys.length;
    var key = void 0;
    var node = void 0;
    var isEdited = isLeaving && edits.length !== 0;
    if (isLeaving) {
      key = ancestors.length === 0 ? undefined : path.pop();
      node = parent;
      parent = ancestors.pop();
      if (isEdited) {
        if (inArray) {
          node = node.slice();
        } else {
          var clone = {};
          for (var k in node) {
            if (node.hasOwnProperty(k)) {
              clone[k] = node[k];
            }
          }
          node = clone;
        }
        var editOffset = 0;
        for (var ii = 0; ii < edits.length; ii++) {
          var editKey = edits[ii][0];
          var editValue = edits[ii][1];
          if (inArray) {
            editKey -= editOffset;
          }
          if (inArray && editValue === null) {
            node.splice(editKey, 1);
            editOffset++;
          } else {
            node[editKey] = editValue;
          }
        }
      }
      index = stack.index;
      keys = stack.keys;
      edits = stack.edits;
      inArray = stack.inArray;
      stack = stack.prev;
    } else {
      key = parent ? inArray ? index : keys[index] : undefined;
      node = parent ? parent[key] : newRoot;
      if (node === null || node === undefined) {
        continue;
      }
      if (parent) {
        path.push(key);
      }
    }

    var result = void 0;
    if (!Array.isArray(node)) {
      if (!isNode(node)) {
        throw new Error('Invalid AST Node: ' + JSON.stringify(node));
      }
      var visitFn = getVisitFn(visitor, node.kind, isLeaving);
      if (visitFn) {
        result = visitFn.call(visitor, node, key, parent, path, ancestors);

        if (result === BREAK) {
          break;
        }

        if (result === false) {
          if (!isLeaving) {
            path.pop();
            continue;
          }
        } else if (result !== undefined) {
          edits.push([key, result]);
          if (!isLeaving) {
            if (isNode(result)) {
              node = result;
            } else {
              path.pop();
              continue;
            }
          }
        }
      }
    }

    if (result === undefined && isEdited) {
      edits.push([key, node]);
    }

    if (!isLeaving) {
      stack = { inArray: inArray, index: index, keys: keys, edits: edits, prev: stack };
      inArray = Array.isArray(node);
      keys = inArray ? node : visitorKeys[node.kind] || [];
      index = -1;
      edits = [];
      if (parent) {
        ancestors.push(parent);
      }
      parent = node;
    }
  } while (stack !== undefined);

  if (edits.length !== 0) {
    newRoot = edits[edits.length - 1][1];
  }

  return newRoot;
}

function isNode(maybeNode) {
  return maybeNode && typeof maybeNode.kind === 'string';
}

/**
 * Creates a new visitor instance which delegates to many visitors to run in
 * parallel. Each visitor will be visited for each node before moving on.
 *
 * If a prior visitor edits a node, no following visitors will see that node.
 */
function visitInParallel(visitors) {
  var skipping = new Array(visitors.length);

  return {
    enter: function enter(node) {
      for (var i = 0; i < visitors.length; i++) {
        if (!skipping[i]) {
          var fn = getVisitFn(visitors[i], node.kind, /* isLeaving */false);
          if (fn) {
            var result = fn.apply(visitors[i], arguments);
            if (result === false) {
              skipping[i] = node;
            } else if (result === BREAK) {
              skipping[i] = BREAK;
            } else if (result !== undefined) {
              return result;
            }
          }
        }
      }
    },
    leave: function leave(node) {
      for (var i = 0; i < visitors.length; i++) {
        if (!skipping[i]) {
          var fn = getVisitFn(visitors[i], node.kind, /* isLeaving */true);
          if (fn) {
            var result = fn.apply(visitors[i], arguments);
            if (result === BREAK) {
              skipping[i] = BREAK;
            } else if (result !== undefined && result !== false) {
              return result;
            }
          }
        } else if (skipping[i] === node) {
          skipping[i] = null;
        }
      }
    }
  };
}

/**
 * Creates a new visitor instance which maintains a provided TypeInfo instance
 * along with visiting visitor.
 */
function visitWithTypeInfo(typeInfo, visitor) {
  return {
    enter: function enter(node) {
      typeInfo.enter(node);
      var fn = getVisitFn(visitor, node.kind, /* isLeaving */false);
      if (fn) {
        var result = fn.apply(visitor, arguments);
        if (result !== undefined) {
          typeInfo.leave(node);
          if (isNode(result)) {
            typeInfo.enter(result);
          }
        }
        return result;
      }
    },
    leave: function leave(node) {
      var fn = getVisitFn(visitor, node.kind, /* isLeaving */true);
      var result = void 0;
      if (fn) {
        result = fn.apply(visitor, arguments);
      }
      typeInfo.leave(node);
      return result;
    }
  };
}

/**
 * Given a visitor instance, if it is leaving or not, and a node kind, return
 * the function the visitor runtime should call.
 */
function getVisitFn(visitor, kind, isLeaving) {
  var kindVisitor = visitor[kind];
  if (kindVisitor) {
    if (!isLeaving && typeof kindVisitor === 'function') {
      // { Kind() {} }
      return kindVisitor;
    }
    var kindSpecificVisitor = isLeaving ? kindVisitor.leave : kindVisitor.enter;
    if (typeof kindSpecificVisitor === 'function') {
      // { Kind: { enter() {}, leave() {} } }
      return kindSpecificVisitor;
    }
  } else {
    var specificVisitor = isLeaving ? visitor.leave : visitor.enter;
    if (specificVisitor) {
      if (typeof specificVisitor === 'function') {
        // { enter() {}, leave() {} }
        return specificVisitor;
      }
      var specificKindVisitor = specificVisitor[kind];
      if (typeof specificKindVisitor === 'function') {
        // { enter: { Kind() {} }, leave: { Kind() {} } }
        return specificKindVisitor;
      }
    }
  }
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = find;

/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

function find(list, predicate) {
  for (var i = 0; i < list.length; i++) {
    if (predicate(list[i])) {
      return list[i];
    }
  }
}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeFromAST = undefined;

var _invariant = __webpack_require__(4);

var _invariant2 = _interopRequireDefault(_invariant);

var _kinds = __webpack_require__(10);

var Kind = _interopRequireWildcard(_kinds);

var _definition = __webpack_require__(2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Given a Schema and an AST node describing a type, return a GraphQLType
 * definition which applies to that type. For example, if provided the parsed
 * AST node for `[User]`, a GraphQLList instance will be returned, containing
 * the type called "User" found in the schema. If a type called "User" is not
 * found in the schema, then undefined will be returned.
 */
/* eslint-disable no-redeclare */
function typeFromASTImpl(schema, typeNode) {
  /* eslint-enable no-redeclare */
  var innerType = void 0;
  if (typeNode.kind === Kind.LIST_TYPE) {
    innerType = typeFromAST(schema, typeNode.type);
    return innerType && new _definition.GraphQLList(innerType);
  }
  if (typeNode.kind === Kind.NON_NULL_TYPE) {
    innerType = typeFromAST(schema, typeNode.type);
    return innerType && new _definition.GraphQLNonNull(innerType);
  }
  !(typeNode.kind === Kind.NAMED_TYPE) ? (0, _invariant2.default)(0, 'Must be a named type.') : void 0;
  return schema.getType(typeNode.name.value);
}
// This will export typeFromAST with the correct type, but currently exposes
// ~26 errors: https://gist.github.com/4a29403a99a8186fcb15064d69c5f3ae
// export var typeFromAST: typeof typeFromASTType = typeFromASTImpl;

/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

var typeFromAST = exports.typeFromAST = typeFromASTImpl;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = function _isPlaceholder(a) {
  return a != null &&
         typeof a === 'object' &&
         a['@@functional/placeholder'] === true;
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(64);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  getMousePosition: function getMousePosition(event) {
    return {
      x: event.pageX - (window.scrollX || window.pageXOffset),
      y: event.pageY - (window.scrollY || window.pageYOffset)
    };
  },
  getTouchPosition: function getTouchPosition(event) {
    return {
      x: event.touches[0].pageX - (window.scrollX || window.pageXOffset),
      y: event.touches[0].pageY - (window.scrollY || window.pageYOffset)
    };
  },
  pauseEvent: function pauseEvent(event) {
    event.stopPropagation();
    event.preventDefault();
  },
  addEventsToDocument: function addEventsToDocument(eventMap) {
    Object.keys(eventMap).forEach(function (key) {
      document.addEventListener(key, eventMap[key], false);
    });
  },
  removeEventsFromDocument: function removeEventsFromDocument(eventMap) {
    Object.keys(eventMap).forEach(function (key) {
      document.removeEventListener(key, eventMap[key], false);
    });
  },
  targetIsDescendant: function targetIsDescendant(event, parent) {
    var node = event.target;
    while (node !== null) {
      if (node === parent) return true;
      node = node.parentNode;
    }
    return false;
  },
  addEventListenerOnTransitionEnded: function addEventListenerOnTransitionEnded(element, fn) {
    var eventName = transitionEventNamesFor(element);
    if (!eventName) return false;
    element.addEventListener(eventName, fn);
    return true;
  },
  removeEventListenerOnTransitionEnded: function removeEventListenerOnTransitionEnded(element, fn) {
    var eventName = transitionEventNamesFor(element);
    if (!eventName) return false;
    element.removeEventListener(eventName, fn);
    return true;
  }
};


var TRANSITIONS = {
  transition: 'transitionend',
  OTransition: 'oTransitionEnd',
  MozTransition: 'transitionend',
  WebkitTransition: 'webkitTransitionEnd'
};

function transitionEventNamesFor(element) {
  return (0, _keys2.default)(TRANSITIONS).reduce(function (result, transition) {
    return !result && element && element.style[transition] !== undefined ? TRANSITIONS[transition] : result;
  }, null);
}

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export __dirname */
/* harmony export (immutable) */ __webpack_exports__["b"] = getQueryParams;
/* harmony export (immutable) */ __webpack_exports__["c"] = loadWorker;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dom_helpers__ = __webpack_require__(150);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__dom_helpers__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__dom_helpers__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__dom_helpers__["c"]; });

// similar to node __dirname
var __dirname;

function getQueryParams(query) {
    if (query === void 0) { query = location.search; }
    if (!query) {
        return {};
    }
    return (/^[?#]/.test(query) ? query.slice(1) : query)
        .split('&')
        .reduce(function (params, param) {
        var _a = param.split('='), key = _a[0], value = _a[1];
        params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : '';
        return params;
    }, {});
}
;
function loadWorker(relativeUrl) {
    var url = __dirname + '/' + relativeUrl;
    return fetch(url)
        .then(function (response) { return response.blob(); })
        .then(function (script) {
        var url = URL.createObjectURL(script);
        return new Worker(url);
    });
}
/*
  get current script URL
*/
function getJsUrl() {
    var id = +new Date + Math.random();
    try {
        // write empty script to the document. It will get placed directly after the current script
        document.write("<script id=\"dummy" + id + "\"></script>");
        // find appended script and return src of the previous script which is the current script
        return document.getElementById('dummy' + id).previousSibling.src;
    }
    catch (e) {
        return '';
    }
}
__dirname = __WEBPACK_IMPORTED_MODULE_0_path__["dirname"](getJsUrl());


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TypeLink_css__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TypeLink_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__TypeLink_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions___ = __webpack_require__(6);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var TypeLink = /** @class */ (function (_super) {
    __extends(TypeLink, _super);
    function TypeLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TypeLink.prototype.render = function () {
        var _a = this.props, type = _a.type, dispatch = _a.dispatch;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "type-name -object", onClick: function (event) {
                event.stopPropagation();
                dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__actions___["A" /* focusElement */])(type.id));
                dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__actions___["F" /* selectNode */])(type.id));
            } }, type.name));
    };
    return TypeLink;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])()(TypeLink));


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Description_css__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Description_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Description_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_Markdown__ = __webpack_require__(31);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var Description = /** @class */ (function (_super) {
    __extends(Description, _super);
    function Description() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Description.prototype.render = function () {
        var _a = this.props, text = _a.text, className = _a.className;
        if (text)
            return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__utils_Markdown__["a" /* default */], { text: text, className: __WEBPACK_IMPORTED_MODULE_1_classnames__('description-box', className) }));
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_1_classnames__('description-box', className, '-no-description') },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, 'No Description')));
    };
    return Description;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (Description);


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_toolbox_lib_tooltip__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_toolbox_lib_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_toolbox_lib_tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_toolbox_lib_button__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_toolbox_lib_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_toolbox_lib_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__WrappedTypeName_css__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__WrappedTypeName_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__WrappedTypeName_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__introspection___ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__graph___ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__TypeLink__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__TypeName__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__icons_relay_icon_svg__ = __webpack_require__(183);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();









var TooltipIcon = __WEBPACK_IMPORTED_MODULE_1_react_toolbox_lib_tooltip___default()(__WEBPACK_IMPORTED_MODULE_2_react_toolbox_lib_button__["IconButton"]);
var WrappedTypeName = /** @class */ (function (_super) {
    __extends(WrappedTypeName, _super);
    function WrappedTypeName() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WrappedTypeName.prototype.renderRelayIcon = function () {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](TooltipIcon, { className: "relay-icon", tooltipPosition: "top", ripple: false, tooltip: "Relay Connection" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8__icons_relay_icon_svg__["a" /* default */], null)));
    };
    WrappedTypeName.prototype.render = function () {
        var container = this.props.container;
        var type = container.type;
        var wrappers = container.typeWrappers || [];
        var _a = Object(__WEBPACK_IMPORTED_MODULE_4__introspection___["h" /* stringifyWrappers */])(wrappers), leftWrap = _a[0], rightWrap = _a[1];
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "wrapped-type-name" },
            leftWrap,
            Object(__WEBPACK_IMPORTED_MODULE_5__graph___["e" /* isNode */])(type) ? __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__TypeLink__["a" /* default */], { type: type }) : __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7__TypeName__["a" /* default */], { type: type }),
            rightWrap,
            container.relayType && this.renderRelayIcon()));
    };
    return WrappedTypeName;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (WrappedTypeName);


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(17);
var _curry2 = __webpack_require__(30);
var _isPlaceholder = __webpack_require__(44);


/**
 * Optimized internal three-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
module.exports = function _curry3(fn) {
  return function f3(a, b, c) {
    switch (arguments.length) {
      case 0:
        return f3;
      case 1:
        return _isPlaceholder(a) ? f3
             : _curry2(function(_b, _c) { return fn(a, _b, _c); });
      case 2:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f3
             : _isPlaceholder(a) ? _curry2(function(_a, _c) { return fn(_a, b, _c); })
             : _isPlaceholder(b) ? _curry2(function(_b, _c) { return fn(a, _b, _c); })
             : _curry1(function(_c) { return fn(a, b, _c); });
      default:
        return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c) ? f3
             : _isPlaceholder(a) && _isPlaceholder(b) ? _curry2(function(_a, _b) { return fn(_a, _b, c); })
             : _isPlaceholder(a) && _isPlaceholder(c) ? _curry2(function(_a, _c) { return fn(_a, b, _c); })
             : _isPlaceholder(b) && _isPlaceholder(c) ? _curry2(function(_b, _c) { return fn(a, _b, _c); })
             : _isPlaceholder(a) ? _curry1(function(_a) { return fn(_a, b, c); })
             : _isPlaceholder(b) ? _curry1(function(_b) { return fn(a, _b, c); })
             : _isPlaceholder(c) ? _curry1(function(_c) { return fn(a, b, _c); })
             : fn(a, b, c);
    }
  };
};


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["f"] = stringifyWrappers;
/* unused harmony export buildId */
/* harmony export (immutable) */ __webpack_exports__["g"] = typeNameToId;
/* harmony export (immutable) */ __webpack_exports__["a"] = extractTypeId;
/* harmony export (immutable) */ __webpack_exports__["e"] = isSystemType;
/* harmony export (immutable) */ __webpack_exports__["b"] = isBuiltInScalarType;
/* harmony export (immutable) */ __webpack_exports__["d"] = isScalarType;
/* unused harmony export isObjectType */
/* harmony export (immutable) */ __webpack_exports__["c"] = isInputObjectType;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);

function stringifyWrappers(wrappers) {
    return __WEBPACK_IMPORTED_MODULE_0_lodash__["reduce"](wrappers, function (_a, wrapper) {
        var left = _a[0], right = _a[1];
        switch (wrapper) {
            case 'NON_NULL':
                return [left, right + '!'];
            case 'LIST':
                return ['[' + left, right + ']'];
        }
    }, ['', '']);
}
function buildId() {
    var parts = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        parts[_i] = arguments[_i];
    }
    return parts.join('::');
}
function typeNameToId(name) {
    return buildId('TYPE', name);
}
function extractTypeId(id) {
    var _a = id.split('::'), type = _a[1];
    return buildId('TYPE', type);
}
function isSystemType(type) {
    return __WEBPACK_IMPORTED_MODULE_0_lodash__["startsWith"](type.name, '__');
}
function isBuiltInScalarType(type) {
    return [
        'Int',
        'Float',
        'String',
        'Boolean',
        'ID'
    ].indexOf(type.name) !== -1;
}
function isScalarType(type) {
    return (type.kind === 'SCALAR' || type.kind === 'ENUM');
}
function isObjectType(type) {
    return (type.kind === 'OBJECT');
}
function isInputObjectType(type) {
    return (type.kind === 'INPUT_OBJECT');
}


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _introspectionQuery = __webpack_require__(99);

Object.defineProperty(exports, 'introspectionQuery', {
  enumerable: true,
  get: function get() {
    return _introspectionQuery.introspectionQuery;
  }
});

var _getOperationAST = __webpack_require__(100);

Object.defineProperty(exports, 'getOperationAST', {
  enumerable: true,
  get: function get() {
    return _getOperationAST.getOperationAST;
  }
});

var _buildClientSchema = __webpack_require__(101);

Object.defineProperty(exports, 'buildClientSchema', {
  enumerable: true,
  get: function get() {
    return _buildClientSchema.buildClientSchema;
  }
});

var _buildASTSchema = __webpack_require__(58);

Object.defineProperty(exports, 'buildASTSchema', {
  enumerable: true,
  get: function get() {
    return _buildASTSchema.buildASTSchema;
  }
});
Object.defineProperty(exports, 'buildSchema', {
  enumerable: true,
  get: function get() {
    return _buildASTSchema.buildSchema;
  }
});

var _extendSchema = __webpack_require__(107);

Object.defineProperty(exports, 'extendSchema', {
  enumerable: true,
  get: function get() {
    return _extendSchema.extendSchema;
  }
});

var _schemaPrinter = __webpack_require__(108);

Object.defineProperty(exports, 'printSchema', {
  enumerable: true,
  get: function get() {
    return _schemaPrinter.printSchema;
  }
});
Object.defineProperty(exports, 'printType', {
  enumerable: true,
  get: function get() {
    return _schemaPrinter.printType;
  }
});
Object.defineProperty(exports, 'printIntrospectionSchema', {
  enumerable: true,
  get: function get() {
    return _schemaPrinter.printIntrospectionSchema;
  }
});

var _typeFromAST = __webpack_require__(40);

Object.defineProperty(exports, 'typeFromAST', {
  enumerable: true,
  get: function get() {
    return _typeFromAST.typeFromAST;
  }
});

var _valueFromAST = __webpack_require__(21);

Object.defineProperty(exports, 'valueFromAST', {
  enumerable: true,
  get: function get() {
    return _valueFromAST.valueFromAST;
  }
});

var _astFromValue = __webpack_require__(36);

Object.defineProperty(exports, 'astFromValue', {
  enumerable: true,
  get: function get() {
    return _astFromValue.astFromValue;
  }
});

var _TypeInfo = __webpack_require__(61);

Object.defineProperty(exports, 'TypeInfo', {
  enumerable: true,
  get: function get() {
    return _TypeInfo.TypeInfo;
  }
});

var _isValidJSValue = __webpack_require__(59);

Object.defineProperty(exports, 'isValidJSValue', {
  enumerable: true,
  get: function get() {
    return _isValidJSValue.isValidJSValue;
  }
});

var _isValidLiteralValue = __webpack_require__(60);

Object.defineProperty(exports, 'isValidLiteralValue', {
  enumerable: true,
  get: function get() {
    return _isValidLiteralValue.isValidLiteralValue;
  }
});

var _concatAST = __webpack_require__(109);

Object.defineProperty(exports, 'concatAST', {
  enumerable: true,
  get: function get() {
    return _concatAST.concatAST;
  }
});

var _separateOperations = __webpack_require__(110);

Object.defineProperty(exports, 'separateOperations', {
  enumerable: true,
  get: function get() {
    return _separateOperations.separateOperations;
  }
});

var _typeComparators = __webpack_require__(57);

Object.defineProperty(exports, 'isEqualType', {
  enumerable: true,
  get: function get() {
    return _typeComparators.isEqualType;
  }
});
Object.defineProperty(exports, 'isTypeSubTypeOf', {
  enumerable: true,
  get: function get() {
    return _typeComparators.isTypeSubTypeOf;
  }
});
Object.defineProperty(exports, 'doTypesOverlap', {
  enumerable: true,
  get: function get() {
    return _typeComparators.doTypesOverlap;
  }
});

var _assertValidName = __webpack_require__(34);

Object.defineProperty(exports, 'assertValidName', {
  enumerable: true,
  get: function get() {
    return _assertValidName.assertValidName;
  }
});

var _findBreakingChanges = __webpack_require__(111);

Object.defineProperty(exports, 'BreakingChangeType', {
  enumerable: true,
  get: function get() {
    return _findBreakingChanges.BreakingChangeType;
  }
});
Object.defineProperty(exports, 'DangerousChangeType', {
  enumerable: true,
  get: function get() {
    return _findBreakingChanges.DangerousChangeType;
  }
});
Object.defineProperty(exports, 'findBreakingChanges', {
  enumerable: true,
  get: function get() {
    return _findBreakingChanges.findBreakingChanges;
  }
});
Object.defineProperty(exports, 'findDangerousChanges', {
  enumerable: true,
  get: function get() {
    return _findBreakingChanges.findDangerousChanges;
  }
});

var _findDeprecatedUsages = __webpack_require__(112);

Object.defineProperty(exports, 'findDeprecatedUsages', {
  enumerable: true,
  get: function get() {
    return _findDeprecatedUsages.findDeprecatedUsages;
  }
});

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parse = parse;
exports.parseValue = parseValue;
exports.parseType = parseType;
exports.parseConstValue = parseConstValue;
exports.parseTypeReference = parseTypeReference;
exports.parseNamedType = parseNamedType;

var _source = __webpack_require__(102);

var _error = __webpack_require__(35);

var _lexer = __webpack_require__(56);

var _kinds = __webpack_require__(10);

/**
 * Given a GraphQL source, parses it into a Document.
 * Throws GraphQLError if a syntax error is encountered.
 */


/**
 * Configuration options to control parser behavior
 */

/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

function parse(source, options) {
  var sourceObj = typeof source === 'string' ? new _source.Source(source) : source;
  if (!(sourceObj instanceof _source.Source)) {
    throw new TypeError('Must provide Source. Received: ' + String(sourceObj));
  }
  var lexer = (0, _lexer.createLexer)(sourceObj, options || {});
  return parseDocument(lexer);
}

/**
 * Given a string containing a GraphQL value (ex. `[42]`), parse the AST for
 * that value.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Values directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: valueFromAST().
 */
function parseValue(source, options) {
  var sourceObj = typeof source === 'string' ? new _source.Source(source) : source;
  var lexer = (0, _lexer.createLexer)(sourceObj, options || {});
  expect(lexer, _lexer.TokenKind.SOF);
  var value = parseValueLiteral(lexer, false);
  expect(lexer, _lexer.TokenKind.EOF);
  return value;
}

/**
 * Given a string containing a GraphQL Type (ex. `[Int!]`), parse the AST for
 * that type.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Types directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: typeFromAST().
 */
function parseType(source, options) {
  var sourceObj = typeof source === 'string' ? new _source.Source(source) : source;
  var lexer = (0, _lexer.createLexer)(sourceObj, options || {});
  expect(lexer, _lexer.TokenKind.SOF);
  var type = parseTypeReference(lexer);
  expect(lexer, _lexer.TokenKind.EOF);
  return type;
}

/**
 * Converts a name lex token into a name parse node.
 */
function parseName(lexer) {
  var token = expect(lexer, _lexer.TokenKind.NAME);
  return {
    kind: _kinds.NAME,
    value: token.value,
    loc: loc(lexer, token)
  };
}

// Implements the parsing rules in the Document section.

/**
 * Document : Definition+
 */
function parseDocument(lexer) {
  var start = lexer.token;
  expect(lexer, _lexer.TokenKind.SOF);
  var definitions = [];
  do {
    definitions.push(parseDefinition(lexer));
  } while (!skip(lexer, _lexer.TokenKind.EOF));

  return {
    kind: _kinds.DOCUMENT,
    definitions: definitions,
    loc: loc(lexer, start)
  };
}

/**
 * Definition :
 *   - OperationDefinition
 *   - FragmentDefinition
 *   - TypeSystemDefinition
 */
function parseDefinition(lexer) {
  if (peek(lexer, _lexer.TokenKind.BRACE_L)) {
    return parseOperationDefinition(lexer);
  }

  if (peek(lexer, _lexer.TokenKind.NAME)) {
    switch (lexer.token.value) {
      // Note: subscription is an experimental non-spec addition.
      case 'query':
      case 'mutation':
      case 'subscription':
        return parseOperationDefinition(lexer);

      case 'fragment':
        return parseFragmentDefinition(lexer);

      // Note: the Type System IDL is an experimental non-spec addition.
      case 'schema':
      case 'scalar':
      case 'type':
      case 'interface':
      case 'union':
      case 'enum':
      case 'input':
      case 'extend':
      case 'directive':
        return parseTypeSystemDefinition(lexer);
    }
  }

  throw unexpected(lexer);
}

// Implements the parsing rules in the Operations section.

/**
 * OperationDefinition :
 *  - SelectionSet
 *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
 */
function parseOperationDefinition(lexer) {
  var start = lexer.token;
  if (peek(lexer, _lexer.TokenKind.BRACE_L)) {
    return {
      kind: _kinds.OPERATION_DEFINITION,
      operation: 'query',
      name: null,
      variableDefinitions: null,
      directives: [],
      selectionSet: parseSelectionSet(lexer),
      loc: loc(lexer, start)
    };
  }
  var operation = parseOperationType(lexer);
  var name = void 0;
  if (peek(lexer, _lexer.TokenKind.NAME)) {
    name = parseName(lexer);
  }
  return {
    kind: _kinds.OPERATION_DEFINITION,
    operation: operation,
    name: name,
    variableDefinitions: parseVariableDefinitions(lexer),
    directives: parseDirectives(lexer),
    selectionSet: parseSelectionSet(lexer),
    loc: loc(lexer, start)
  };
}

/**
 * OperationType : one of query mutation subscription
 */
function parseOperationType(lexer) {
  var operationToken = expect(lexer, _lexer.TokenKind.NAME);
  switch (operationToken.value) {
    case 'query':
      return 'query';
    case 'mutation':
      return 'mutation';
    // Note: subscription is an experimental non-spec addition.
    case 'subscription':
      return 'subscription';
  }

  throw unexpected(lexer, operationToken);
}

/**
 * VariableDefinitions : ( VariableDefinition+ )
 */
function parseVariableDefinitions(lexer) {
  return peek(lexer, _lexer.TokenKind.PAREN_L) ? many(lexer, _lexer.TokenKind.PAREN_L, parseVariableDefinition, _lexer.TokenKind.PAREN_R) : [];
}

/**
 * VariableDefinition : Variable : Type DefaultValue?
 */
function parseVariableDefinition(lexer) {
  var start = lexer.token;
  return {
    kind: _kinds.VARIABLE_DEFINITION,
    variable: parseVariable(lexer),
    type: (expect(lexer, _lexer.TokenKind.COLON), parseTypeReference(lexer)),
    defaultValue: skip(lexer, _lexer.TokenKind.EQUALS) ? parseValueLiteral(lexer, true) : null,
    loc: loc(lexer, start)
  };
}

/**
 * Variable : $ Name
 */
function parseVariable(lexer) {
  var start = lexer.token;
  expect(lexer, _lexer.TokenKind.DOLLAR);
  return {
    kind: _kinds.VARIABLE,
    name: parseName(lexer),
    loc: loc(lexer, start)
  };
}

/**
 * SelectionSet : { Selection+ }
 */
function parseSelectionSet(lexer) {
  var start = lexer.token;
  return {
    kind: _kinds.SELECTION_SET,
    selections: many(lexer, _lexer.TokenKind.BRACE_L, parseSelection, _lexer.TokenKind.BRACE_R),
    loc: loc(lexer, start)
  };
}

/**
 * Selection :
 *   - Field
 *   - FragmentSpread
 *   - InlineFragment
 */
function parseSelection(lexer) {
  return peek(lexer, _lexer.TokenKind.SPREAD) ? parseFragment(lexer) : parseField(lexer);
}

/**
 * Field : Alias? Name Arguments? Directives? SelectionSet?
 *
 * Alias : Name :
 */
function parseField(lexer) {
  var start = lexer.token;

  var nameOrAlias = parseName(lexer);
  var alias = void 0;
  var name = void 0;
  if (skip(lexer, _lexer.TokenKind.COLON)) {
    alias = nameOrAlias;
    name = parseName(lexer);
  } else {
    alias = null;
    name = nameOrAlias;
  }

  return {
    kind: _kinds.FIELD,
    alias: alias,
    name: name,
    arguments: parseArguments(lexer),
    directives: parseDirectives(lexer),
    selectionSet: peek(lexer, _lexer.TokenKind.BRACE_L) ? parseSelectionSet(lexer) : null,
    loc: loc(lexer, start)
  };
}

/**
 * Arguments : ( Argument+ )
 */
function parseArguments(lexer) {
  return peek(lexer, _lexer.TokenKind.PAREN_L) ? many(lexer, _lexer.TokenKind.PAREN_L, parseArgument, _lexer.TokenKind.PAREN_R) : [];
}

/**
 * Argument : Name : Value
 */
function parseArgument(lexer) {
  var start = lexer.token;
  return {
    kind: _kinds.ARGUMENT,
    name: parseName(lexer),
    value: (expect(lexer, _lexer.TokenKind.COLON), parseValueLiteral(lexer, false)),
    loc: loc(lexer, start)
  };
}

// Implements the parsing rules in the Fragments section.

/**
 * Corresponds to both FragmentSpread and InlineFragment in the spec.
 *
 * FragmentSpread : ... FragmentName Directives?
 *
 * InlineFragment : ... TypeCondition? Directives? SelectionSet
 */
function parseFragment(lexer) {
  var start = lexer.token;
  expect(lexer, _lexer.TokenKind.SPREAD);
  if (peek(lexer, _lexer.TokenKind.NAME) && lexer.token.value !== 'on') {
    return {
      kind: _kinds.FRAGMENT_SPREAD,
      name: parseFragmentName(lexer),
      directives: parseDirectives(lexer),
      loc: loc(lexer, start)
    };
  }
  var typeCondition = null;
  if (lexer.token.value === 'on') {
    lexer.advance();
    typeCondition = parseNamedType(lexer);
  }
  return {
    kind: _kinds.INLINE_FRAGMENT,
    typeCondition: typeCondition,
    directives: parseDirectives(lexer),
    selectionSet: parseSelectionSet(lexer),
    loc: loc(lexer, start)
  };
}

/**
 * FragmentDefinition :
 *   - fragment FragmentName on TypeCondition Directives? SelectionSet
 *
 * TypeCondition : NamedType
 */
function parseFragmentDefinition(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'fragment');
  return {
    kind: _kinds.FRAGMENT_DEFINITION,
    name: parseFragmentName(lexer),
    typeCondition: (expectKeyword(lexer, 'on'), parseNamedType(lexer)),
    directives: parseDirectives(lexer),
    selectionSet: parseSelectionSet(lexer),
    loc: loc(lexer, start)
  };
}

/**
 * FragmentName : Name but not `on`
 */
function parseFragmentName(lexer) {
  if (lexer.token.value === 'on') {
    throw unexpected(lexer);
  }
  return parseName(lexer);
}

// Implements the parsing rules in the Values section.

/**
 * Value[Const] :
 *   - [~Const] Variable
 *   - IntValue
 *   - FloatValue
 *   - StringValue
 *   - BooleanValue
 *   - NullValue
 *   - EnumValue
 *   - ListValue[?Const]
 *   - ObjectValue[?Const]
 *
 * BooleanValue : one of `true` `false`
 *
 * NullValue : `null`
 *
 * EnumValue : Name but not `true`, `false` or `null`
 */
function parseValueLiteral(lexer, isConst) {
  var token = lexer.token;
  switch (token.kind) {
    case _lexer.TokenKind.BRACKET_L:
      return parseList(lexer, isConst);
    case _lexer.TokenKind.BRACE_L:
      return parseObject(lexer, isConst);
    case _lexer.TokenKind.INT:
      lexer.advance();
      return {
        kind: _kinds.INT,
        value: token.value,
        loc: loc(lexer, token)
      };
    case _lexer.TokenKind.FLOAT:
      lexer.advance();
      return {
        kind: _kinds.FLOAT,
        value: token.value,
        loc: loc(lexer, token)
      };
    case _lexer.TokenKind.STRING:
      lexer.advance();
      return {
        kind: _kinds.STRING,
        value: token.value,
        loc: loc(lexer, token)
      };
    case _lexer.TokenKind.NAME:
      if (token.value === 'true' || token.value === 'false') {
        lexer.advance();
        return {
          kind: _kinds.BOOLEAN,
          value: token.value === 'true',
          loc: loc(lexer, token)
        };
      } else if (token.value === 'null') {
        lexer.advance();
        return {
          kind: _kinds.NULL,
          loc: loc(lexer, token)
        };
      }
      lexer.advance();
      return {
        kind: _kinds.ENUM,
        value: token.value,
        loc: loc(lexer, token)
      };
    case _lexer.TokenKind.DOLLAR:
      if (!isConst) {
        return parseVariable(lexer);
      }
      break;
  }
  throw unexpected(lexer);
}

function parseConstValue(lexer) {
  return parseValueLiteral(lexer, true);
}

function parseValueValue(lexer) {
  return parseValueLiteral(lexer, false);
}

/**
 * ListValue[Const] :
 *   - [ ]
 *   - [ Value[?Const]+ ]
 */
function parseList(lexer, isConst) {
  var start = lexer.token;
  var item = isConst ? parseConstValue : parseValueValue;
  return {
    kind: _kinds.LIST,
    values: any(lexer, _lexer.TokenKind.BRACKET_L, item, _lexer.TokenKind.BRACKET_R),
    loc: loc(lexer, start)
  };
}

/**
 * ObjectValue[Const] :
 *   - { }
 *   - { ObjectField[?Const]+ }
 */
function parseObject(lexer, isConst) {
  var start = lexer.token;
  expect(lexer, _lexer.TokenKind.BRACE_L);
  var fields = [];
  while (!skip(lexer, _lexer.TokenKind.BRACE_R)) {
    fields.push(parseObjectField(lexer, isConst));
  }
  return {
    kind: _kinds.OBJECT,
    fields: fields,
    loc: loc(lexer, start)
  };
}

/**
 * ObjectField[Const] : Name : Value[?Const]
 */
function parseObjectField(lexer, isConst) {
  var start = lexer.token;
  return {
    kind: _kinds.OBJECT_FIELD,
    name: parseName(lexer),
    value: (expect(lexer, _lexer.TokenKind.COLON), parseValueLiteral(lexer, isConst)),
    loc: loc(lexer, start)
  };
}

// Implements the parsing rules in the Directives section.

/**
 * Directives : Directive+
 */
function parseDirectives(lexer) {
  var directives = [];
  while (peek(lexer, _lexer.TokenKind.AT)) {
    directives.push(parseDirective(lexer));
  }
  return directives;
}

/**
 * Directive : @ Name Arguments?
 */
function parseDirective(lexer) {
  var start = lexer.token;
  expect(lexer, _lexer.TokenKind.AT);
  return {
    kind: _kinds.DIRECTIVE,
    name: parseName(lexer),
    arguments: parseArguments(lexer),
    loc: loc(lexer, start)
  };
}

// Implements the parsing rules in the Types section.

/**
 * Type :
 *   - NamedType
 *   - ListType
 *   - NonNullType
 */
function parseTypeReference(lexer) {
  var start = lexer.token;
  var type = void 0;
  if (skip(lexer, _lexer.TokenKind.BRACKET_L)) {
    type = parseTypeReference(lexer);
    expect(lexer, _lexer.TokenKind.BRACKET_R);
    type = {
      kind: _kinds.LIST_TYPE,
      type: type,
      loc: loc(lexer, start)
    };
  } else {
    type = parseNamedType(lexer);
  }
  if (skip(lexer, _lexer.TokenKind.BANG)) {
    return {
      kind: _kinds.NON_NULL_TYPE,
      type: type,
      loc: loc(lexer, start)
    };
  }
  return type;
}

/**
 * NamedType : Name
 */
function parseNamedType(lexer) {
  var start = lexer.token;
  return {
    kind: _kinds.NAMED_TYPE,
    name: parseName(lexer),
    loc: loc(lexer, start)
  };
}

// Implements the parsing rules in the Type Definition section.

/**
 * TypeSystemDefinition :
 *   - SchemaDefinition
 *   - TypeDefinition
 *   - TypeExtensionDefinition
 *   - DirectiveDefinition
 *
 * TypeDefinition :
 *   - ScalarTypeDefinition
 *   - ObjectTypeDefinition
 *   - InterfaceTypeDefinition
 *   - UnionTypeDefinition
 *   - EnumTypeDefinition
 *   - InputObjectTypeDefinition
 */
function parseTypeSystemDefinition(lexer) {
  if (peek(lexer, _lexer.TokenKind.NAME)) {
    switch (lexer.token.value) {
      case 'schema':
        return parseSchemaDefinition(lexer);
      case 'scalar':
        return parseScalarTypeDefinition(lexer);
      case 'type':
        return parseObjectTypeDefinition(lexer);
      case 'interface':
        return parseInterfaceTypeDefinition(lexer);
      case 'union':
        return parseUnionTypeDefinition(lexer);
      case 'enum':
        return parseEnumTypeDefinition(lexer);
      case 'input':
        return parseInputObjectTypeDefinition(lexer);
      case 'extend':
        return parseTypeExtensionDefinition(lexer);
      case 'directive':
        return parseDirectiveDefinition(lexer);
    }
  }

  throw unexpected(lexer);
}

/**
 * SchemaDefinition : schema Directives? { OperationTypeDefinition+ }
 *
 * OperationTypeDefinition : OperationType : NamedType
 */
function parseSchemaDefinition(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'schema');
  var directives = parseDirectives(lexer);
  var operationTypes = many(lexer, _lexer.TokenKind.BRACE_L, parseOperationTypeDefinition, _lexer.TokenKind.BRACE_R);
  return {
    kind: _kinds.SCHEMA_DEFINITION,
    directives: directives,
    operationTypes: operationTypes,
    loc: loc(lexer, start)
  };
}

function parseOperationTypeDefinition(lexer) {
  var start = lexer.token;
  var operation = parseOperationType(lexer);
  expect(lexer, _lexer.TokenKind.COLON);
  var type = parseNamedType(lexer);
  return {
    kind: _kinds.OPERATION_TYPE_DEFINITION,
    operation: operation,
    type: type,
    loc: loc(lexer, start)
  };
}

/**
 * ScalarTypeDefinition : scalar Name Directives?
 */
function parseScalarTypeDefinition(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'scalar');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer);
  return {
    kind: _kinds.SCALAR_TYPE_DEFINITION,
    name: name,
    directives: directives,
    loc: loc(lexer, start)
  };
}

/**
 * ObjectTypeDefinition :
 *   - type Name ImplementsInterfaces? Directives? { FieldDefinition+ }
 */
function parseObjectTypeDefinition(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'type');
  var name = parseName(lexer);
  var interfaces = parseImplementsInterfaces(lexer);
  var directives = parseDirectives(lexer);
  var fields = any(lexer, _lexer.TokenKind.BRACE_L, parseFieldDefinition, _lexer.TokenKind.BRACE_R);
  return {
    kind: _kinds.OBJECT_TYPE_DEFINITION,
    name: name,
    interfaces: interfaces,
    directives: directives,
    fields: fields,
    loc: loc(lexer, start)
  };
}

/**
 * ImplementsInterfaces : implements NamedType+
 */
function parseImplementsInterfaces(lexer) {
  var types = [];
  if (lexer.token.value === 'implements') {
    lexer.advance();
    do {
      types.push(parseNamedType(lexer));
    } while (peek(lexer, _lexer.TokenKind.NAME));
  }
  return types;
}

/**
 * FieldDefinition : Name ArgumentsDefinition? : Type Directives?
 */
function parseFieldDefinition(lexer) {
  var start = lexer.token;
  var name = parseName(lexer);
  var args = parseArgumentDefs(lexer);
  expect(lexer, _lexer.TokenKind.COLON);
  var type = parseTypeReference(lexer);
  var directives = parseDirectives(lexer);
  return {
    kind: _kinds.FIELD_DEFINITION,
    name: name,
    arguments: args,
    type: type,
    directives: directives,
    loc: loc(lexer, start)
  };
}

/**
 * ArgumentsDefinition : ( InputValueDefinition+ )
 */
function parseArgumentDefs(lexer) {
  if (!peek(lexer, _lexer.TokenKind.PAREN_L)) {
    return [];
  }
  return many(lexer, _lexer.TokenKind.PAREN_L, parseInputValueDef, _lexer.TokenKind.PAREN_R);
}

/**
 * InputValueDefinition : Name : Type DefaultValue? Directives?
 */
function parseInputValueDef(lexer) {
  var start = lexer.token;
  var name = parseName(lexer);
  expect(lexer, _lexer.TokenKind.COLON);
  var type = parseTypeReference(lexer);
  var defaultValue = null;
  if (skip(lexer, _lexer.TokenKind.EQUALS)) {
    defaultValue = parseConstValue(lexer);
  }
  var directives = parseDirectives(lexer);
  return {
    kind: _kinds.INPUT_VALUE_DEFINITION,
    name: name,
    type: type,
    defaultValue: defaultValue,
    directives: directives,
    loc: loc(lexer, start)
  };
}

/**
 * InterfaceTypeDefinition : interface Name Directives? { FieldDefinition+ }
 */
function parseInterfaceTypeDefinition(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'interface');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer);
  var fields = any(lexer, _lexer.TokenKind.BRACE_L, parseFieldDefinition, _lexer.TokenKind.BRACE_R);
  return {
    kind: _kinds.INTERFACE_TYPE_DEFINITION,
    name: name,
    directives: directives,
    fields: fields,
    loc: loc(lexer, start)
  };
}

/**
 * UnionTypeDefinition : union Name Directives? = UnionMembers
 */
function parseUnionTypeDefinition(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'union');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer);
  expect(lexer, _lexer.TokenKind.EQUALS);
  var types = parseUnionMembers(lexer);
  return {
    kind: _kinds.UNION_TYPE_DEFINITION,
    name: name,
    directives: directives,
    types: types,
    loc: loc(lexer, start)
  };
}

/**
 * UnionMembers :
 *   - `|`? NamedType
 *   - UnionMembers | NamedType
 */
function parseUnionMembers(lexer) {
  // Optional leading pipe
  skip(lexer, _lexer.TokenKind.PIPE);
  var members = [];
  do {
    members.push(parseNamedType(lexer));
  } while (skip(lexer, _lexer.TokenKind.PIPE));
  return members;
}

/**
 * EnumTypeDefinition : enum Name Directives? { EnumValueDefinition+ }
 */
function parseEnumTypeDefinition(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'enum');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer);
  var values = many(lexer, _lexer.TokenKind.BRACE_L, parseEnumValueDefinition, _lexer.TokenKind.BRACE_R);
  return {
    kind: _kinds.ENUM_TYPE_DEFINITION,
    name: name,
    directives: directives,
    values: values,
    loc: loc(lexer, start)
  };
}

/**
 * EnumValueDefinition : EnumValue Directives?
 *
 * EnumValue : Name
 */
function parseEnumValueDefinition(lexer) {
  var start = lexer.token;
  var name = parseName(lexer);
  var directives = parseDirectives(lexer);
  return {
    kind: _kinds.ENUM_VALUE_DEFINITION,
    name: name,
    directives: directives,
    loc: loc(lexer, start)
  };
}

/**
 * InputObjectTypeDefinition : input Name Directives? { InputValueDefinition+ }
 */
function parseInputObjectTypeDefinition(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'input');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer);
  var fields = any(lexer, _lexer.TokenKind.BRACE_L, parseInputValueDef, _lexer.TokenKind.BRACE_R);
  return {
    kind: _kinds.INPUT_OBJECT_TYPE_DEFINITION,
    name: name,
    directives: directives,
    fields: fields,
    loc: loc(lexer, start)
  };
}

/**
 * TypeExtensionDefinition : extend ObjectTypeDefinition
 */
function parseTypeExtensionDefinition(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'extend');
  var definition = parseObjectTypeDefinition(lexer);
  return {
    kind: _kinds.TYPE_EXTENSION_DEFINITION,
    definition: definition,
    loc: loc(lexer, start)
  };
}

/**
 * DirectiveDefinition :
 *   - directive @ Name ArgumentsDefinition? on DirectiveLocations
 */
function parseDirectiveDefinition(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'directive');
  expect(lexer, _lexer.TokenKind.AT);
  var name = parseName(lexer);
  var args = parseArgumentDefs(lexer);
  expectKeyword(lexer, 'on');
  var locations = parseDirectiveLocations(lexer);
  return {
    kind: _kinds.DIRECTIVE_DEFINITION,
    name: name,
    arguments: args,
    locations: locations,
    loc: loc(lexer, start)
  };
}

/**
 * DirectiveLocations :
 *   - `|`? Name
 *   - DirectiveLocations | Name
 */
function parseDirectiveLocations(lexer) {
  // Optional leading pipe
  skip(lexer, _lexer.TokenKind.PIPE);
  var locations = [];
  do {
    locations.push(parseName(lexer));
  } while (skip(lexer, _lexer.TokenKind.PIPE));
  return locations;
}

// Core parsing utility functions

/**
 * Returns a location object, used to identify the place in
 * the source that created a given parsed object.
 */
function loc(lexer, startToken) {
  if (!lexer.options.noLocation) {
    return new Loc(startToken, lexer.lastToken, lexer.source);
  }
}

function Loc(startToken, endToken, source) {
  this.start = startToken.start;
  this.end = endToken.end;
  this.startToken = startToken;
  this.endToken = endToken;
  this.source = source;
}

// Print a simplified form when appearing in JSON/util.inspect.
Loc.prototype.toJSON = Loc.prototype.inspect = function toJSON() {
  return { start: this.start, end: this.end };
};

/**
 * Determines if the next token is of a given kind
 */
function peek(lexer, kind) {
  return lexer.token.kind === kind;
}

/**
 * If the next token is of the given kind, return true after advancing
 * the lexer. Otherwise, do not change the parser state and return false.
 */
function skip(lexer, kind) {
  var match = lexer.token.kind === kind;
  if (match) {
    lexer.advance();
  }
  return match;
}

/**
 * If the next token is of the given kind, return that token after advancing
 * the lexer. Otherwise, do not change the parser state and throw an error.
 */
function expect(lexer, kind) {
  var token = lexer.token;
  if (token.kind === kind) {
    lexer.advance();
    return token;
  }
  throw (0, _error.syntaxError)(lexer.source, token.start, 'Expected ' + kind + ', found ' + (0, _lexer.getTokenDesc)(token));
}

/**
 * If the next token is a keyword with the given value, return that token after
 * advancing the lexer. Otherwise, do not change the parser state and return
 * false.
 */
function expectKeyword(lexer, value) {
  var token = lexer.token;
  if (token.kind === _lexer.TokenKind.NAME && token.value === value) {
    lexer.advance();
    return token;
  }
  throw (0, _error.syntaxError)(lexer.source, token.start, 'Expected "' + value + '", found ' + (0, _lexer.getTokenDesc)(token));
}

/**
 * Helper function for creating an error when an unexpected lexed token
 * is encountered.
 */
function unexpected(lexer, atToken) {
  var token = atToken || lexer.token;
  return (0, _error.syntaxError)(lexer.source, token.start, 'Unexpected ' + (0, _lexer.getTokenDesc)(token));
}

/**
 * Returns a possibly empty list of parse nodes, determined by
 * the parseFn. This list begins with a lex token of openKind
 * and ends with a lex token of closeKind. Advances the parser
 * to the next lex token after the closing token.
 */
function any(lexer, openKind, parseFn, closeKind) {
  expect(lexer, openKind);
  var nodes = [];
  while (!skip(lexer, closeKind)) {
    nodes.push(parseFn(lexer));
  }
  return nodes;
}

/**
 * Returns a non-empty list of parse nodes, determined by
 * the parseFn. This list begins with a lex token of openKind
 * and ends with a lex token of closeKind. Advances the parser
 * to the next lex token after the closing token.
 */
function many(lexer, openKind, parseFn, closeKind) {
  expect(lexer, openKind);
  var nodes = [parseFn(lexer)];
  while (!skip(lexer, closeKind)) {
    nodes.push(parseFn(lexer));
  }
  return nodes;
}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLocation = getLocation;


/**
 * Takes a Source and a UTF-8 character offset, and returns the corresponding
 * line and column as a SourceLocation.
 */

/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

function getLocation(source, position) {
  var lineRegexp = /\r\n|[\n\r]/g;
  var line = 1;
  var column = position + 1;
  var match = void 0;
  while ((match = lineRegexp.exec(source.body)) && match.index < position) {
    line += 1;
    column = position + 1 - (match.index + match[0].length);
  }
  return { line: line, column: column };
}

/**
 * Represents a location in a Source.
 */

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TokenKind = undefined;
exports.createLexer = createLexer;
exports.getTokenDesc = getTokenDesc;

var _error = __webpack_require__(35);

/**
 * Given a Source object, this returns a Lexer for that source.
 * A Lexer is a stateful stream generator in that every time
 * it is advanced, it returns the next token in the Source. Assuming the
 * source lexes, the final Token emitted by the lexer will be of kind
 * EOF, after which the lexer will repeatedly return the same EOF token
 * whenever called.
 */
function createLexer(source, options) {
  var startOfFileToken = new Tok(SOF, 0, 0, 0, 0, null);
  var lexer = {
    source: source,
    options: options,
    lastToken: startOfFileToken,
    token: startOfFileToken,
    line: 1,
    lineStart: 0,
    advance: advanceLexer
  };
  return lexer;
} /*  /
  /**
   *  Copyright (c) 2015, Facebook, Inc.
   *  All rights reserved.
   *
   *  This source code is licensed under the BSD-style license found in the
   *  LICENSE file in the root directory of this source tree. An additional grant
   *  of patent rights can be found in the PATENTS file in the same directory.
   */

function advanceLexer() {
  var token = this.lastToken = this.token;
  if (token.kind !== EOF) {
    do {
      token = token.next = readToken(this, token);
    } while (token.kind === COMMENT);
    this.token = token;
  }
  return token;
}

/**
 * The return type of createLexer.
 */


// Each kind of token.
var SOF = '<SOF>';
var EOF = '<EOF>';
var BANG = '!';
var DOLLAR = '$';
var PAREN_L = '(';
var PAREN_R = ')';
var SPREAD = '...';
var COLON = ':';
var EQUALS = '=';
var AT = '@';
var BRACKET_L = '[';
var BRACKET_R = ']';
var BRACE_L = '{';
var PIPE = '|';
var BRACE_R = '}';
var NAME = 'Name';
var INT = 'Int';
var FLOAT = 'Float';
var STRING = 'String';
var COMMENT = 'Comment';

/**
 * An exported enum describing the different kinds of tokens that the
 * lexer emits.
 */
var TokenKind = exports.TokenKind = {
  SOF: SOF,
  EOF: EOF,
  BANG: BANG,
  DOLLAR: DOLLAR,
  PAREN_L: PAREN_L,
  PAREN_R: PAREN_R,
  SPREAD: SPREAD,
  COLON: COLON,
  EQUALS: EQUALS,
  AT: AT,
  BRACKET_L: BRACKET_L,
  BRACKET_R: BRACKET_R,
  BRACE_L: BRACE_L,
  PIPE: PIPE,
  BRACE_R: BRACE_R,
  NAME: NAME,
  INT: INT,
  FLOAT: FLOAT,
  STRING: STRING,
  COMMENT: COMMENT
};

/**
 * A helper function to describe a token as a string for debugging
 */
function getTokenDesc(token) {
  var value = token.value;
  return value ? token.kind + ' "' + value + '"' : token.kind;
}

var charCodeAt = String.prototype.charCodeAt;
var slice = String.prototype.slice;

/**
 * Helper function for constructing the Token object.
 */
function Tok(kind, start, end, line, column, prev, value) {
  this.kind = kind;
  this.start = start;
  this.end = end;
  this.line = line;
  this.column = column;
  this.value = value;
  this.prev = prev;
  this.next = null;
}

// Print a simplified form when appearing in JSON/util.inspect.
Tok.prototype.toJSON = Tok.prototype.inspect = function toJSON() {
  return {
    kind: this.kind,
    value: this.value,
    line: this.line,
    column: this.column
  };
};

function printCharCode(code) {
  return (
    // NaN/undefined represents access beyond the end of the file.
    isNaN(code) ? EOF :
    // Trust JSON for ASCII.
    code < 0x007F ? JSON.stringify(String.fromCharCode(code)) :
    // Otherwise print the escaped form.
    '"\\u' + ('00' + code.toString(16).toUpperCase()).slice(-4) + '"'
  );
}

/**
 * Gets the next token from the source starting at the given position.
 *
 * This skips over whitespace and comments until it finds the next lexable
 * token, then lexes punctuators immediately or calls the appropriate helper
 * function for more complicated tokens.
 */
function readToken(lexer, prev) {
  var source = lexer.source;
  var body = source.body;
  var bodyLength = body.length;

  var position = positionAfterWhitespace(body, prev.end, lexer);
  var line = lexer.line;
  var col = 1 + position - lexer.lineStart;

  if (position >= bodyLength) {
    return new Tok(EOF, bodyLength, bodyLength, line, col, prev);
  }

  var code = charCodeAt.call(body, position);

  // SourceCharacter
  if (code < 0x0020 && code !== 0x0009 && code !== 0x000A && code !== 0x000D) {
    throw (0, _error.syntaxError)(source, position, 'Cannot contain the invalid character ' + printCharCode(code) + '.');
  }

  switch (code) {
    // !
    case 33:
      return new Tok(BANG, position, position + 1, line, col, prev);
    // #
    case 35:
      return readComment(source, position, line, col, prev);
    // $
    case 36:
      return new Tok(DOLLAR, position, position + 1, line, col, prev);
    // (
    case 40:
      return new Tok(PAREN_L, position, position + 1, line, col, prev);
    // )
    case 41:
      return new Tok(PAREN_R, position, position + 1, line, col, prev);
    // .
    case 46:
      if (charCodeAt.call(body, position + 1) === 46 && charCodeAt.call(body, position + 2) === 46) {
        return new Tok(SPREAD, position, position + 3, line, col, prev);
      }
      break;
    // :
    case 58:
      return new Tok(COLON, position, position + 1, line, col, prev);
    // =
    case 61:
      return new Tok(EQUALS, position, position + 1, line, col, prev);
    // @
    case 64:
      return new Tok(AT, position, position + 1, line, col, prev);
    // [
    case 91:
      return new Tok(BRACKET_L, position, position + 1, line, col, prev);
    // ]
    case 93:
      return new Tok(BRACKET_R, position, position + 1, line, col, prev);
    // {
    case 123:
      return new Tok(BRACE_L, position, position + 1, line, col, prev);
    // |
    case 124:
      return new Tok(PIPE, position, position + 1, line, col, prev);
    // }
    case 125:
      return new Tok(BRACE_R, position, position + 1, line, col, prev);
    // A-Z _ a-z
    case 65:case 66:case 67:case 68:case 69:case 70:case 71:case 72:
    case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 80:
    case 81:case 82:case 83:case 84:case 85:case 86:case 87:case 88:
    case 89:case 90:
    case 95:
    case 97:case 98:case 99:case 100:case 101:case 102:case 103:case 104:
    case 105:case 106:case 107:case 108:case 109:case 110:case 111:
    case 112:case 113:case 114:case 115:case 116:case 117:case 118:
    case 119:case 120:case 121:case 122:
      return readName(source, position, line, col, prev);
    // - 0-9
    case 45:
    case 48:case 49:case 50:case 51:case 52:
    case 53:case 54:case 55:case 56:case 57:
      return readNumber(source, position, code, line, col, prev);
    // "
    case 34:
      return readString(source, position, line, col, prev);
  }

  throw (0, _error.syntaxError)(source, position, unexpectedCharacterMessage(code));
}

/**
 * Report a message that an unexpected character was encountered.
 */
function unexpectedCharacterMessage(code) {
  if (code === 39) {
    // '
    return 'Unexpected single quote character (\'), did you mean to use ' + 'a double quote (")?';
  }

  return 'Cannot parse the unexpected character ' + printCharCode(code) + '.';
}

/**
 * Reads from body starting at startPosition until it finds a non-whitespace
 * or commented character, then returns the position of that character for
 * lexing.
 */
function positionAfterWhitespace(body, startPosition, lexer) {
  var bodyLength = body.length;
  var position = startPosition;
  while (position < bodyLength) {
    var code = charCodeAt.call(body, position);
    // tab | space | comma | BOM
    if (code === 9 || code === 32 || code === 44 || code === 0xFEFF) {
      ++position;
    } else if (code === 10) {
      // new line
      ++position;
      ++lexer.line;
      lexer.lineStart = position;
    } else if (code === 13) {
      // carriage return
      if (charCodeAt.call(body, position + 1) === 10) {
        position += 2;
      } else {
        ++position;
      }
      ++lexer.line;
      lexer.lineStart = position;
    } else {
      break;
    }
  }
  return position;
}

/**
 * Reads a comment token from the source file.
 *
 * #[\u0009\u0020-\uFFFF]*
 */
function readComment(source, start, line, col, prev) {
  var body = source.body;
  var code = void 0;
  var position = start;

  do {
    code = charCodeAt.call(body, ++position);
  } while (code !== null && (
  // SourceCharacter but not LineTerminator
  code > 0x001F || code === 0x0009));

  return new Tok(COMMENT, start, position, line, col, prev, slice.call(body, start + 1, position));
}

/**
 * Reads a number token from the source file, either a float
 * or an int depending on whether a decimal point appears.
 *
 * Int:   -?(0|[1-9][0-9]*)
 * Float: -?(0|[1-9][0-9]*)(\.[0-9]+)?((E|e)(+|-)?[0-9]+)?
 */
function readNumber(source, start, firstCode, line, col, prev) {
  var body = source.body;
  var code = firstCode;
  var position = start;
  var isFloat = false;

  if (code === 45) {
    // -
    code = charCodeAt.call(body, ++position);
  }

  if (code === 48) {
    // 0
    code = charCodeAt.call(body, ++position);
    if (code >= 48 && code <= 57) {
      throw (0, _error.syntaxError)(source, position, 'Invalid number, unexpected digit after 0: ' + printCharCode(code) + '.');
    }
  } else {
    position = readDigits(source, position, code);
    code = charCodeAt.call(body, position);
  }

  if (code === 46) {
    // .
    isFloat = true;

    code = charCodeAt.call(body, ++position);
    position = readDigits(source, position, code);
    code = charCodeAt.call(body, position);
  }

  if (code === 69 || code === 101) {
    // E e
    isFloat = true;

    code = charCodeAt.call(body, ++position);
    if (code === 43 || code === 45) {
      // + -
      code = charCodeAt.call(body, ++position);
    }
    position = readDigits(source, position, code);
  }

  return new Tok(isFloat ? FLOAT : INT, start, position, line, col, prev, slice.call(body, start, position));
}

/**
 * Returns the new position in the source after reading digits.
 */
function readDigits(source, start, firstCode) {
  var body = source.body;
  var position = start;
  var code = firstCode;
  if (code >= 48 && code <= 57) {
    // 0 - 9
    do {
      code = charCodeAt.call(body, ++position);
    } while (code >= 48 && code <= 57); // 0 - 9
    return position;
  }
  throw (0, _error.syntaxError)(source, position, 'Invalid number, expected digit but got: ' + printCharCode(code) + '.');
}

/**
 * Reads a string token from the source file.
 *
 * "([^"\\\u000A\u000D]|(\\(u[0-9a-fA-F]{4}|["\\/bfnrt])))*"
 */
function readString(source, start, line, col, prev) {
  var body = source.body;
  var position = start + 1;
  var chunkStart = position;
  var code = 0;
  var value = '';

  while (position < body.length && (code = charCodeAt.call(body, position)) !== null &&
  // not LineTerminator
  code !== 0x000A && code !== 0x000D &&
  // not Quote (")
  code !== 34) {
    // SourceCharacter
    if (code < 0x0020 && code !== 0x0009) {
      throw (0, _error.syntaxError)(source, position, 'Invalid character within String: ' + printCharCode(code) + '.');
    }

    ++position;
    if (code === 92) {
      // \
      value += slice.call(body, chunkStart, position - 1);
      code = charCodeAt.call(body, position);
      switch (code) {
        case 34:
          value += '"';break;
        case 47:
          value += '/';break;
        case 92:
          value += '\\';break;
        case 98:
          value += '\b';break;
        case 102:
          value += '\f';break;
        case 110:
          value += '\n';break;
        case 114:
          value += '\r';break;
        case 116:
          value += '\t';break;
        case 117:
          // u
          var charCode = uniCharCode(charCodeAt.call(body, position + 1), charCodeAt.call(body, position + 2), charCodeAt.call(body, position + 3), charCodeAt.call(body, position + 4));
          if (charCode < 0) {
            throw (0, _error.syntaxError)(source, position, 'Invalid character escape sequence: ' + ('\\u' + body.slice(position + 1, position + 5) + '.'));
          }
          value += String.fromCharCode(charCode);
          position += 4;
          break;
        default:
          throw (0, _error.syntaxError)(source, position, 'Invalid character escape sequence: \\' + String.fromCharCode(code) + '.');
      }
      ++position;
      chunkStart = position;
    }
  }

  if (code !== 34) {
    // quote (")
    throw (0, _error.syntaxError)(source, position, 'Unterminated string.');
  }

  value += slice.call(body, chunkStart, position);
  return new Tok(STRING, start, position + 1, line, col, prev, value);
}

/**
 * Converts four hexidecimal chars to the integer that the
 * string represents. For example, uniCharCode('0','0','0','f')
 * will return 15, and uniCharCode('0','0','f','f') returns 255.
 *
 * Returns a negative number on error, if a char was invalid.
 *
 * This is implemented by noting that char2hex() returns -1 on error,
 * which means the result of ORing the char2hex() will also be negative.
 */
function uniCharCode(a, b, c, d) {
  return char2hex(a) << 12 | char2hex(b) << 8 | char2hex(c) << 4 | char2hex(d);
}

/**
 * Converts a hex character to its integer value.
 * '0' becomes 0, '9' becomes 9
 * 'A' becomes 10, 'F' becomes 15
 * 'a' becomes 10, 'f' becomes 15
 *
 * Returns -1 on error.
 */
function char2hex(a) {
  return a >= 48 && a <= 57 ? a - 48 : // 0-9
  a >= 65 && a <= 70 ? a - 55 : // A-F
  a >= 97 && a <= 102 ? a - 87 : // a-f
  -1;
}

/**
 * Reads an alphanumeric + underscore name from the source.
 *
 * [_A-Za-z][_0-9A-Za-z]*
 */
function readName(source, position, line, col, prev) {
  var body = source.body;
  var bodyLength = body.length;
  var end = position + 1;
  var code = 0;
  while (end !== bodyLength && (code = charCodeAt.call(body, end)) !== null && (code === 95 || // _
  code >= 48 && code <= 57 || // 0-9
  code >= 65 && code <= 90 || // A-Z
  code >= 97 && code <= 122 // a-z
  )) {
    ++end;
  }
  return new Tok(NAME, position, end, line, col, prev, slice.call(body, position, end));
}

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEqualType = isEqualType;
exports.isTypeSubTypeOf = isTypeSubTypeOf;
exports.doTypesOverlap = doTypesOverlap;

var _definition = __webpack_require__(2);

/**
 * Provided two types, return true if the types are equal (invariant).
 */
function isEqualType(typeA, typeB) {
  // Equivalent types are equal.
  if (typeA === typeB) {
    return true;
  }

  // If either type is non-null, the other must also be non-null.
  if (typeA instanceof _definition.GraphQLNonNull && typeB instanceof _definition.GraphQLNonNull) {
    return isEqualType(typeA.ofType, typeB.ofType);
  }

  // If either type is a list, the other must also be a list.
  if (typeA instanceof _definition.GraphQLList && typeB instanceof _definition.GraphQLList) {
    return isEqualType(typeA.ofType, typeB.ofType);
  }

  // Otherwise the types are not equal.
  return false;
}

/**
 * Provided a type and a super type, return true if the first type is either
 * equal or a subset of the second super type (covariant).
 */

/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

function isTypeSubTypeOf(schema, maybeSubType, superType) {
  // Equivalent type is a valid subtype
  if (maybeSubType === superType) {
    return true;
  }

  // If superType is non-null, maybeSubType must also be non-null.
  if (superType instanceof _definition.GraphQLNonNull) {
    if (maybeSubType instanceof _definition.GraphQLNonNull) {
      return isTypeSubTypeOf(schema, maybeSubType.ofType, superType.ofType);
    }
    return false;
  } else if (maybeSubType instanceof _definition.GraphQLNonNull) {
    // If superType is nullable, maybeSubType may be non-null or nullable.
    return isTypeSubTypeOf(schema, maybeSubType.ofType, superType);
  }

  // If superType type is a list, maybeSubType type must also be a list.
  if (superType instanceof _definition.GraphQLList) {
    if (maybeSubType instanceof _definition.GraphQLList) {
      return isTypeSubTypeOf(schema, maybeSubType.ofType, superType.ofType);
    }
    return false;
  } else if (maybeSubType instanceof _definition.GraphQLList) {
    // If superType is not a list, maybeSubType must also be not a list.
    return false;
  }

  // If superType type is an abstract type, maybeSubType type may be a currently
  // possible object type.
  if ((0, _definition.isAbstractType)(superType) && maybeSubType instanceof _definition.GraphQLObjectType && schema.isPossibleType(superType, maybeSubType)) {
    return true;
  }

  // Otherwise, the child type is not a valid subtype of the parent type.
  return false;
}

/**
 * Provided two composite types, determine if they "overlap". Two composite
 * types overlap when the Sets of possible concrete types for each intersect.
 *
 * This is often used to determine if a fragment of a given type could possibly
 * be visited in a context of another type.
 *
 * This function is commutative.
 */
function doTypesOverlap(schema, typeA, typeB) {
  // So flow is aware this is constant
  var _typeB = typeB;

  // Equivalent types overlap
  if (typeA === _typeB) {
    return true;
  }

  if ((0, _definition.isAbstractType)(typeA)) {
    if ((0, _definition.isAbstractType)(_typeB)) {
      // If both types are abstract, then determine if there is any intersection
      // between possible concrete types of each.
      return schema.getPossibleTypes(typeA).some(function (type) {
        return schema.isPossibleType(_typeB, type);
      });
    }
    // Determine if the latter type is a possible concrete type of the former.
    return schema.isPossibleType(typeA, _typeB);
  }

  if ((0, _definition.isAbstractType)(_typeB)) {
    // Determine if the former type is a possible concrete type of the latter.
    return schema.isPossibleType(_typeB, typeA);
  }

  // Otherwise the types do not overlap.
  return false;
}

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildASTSchema = buildASTSchema;
exports.getDeprecationReason = getDeprecationReason;
exports.getDescription = getDescription;
exports.buildSchema = buildSchema;

var _invariant = __webpack_require__(4);

var _invariant2 = _interopRequireDefault(_invariant);

var _keyValMap = __webpack_require__(33);

var _keyValMap2 = _interopRequireDefault(_keyValMap);

var _valueFromAST = __webpack_require__(21);

var _lexer = __webpack_require__(56);

var _parser = __webpack_require__(54);

var _values = __webpack_require__(106);

var _kinds = __webpack_require__(10);

var Kind = _interopRequireWildcard(_kinds);

var _schema = __webpack_require__(24);

var _scalars = __webpack_require__(13);

var _definition = __webpack_require__(2);

var _directives = __webpack_require__(15);

var _introspection = __webpack_require__(25);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

function buildWrappedType(innerType, inputTypeNode) {
  if (inputTypeNode.kind === Kind.LIST_TYPE) {
    return new _definition.GraphQLList(buildWrappedType(innerType, inputTypeNode.type));
  }
  if (inputTypeNode.kind === Kind.NON_NULL_TYPE) {
    var wrappedType = buildWrappedType(innerType, inputTypeNode.type);
    !!(wrappedType instanceof _definition.GraphQLNonNull) ? (0, _invariant2.default)(0, 'No nesting nonnull.') : void 0;
    return new _definition.GraphQLNonNull(wrappedType);
  }
  return innerType;
}

function getNamedTypeNode(typeNode) {
  var namedType = typeNode;
  while (namedType.kind === Kind.LIST_TYPE || namedType.kind === Kind.NON_NULL_TYPE) {
    namedType = namedType.type;
  }
  return namedType;
}

/**
 * This takes the ast of a schema document produced by the parse function in
 * src/language/parser.js.
 *
 * If no schema definition is provided, then it will look for types named Query
 * and Mutation.
 *
 * Given that AST it constructs a GraphQLSchema. The resulting schema
 * has no resolve methods, so execution will use default resolvers.
 */
function buildASTSchema(ast) {
  if (!ast || ast.kind !== Kind.DOCUMENT) {
    throw new Error('Must provide a document ast.');
  }

  var schemaDef = void 0;

  var typeDefs = [];
  var nodeMap = Object.create(null);
  var directiveDefs = [];
  for (var i = 0; i < ast.definitions.length; i++) {
    var d = ast.definitions[i];
    switch (d.kind) {
      case Kind.SCHEMA_DEFINITION:
        if (schemaDef) {
          throw new Error('Must provide only one schema definition.');
        }
        schemaDef = d;
        break;
      case Kind.SCALAR_TYPE_DEFINITION:
      case Kind.OBJECT_TYPE_DEFINITION:
      case Kind.INTERFACE_TYPE_DEFINITION:
      case Kind.ENUM_TYPE_DEFINITION:
      case Kind.UNION_TYPE_DEFINITION:
      case Kind.INPUT_OBJECT_TYPE_DEFINITION:
        var typeName = d.name.value;
        if (nodeMap[typeName]) {
          throw new Error('Type "' + typeName + '" was defined more than once.');
        }
        typeDefs.push(d);
        nodeMap[typeName] = d;
        break;
      case Kind.DIRECTIVE_DEFINITION:
        directiveDefs.push(d);
        break;
    }
  }

  var queryTypeName = void 0;
  var mutationTypeName = void 0;
  var subscriptionTypeName = void 0;
  if (schemaDef) {
    schemaDef.operationTypes.forEach(function (operationType) {
      var typeName = operationType.type.name.value;
      if (operationType.operation === 'query') {
        if (queryTypeName) {
          throw new Error('Must provide only one query type in schema.');
        }
        if (!nodeMap[typeName]) {
          throw new Error('Specified query type "' + typeName + '" not found in document.');
        }
        queryTypeName = typeName;
      } else if (operationType.operation === 'mutation') {
        if (mutationTypeName) {
          throw new Error('Must provide only one mutation type in schema.');
        }
        if (!nodeMap[typeName]) {
          throw new Error('Specified mutation type "' + typeName + '" not found in document.');
        }
        mutationTypeName = typeName;
      } else if (operationType.operation === 'subscription') {
        if (subscriptionTypeName) {
          throw new Error('Must provide only one subscription type in schema.');
        }
        if (!nodeMap[typeName]) {
          throw new Error('Specified subscription type "' + typeName + '" not found in document.');
        }
        subscriptionTypeName = typeName;
      }
    });
  } else {
    if (nodeMap.Query) {
      queryTypeName = 'Query';
    }
    if (nodeMap.Mutation) {
      mutationTypeName = 'Mutation';
    }
    if (nodeMap.Subscription) {
      subscriptionTypeName = 'Subscription';
    }
  }

  if (!queryTypeName) {
    throw new Error('Must provide schema definition with query type or a type named Query.');
  }

  var innerTypeMap = {
    String: _scalars.GraphQLString,
    Int: _scalars.GraphQLInt,
    Float: _scalars.GraphQLFloat,
    Boolean: _scalars.GraphQLBoolean,
    ID: _scalars.GraphQLID,
    __Schema: _introspection.__Schema,
    __Directive: _introspection.__Directive,
    __DirectiveLocation: _introspection.__DirectiveLocation,
    __Type: _introspection.__Type,
    __Field: _introspection.__Field,
    __InputValue: _introspection.__InputValue,
    __EnumValue: _introspection.__EnumValue,
    __TypeKind: _introspection.__TypeKind
  };

  var types = typeDefs.map(function (def) {
    return typeDefNamed(def.name.value);
  });

  var directives = directiveDefs.map(getDirective);

  // If specified directives were not explicitly declared, add them.
  if (!directives.some(function (directive) {
    return directive.name === 'skip';
  })) {
    directives.push(_directives.GraphQLSkipDirective);
  }

  if (!directives.some(function (directive) {
    return directive.name === 'include';
  })) {
    directives.push(_directives.GraphQLIncludeDirective);
  }

  if (!directives.some(function (directive) {
    return directive.name === 'deprecated';
  })) {
    directives.push(_directives.GraphQLDeprecatedDirective);
  }

  return new _schema.GraphQLSchema({
    query: getObjectType(nodeMap[queryTypeName]),
    mutation: mutationTypeName ? getObjectType(nodeMap[mutationTypeName]) : null,
    subscription: subscriptionTypeName ? getObjectType(nodeMap[subscriptionTypeName]) : null,
    types: types,
    directives: directives,
    astNode: schemaDef
  });

  function getDirective(directiveNode) {
    return new _directives.GraphQLDirective({
      name: directiveNode.name.value,
      description: getDescription(directiveNode),
      locations: directiveNode.locations.map(function (node) {
        return node.value;
      }),
      args: directiveNode.arguments && makeInputValues(directiveNode.arguments),
      astNode: directiveNode
    });
  }

  function getObjectType(typeNode) {
    var type = typeDefNamed(typeNode.name.value);
    !(type instanceof _definition.GraphQLObjectType) ? (0, _invariant2.default)(0, 'AST must provide object type.') : void 0;
    return type;
  }

  function produceType(typeNode) {
    var typeName = getNamedTypeNode(typeNode).name.value;
    var typeDef = typeDefNamed(typeName);
    return buildWrappedType(typeDef, typeNode);
  }

  function produceInputType(typeNode) {
    return (0, _definition.assertInputType)(produceType(typeNode));
  }

  function produceOutputType(typeNode) {
    return (0, _definition.assertOutputType)(produceType(typeNode));
  }

  function produceObjectType(typeNode) {
    var type = produceType(typeNode);
    !(type instanceof _definition.GraphQLObjectType) ? (0, _invariant2.default)(0, 'Expected Object type.') : void 0;
    return type;
  }

  function produceInterfaceType(typeNode) {
    var type = produceType(typeNode);
    !(type instanceof _definition.GraphQLInterfaceType) ? (0, _invariant2.default)(0, 'Expected Interface type.') : void 0;
    return type;
  }

  function typeDefNamed(typeName) {
    if (!innerTypeMap[typeName]) {
      if (!nodeMap[typeName]) {
        throw new Error('Type "' + typeName + '" not found in document.');
      }
      innerTypeMap[typeName] = makeSchemaDef(nodeMap[typeName]);
    }
    return innerTypeMap[typeName];
  }

  function makeSchemaDef(def) {
    switch (def.kind) {
      case Kind.OBJECT_TYPE_DEFINITION:
        return makeTypeDef(def);
      case Kind.INTERFACE_TYPE_DEFINITION:
        return makeInterfaceDef(def);
      case Kind.ENUM_TYPE_DEFINITION:
        return makeEnumDef(def);
      case Kind.UNION_TYPE_DEFINITION:
        return makeUnionDef(def);
      case Kind.SCALAR_TYPE_DEFINITION:
        return makeScalarDef(def);
      case Kind.INPUT_OBJECT_TYPE_DEFINITION:
        return makeInputObjectDef(def);
      default:
        throw new Error('Type kind "' + def.kind + '" not supported.');
    }
  }

  function makeTypeDef(def) {
    var typeName = def.name.value;
    return new _definition.GraphQLObjectType({
      name: typeName,
      description: getDescription(def),
      fields: function fields() {
        return makeFieldDefMap(def);
      },
      interfaces: function interfaces() {
        return makeImplementedInterfaces(def);
      },
      astNode: def
    });
  }

  function makeFieldDefMap(def) {
    return (0, _keyValMap2.default)(def.fields, function (field) {
      return field.name.value;
    }, function (field) {
      return {
        type: produceOutputType(field.type),
        description: getDescription(field),
        args: makeInputValues(field.arguments),
        deprecationReason: getDeprecationReason(field),
        astNode: field
      };
    });
  }

  function makeImplementedInterfaces(def) {
    return def.interfaces && def.interfaces.map(function (iface) {
      return produceInterfaceType(iface);
    });
  }

  function makeInputValues(values) {
    return (0, _keyValMap2.default)(values, function (value) {
      return value.name.value;
    }, function (value) {
      var type = produceInputType(value.type);
      return {
        type: type,
        description: getDescription(value),
        defaultValue: (0, _valueFromAST.valueFromAST)(value.defaultValue, type),
        astNode: value
      };
    });
  }

  function makeInterfaceDef(def) {
    return new _definition.GraphQLInterfaceType({
      name: def.name.value,
      description: getDescription(def),
      fields: function fields() {
        return makeFieldDefMap(def);
      },
      astNode: def,
      resolveType: cannotExecuteSchema
    });
  }

  function makeEnumDef(def) {
    return new _definition.GraphQLEnumType({
      name: def.name.value,
      description: getDescription(def),
      values: (0, _keyValMap2.default)(def.values, function (enumValue) {
        return enumValue.name.value;
      }, function (enumValue) {
        return {
          description: getDescription(enumValue),
          deprecationReason: getDeprecationReason(enumValue),
          astNode: enumValue
        };
      }),
      astNode: def
    });
  }

  function makeUnionDef(def) {
    return new _definition.GraphQLUnionType({
      name: def.name.value,
      description: getDescription(def),
      types: def.types.map(function (t) {
        return produceObjectType(t);
      }),
      resolveType: cannotExecuteSchema,
      astNode: def
    });
  }

  function makeScalarDef(def) {
    return new _definition.GraphQLScalarType({
      name: def.name.value,
      description: getDescription(def),
      astNode: def,
      serialize: function serialize() {
        return null;
      },
      // Note: validation calls the parse functions to determine if a
      // literal value is correct. Returning null would cause use of custom
      // scalars to always fail validation. Returning false causes them to
      // always pass validation.
      parseValue: function parseValue() {
        return false;
      },
      parseLiteral: function parseLiteral() {
        return false;
      }
    });
  }

  function makeInputObjectDef(def) {
    return new _definition.GraphQLInputObjectType({
      name: def.name.value,
      description: getDescription(def),
      fields: function fields() {
        return makeInputValues(def.fields);
      },
      astNode: def
    });
  }
}

/**
 * Given a field or enum value node, returns the string value for the
 * deprecation reason.
 */
function getDeprecationReason(node) {
  var deprecated = (0, _values.getDirectiveValues)(_directives.GraphQLDeprecatedDirective, node);
  return deprecated && deprecated.reason;
}

/**
 * Given an ast node, returns its string description based on a contiguous
 * block full-line of comments preceding it.
 */
function getDescription(node) {
  var loc = node.loc;
  if (!loc) {
    return;
  }
  var comments = [];
  var minSpaces = void 0;
  var token = loc.startToken.prev;
  while (token && token.kind === _lexer.TokenKind.COMMENT && token.next && token.prev && token.line + 1 === token.next.line && token.line !== token.prev.line) {
    var value = String(token.value);
    var spaces = leadingSpaces(value);
    if (minSpaces === undefined || spaces < minSpaces) {
      minSpaces = spaces;
    }
    comments.push(value);
    token = token.prev;
  }
  return comments.reverse().map(function (comment) {
    return comment.slice(minSpaces);
  }).join('\n');
}

/**
 * A helper function to build a GraphQLSchema directly from a source
 * document.
 */
function buildSchema(source) {
  return buildASTSchema((0, _parser.parse)(source));
}

// Count the number of spaces on the starting side of a string.
function leadingSpaces(str) {
  var i = 0;
  for (; i < str.length; i++) {
    if (str[i] !== ' ') {
      break;
    }
  }
  return i;
}

function cannotExecuteSchema() {
  throw new Error('Generated Schema cannot use Interface or Union types for execution.');
}

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

exports.isValidJSValue = isValidJSValue;

var _iterall = __webpack_require__(37);

var _invariant = __webpack_require__(4);

var _invariant2 = _interopRequireDefault(_invariant);

var _isNullish = __webpack_require__(14);

var _isNullish2 = _interopRequireDefault(_isNullish);

var _definition = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Given a JavaScript value and a GraphQL type, determine if the value will be
 * accepted for that type. This is primarily useful for validating the
 * runtime values of query variables.
 */
function isValidJSValue(value, type) {
  // A value must be provided if the type is non-null.
  if (type instanceof _definition.GraphQLNonNull) {
    if ((0, _isNullish2.default)(value)) {
      return ['Expected "' + String(type) + '", found null.'];
    }
    return isValidJSValue(value, type.ofType);
  }

  if ((0, _isNullish2.default)(value)) {
    return [];
  }

  // Lists accept a non-list value as a list of one.
  if (type instanceof _definition.GraphQLList) {
    var itemType = type.ofType;
    if ((0, _iterall.isCollection)(value)) {
      var errors = [];
      (0, _iterall.forEach)(value, function (item, index) {
        errors.push.apply(errors, isValidJSValue(item, itemType).map(function (error) {
          return 'In element #' + index + ': ' + error;
        }));
      });
      return errors;
    }
    return isValidJSValue(value, itemType);
  }

  // Input objects check each defined field.
  if (type instanceof _definition.GraphQLInputObjectType) {
    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object' || value === null) {
      return ['Expected "' + type.name + '", found not an object.'];
    }
    var fields = type.getFields();

    var _errors = [];

    // Ensure every provided field is defined.
    Object.keys(value).forEach(function (providedField) {
      if (!fields[providedField]) {
        _errors.push('In field "' + providedField + '": Unknown field.');
      }
    });

    // Ensure every defined field is valid.
    Object.keys(fields).forEach(function (fieldName) {
      var newErrors = isValidJSValue(value[fieldName], fields[fieldName].type);
      _errors.push.apply(_errors, newErrors.map(function (error) {
        return 'In field "' + fieldName + '": ' + error;
      }));
    });

    return _errors;
  }

  !(type instanceof _definition.GraphQLScalarType || type instanceof _definition.GraphQLEnumType) ? (0, _invariant2.default)(0, 'Must be input type') : void 0;

  // Scalar/Enum input checks to ensure the type can parse the value to
  // a non-null value.
  try {
    var parseResult = type.parseValue(value);
    if ((0, _isNullish2.default)(parseResult) && !type.isValidValue(value)) {
      return ['Expected type "' + type.name + '", found ' + JSON.stringify(value) + '.'];
    }
  } catch (error) {
    return ['Expected type "' + type.name + '", found ' + JSON.stringify(value) + ': ' + error.message];
  }

  return [];
}

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isValidLiteralValue = isValidLiteralValue;

var _printer = __webpack_require__(29);

var _kinds = __webpack_require__(10);

var Kind = _interopRequireWildcard(_kinds);

var _definition = __webpack_require__(2);

var _invariant = __webpack_require__(4);

var _invariant2 = _interopRequireDefault(_invariant);

var _keyMap = __webpack_require__(20);

var _keyMap2 = _interopRequireDefault(_keyMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Utility for validators which determines if a value literal node is valid
 * given an input type.
 *
 * Note that this only validates literal values, variables are assumed to
 * provide values of the correct type.
 */
function isValidLiteralValue(type, valueNode) {
  // A value must be provided if the type is non-null.
  if (type instanceof _definition.GraphQLNonNull) {
    if (!valueNode || valueNode.kind === Kind.NULL) {
      return ['Expected "' + String(type) + '", found null.'];
    }
    return isValidLiteralValue(type.ofType, valueNode);
  }

  if (!valueNode || valueNode.kind === Kind.NULL) {
    return [];
  }

  // This function only tests literals, and assumes variables will provide
  // values of the correct type.
  if (valueNode.kind === Kind.VARIABLE) {
    return [];
  }

  // Lists accept a non-list value as a list of one.
  if (type instanceof _definition.GraphQLList) {
    var itemType = type.ofType;
    if (valueNode.kind === Kind.LIST) {
      return valueNode.values.reduce(function (acc, item, index) {
        var errors = isValidLiteralValue(itemType, item);
        return acc.concat(errors.map(function (error) {
          return 'In element #' + index + ': ' + error;
        }));
      }, []);
    }
    return isValidLiteralValue(itemType, valueNode);
  }

  // Input objects check each defined field and look for undefined fields.
  if (type instanceof _definition.GraphQLInputObjectType) {
    if (valueNode.kind !== Kind.OBJECT) {
      return ['Expected "' + type.name + '", found not an object.'];
    }
    var fields = type.getFields();

    var errors = [];

    // Ensure every provided field is defined.
    var fieldNodes = valueNode.fields;
    fieldNodes.forEach(function (providedFieldNode) {
      if (!fields[providedFieldNode.name.value]) {
        errors.push('In field "' + providedFieldNode.name.value + '": Unknown field.');
      }
    });

    // Ensure every defined field is valid.
    var fieldNodeMap = (0, _keyMap2.default)(fieldNodes, function (fieldNode) {
      return fieldNode.name.value;
    });
    Object.keys(fields).forEach(function (fieldName) {
      var result = isValidLiteralValue(fields[fieldName].type, fieldNodeMap[fieldName] && fieldNodeMap[fieldName].value);
      errors.push.apply(errors, result.map(function (error) {
        return 'In field "' + fieldName + '": ' + error;
      }));
    });

    return errors;
  }

  !(type instanceof _definition.GraphQLScalarType || type instanceof _definition.GraphQLEnumType) ? (0, _invariant2.default)(0, 'Must be input type') : void 0;

  // Scalars determine if a literal values is valid.
  if (!type.isValidLiteral(valueNode)) {
    return ['Expected type "' + type.name + '", found ' + (0, _printer.print)(valueNode) + '.'];
  }

  return [];
}
/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TypeInfo = undefined;

var _kinds = __webpack_require__(10);

var Kind = _interopRequireWildcard(_kinds);

var _definition = __webpack_require__(2);

var _introspection = __webpack_require__(25);

var _typeFromAST = __webpack_require__(40);

var _find = __webpack_require__(39);

var _find2 = _interopRequireDefault(_find);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * TypeInfo is a utility class which, given a GraphQL schema, can keep track
 * of the current field and type definitions at any point in a GraphQL document
 * AST during a recursive descent by calling `enter(node)` and `leave(node)`.
 */
var TypeInfo = exports.TypeInfo = function () {
  function TypeInfo(schema,
  // NOTE: this experimental optional second parameter is only needed in order
  // to support non-spec-compliant codebases. You should never need to use it.
  getFieldDefFn) {
    _classCallCheck(this, TypeInfo);

    this._schema = schema;
    this._typeStack = [];
    this._parentTypeStack = [];
    this._inputTypeStack = [];
    this._fieldDefStack = [];
    this._directive = null;
    this._argument = null;
    this._enumValue = null;
    this._getFieldDef = getFieldDefFn || getFieldDef;
  }

  TypeInfo.prototype.getType = function getType() {
    if (this._typeStack.length > 0) {
      return this._typeStack[this._typeStack.length - 1];
    }
  };

  TypeInfo.prototype.getParentType = function getParentType() {
    if (this._parentTypeStack.length > 0) {
      return this._parentTypeStack[this._parentTypeStack.length - 1];
    }
  };

  TypeInfo.prototype.getInputType = function getInputType() {
    if (this._inputTypeStack.length > 0) {
      return this._inputTypeStack[this._inputTypeStack.length - 1];
    }
  };

  TypeInfo.prototype.getFieldDef = function getFieldDef() {
    if (this._fieldDefStack.length > 0) {
      return this._fieldDefStack[this._fieldDefStack.length - 1];
    }
  };

  TypeInfo.prototype.getDirective = function getDirective() {
    return this._directive;
  };

  TypeInfo.prototype.getArgument = function getArgument() {
    return this._argument;
  };

  TypeInfo.prototype.getEnumValue = function getEnumValue() {
    return this._enumValue;
  };

  // Flow does not yet handle this case.


  TypeInfo.prototype.enter = function enter(node /* ASTNode */) {
    var schema = this._schema;
    switch (node.kind) {
      case Kind.SELECTION_SET:
        var namedType = (0, _definition.getNamedType)(this.getType());
        this._parentTypeStack.push((0, _definition.isCompositeType)(namedType) ? namedType : undefined);
        break;
      case Kind.FIELD:
        var parentType = this.getParentType();
        var fieldDef = void 0;
        if (parentType) {
          fieldDef = this._getFieldDef(schema, parentType, node);
        }
        this._fieldDefStack.push(fieldDef);
        this._typeStack.push(fieldDef && fieldDef.type);
        break;
      case Kind.DIRECTIVE:
        this._directive = schema.getDirective(node.name.value);
        break;
      case Kind.OPERATION_DEFINITION:
        var type = void 0;
        if (node.operation === 'query') {
          type = schema.getQueryType();
        } else if (node.operation === 'mutation') {
          type = schema.getMutationType();
        } else if (node.operation === 'subscription') {
          type = schema.getSubscriptionType();
        }
        this._typeStack.push(type);
        break;
      case Kind.INLINE_FRAGMENT:
      case Kind.FRAGMENT_DEFINITION:
        var typeConditionAST = node.typeCondition;
        var outputType = typeConditionAST ? (0, _typeFromAST.typeFromAST)(schema, typeConditionAST) : this.getType();
        this._typeStack.push((0, _definition.isOutputType)(outputType) ? outputType : undefined);
        break;
      case Kind.VARIABLE_DEFINITION:
        var inputType = (0, _typeFromAST.typeFromAST)(schema, node.type);
        this._inputTypeStack.push((0, _definition.isInputType)(inputType) ? inputType : undefined);
        break;
      case Kind.ARGUMENT:
        var argDef = void 0;
        var argType = void 0;
        var fieldOrDirective = this.getDirective() || this.getFieldDef();
        if (fieldOrDirective) {
          argDef = (0, _find2.default)(fieldOrDirective.args, function (arg) {
            return arg.name === node.name.value;
          });
          if (argDef) {
            argType = argDef.type;
          }
        }
        this._argument = argDef;
        this._inputTypeStack.push(argType);
        break;
      case Kind.LIST:
        var listType = (0, _definition.getNullableType)(this.getInputType());
        this._inputTypeStack.push(listType instanceof _definition.GraphQLList ? listType.ofType : undefined);
        break;
      case Kind.OBJECT_FIELD:
        var objectType = (0, _definition.getNamedType)(this.getInputType());
        var fieldType = void 0;
        if (objectType instanceof _definition.GraphQLInputObjectType) {
          var inputField = objectType.getFields()[node.name.value];
          fieldType = inputField ? inputField.type : undefined;
        }
        this._inputTypeStack.push(fieldType);
        break;
      case Kind.ENUM:
        var enumType = (0, _definition.getNamedType)(this.getInputType());
        var enumValue = void 0;
        if (enumType instanceof _definition.GraphQLEnumType) {
          enumValue = enumType.getValue(node.value);
        }
        this._enumValue = enumValue;
        break;
    }
  };

  TypeInfo.prototype.leave = function leave(node) {
    switch (node.kind) {
      case Kind.SELECTION_SET:
        this._parentTypeStack.pop();
        break;
      case Kind.FIELD:
        this._fieldDefStack.pop();
        this._typeStack.pop();
        break;
      case Kind.DIRECTIVE:
        this._directive = null;
        break;
      case Kind.OPERATION_DEFINITION:
      case Kind.INLINE_FRAGMENT:
      case Kind.FRAGMENT_DEFINITION:
        this._typeStack.pop();
        break;
      case Kind.VARIABLE_DEFINITION:
        this._inputTypeStack.pop();
        break;
      case Kind.ARGUMENT:
        this._argument = null;
        this._inputTypeStack.pop();
        break;
      case Kind.LIST:
      case Kind.OBJECT_FIELD:
        this._inputTypeStack.pop();
        break;
      case Kind.ENUM:
        this._enumValue = null;
        break;
    }
  };

  return TypeInfo;
}();

/**
 * Not exactly the same as the executor's definition of getFieldDef, in this
 * statically evaluated environment we do not always have an Object type,
 * and need to handle Interface and Union types.
 */


function getFieldDef(schema, parentType, fieldNode) {
  var name = fieldNode.name.value;
  if (name === _introspection.SchemaMetaFieldDef.name && schema.getQueryType() === parentType) {
    return _introspection.SchemaMetaFieldDef;
  }
  if (name === _introspection.TypeMetaFieldDef.name && schema.getQueryType() === parentType) {
    return _introspection.TypeMetaFieldDef;
  }
  if (name === _introspection.TypeNameMetaFieldDef.name && (0, _definition.isCompositeType)(parentType)) {
    return _introspection.TypeNameMetaFieldDef;
  }
  if (parentType instanceof _definition.GraphQLObjectType || parentType instanceof _definition.GraphQLInterfaceType) {
    return parentType.getFields()[name];
  }
}

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var emptyFunction = __webpack_require__(41);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  (function () {
    var printWarning = function printWarning(format) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };

    warning = function warning(condition, format) {
      if (format === undefined) {
        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
      }

      if (format.indexOf('Failed Composite propType: ') === 0) {
        return; // Ignore CompositeComponent proptype check.
      }

      if (!condition) {
        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }

        printWarning.apply(undefined, [format].concat(args));
      }
    };
  })();
}

module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = exports.buttonFactory = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__(1);

var _classnames3 = _interopRequireDefault(_classnames2);

var _reactCssThemr = __webpack_require__(7);

var _identifiers = __webpack_require__(8);

var _FontIcon = __webpack_require__(16);

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _Ripple = __webpack_require__(26);

var _Ripple2 = _interopRequireDefault(_Ripple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(ripple, FontIcon) {
  var Button = function (_Component) {
    _inherits(Button, _Component);

    function Button() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Button);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Button.__proto__ || Object.getPrototypeOf(Button)).call.apply(_ref, [this].concat(args))), _this), _this.getLevel = function () {
        if (_this.props.primary) return 'primary';
        if (_this.props.accent) return 'accent';
        return 'neutral';
      }, _this.getShape = function () {
        if (_this.props.raised) return 'raised';
        if (_this.props.floating) return 'floating';
        return 'flat';
      }, _this.handleMouseUp = function (event) {
        _this.buttonNode.blur();
        if (_this.props.onMouseUp) _this.props.onMouseUp(event);
      }, _this.handleMouseLeave = function (event) {
        _this.buttonNode.blur();
        if (_this.props.onMouseLeave) _this.props.onMouseLeave(event);
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Button, [{
      key: 'render',
      value: function render() {
        var _classnames,
            _this2 = this;

        var _props = this.props,
            accent = _props.accent,
            children = _props.children,
            className = _props.className,
            flat = _props.flat,
            floating = _props.floating,
            href = _props.href,
            icon = _props.icon,
            inverse = _props.inverse,
            label = _props.label,
            mini = _props.mini,
            neutral = _props.neutral,
            primary = _props.primary,
            raised = _props.raised,
            theme = _props.theme,
            type = _props.type,
            others = _objectWithoutProperties(_props, ['accent', 'children', 'className', 'flat', 'floating', 'href', 'icon', 'inverse', 'label', 'mini', 'neutral', 'primary', 'raised', 'theme', 'type']);

        var element = href ? 'a' : 'button';
        var level = this.getLevel();
        var shape = this.getShape();

        var classes = (0, _classnames3.default)(theme.button, [theme[shape]], (_classnames = {}, _defineProperty(_classnames, theme[level], neutral), _defineProperty(_classnames, theme.mini, mini), _defineProperty(_classnames, theme.inverse, inverse), _classnames), className);

        var props = _extends({}, others, {
          href: href,
          ref: function ref(node) {
            _this2.buttonNode = node;
          },
          className: classes,
          disabled: this.props.disabled,
          onMouseUp: this.handleMouseUp,
          onMouseLeave: this.handleMouseLeave,
          type: !href ? type : null,
          'data-react-toolbox': 'button'
        });

        return _react2.default.createElement(element, props, icon ? _react2.default.createElement(FontIcon, { className: theme.icon, value: icon }) : null, label, children);
      }
    }]);

    return Button;
  }(_react.Component);

  Button.propTypes = {
    accent: _propTypes2.default.bool,
    children: _propTypes2.default.node,
    className: _propTypes2.default.string,
    disabled: _propTypes2.default.bool,
    flat: _propTypes2.default.bool,
    floating: _propTypes2.default.bool,
    href: _propTypes2.default.string,
    icon: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
    inverse: _propTypes2.default.bool,
    label: _propTypes2.default.string,
    mini: _propTypes2.default.bool,
    neutral: _propTypes2.default.bool,
    onMouseLeave: _propTypes2.default.func,
    onMouseUp: _propTypes2.default.func,
    primary: _propTypes2.default.bool,
    raised: _propTypes2.default.bool,
    theme: _propTypes2.default.shape({
      accent: _propTypes2.default.string,
      button: _propTypes2.default.string,
      flat: _propTypes2.default.string,
      floating: _propTypes2.default.string,
      icon: _propTypes2.default.string,
      inverse: _propTypes2.default.string,
      mini: _propTypes2.default.string,
      neutral: _propTypes2.default.string,
      primary: _propTypes2.default.string,
      raised: _propTypes2.default.string,
      rippleWrapper: _propTypes2.default.string,
      toggle: _propTypes2.default.string
    }),
    type: _propTypes2.default.string
  };
  Button.defaultProps = {
    accent: false,
    className: '',
    flat: false,
    floating: false,
    mini: false,
    neutral: true,
    primary: false,
    raised: false,
    type: 'button'
  };


  return ripple(Button);
};

var Button = factory((0, _Ripple2.default)({ centered: false }), _FontIcon2.default);
exports.default = (0, _reactCssThemr.themr)(_identifiers.BUTTON)(Button);
exports.buttonFactory = factory;
exports.Button = Button;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(17);
var _has = __webpack_require__(65);
var _isArguments = __webpack_require__(128);


/**
 * Returns a list containing the names of all the enumerable own properties of
 * the supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> [k]
 * @param {Object} obj The object to extract properties from
 * @return {Array} An array of the object's own properties.
 * @example
 *
 *      R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
 */
module.exports = (function() {
  // cover IE < 9 keys issues
  var hasEnumBug = !({toString: null}).propertyIsEnumerable('toString');
  var nonEnumerableProps = ['constructor', 'valueOf', 'isPrototypeOf', 'toString',
                            'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
  // Safari bug
  var hasArgsEnumBug = (function() {
    'use strict';
    return arguments.propertyIsEnumerable('length');
  }());

  var contains = function contains(list, item) {
    var idx = 0;
    while (idx < list.length) {
      if (list[idx] === item) {
        return true;
      }
      idx += 1;
    }
    return false;
  };

  return typeof Object.keys === 'function' && !hasArgsEnumBug ?
    _curry1(function keys(obj) {
      return Object(obj) !== obj ? [] : Object.keys(obj);
    }) :
    _curry1(function keys(obj) {
      if (Object(obj) !== obj) {
        return [];
      }
      var prop, nIdx;
      var ks = [];
      var checkArgsLength = hasArgsEnumBug && _isArguments(obj);
      for (prop in obj) {
        if (_has(prop, obj) && (!checkArgsLength || prop !== 'length')) {
          ks[ks.length] = prop;
        }
      }
      if (hasEnumBug) {
        nIdx = nonEnumerableProps.length - 1;
        while (nIdx >= 0) {
          prop = nonEnumerableProps[nIdx];
          if (_has(prop, obj) && !contains(ks, prop)) {
            ks[ks.length] = prop;
          }
          nIdx -= 1;
        }
      }
      return ks;
    });
}());


/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = function _has(prop, obj) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(27);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Portal = function (_Component) {
  _inherits(Portal, _Component);

  function Portal() {
    _classCallCheck(this, Portal);

    return _possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
  }

  _createClass(Portal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._renderOverlay();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this._overlayTarget && nextProps.container !== this.props.container) {
        this._portalContainerNode.removeChild(this._overlayTarget);
        this._portalContainerNode = getContainer(nextProps.container);
        this._portalContainerNode.appendChild(this._overlayTarget);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this._renderOverlay();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._unrenderOverlay();
      this._unmountOverlayTarget();
    }
  }, {
    key: 'getMountNode',
    value: function getMountNode() {
      return this._overlayTarget;
    }
  }, {
    key: 'getOverlayDOMNode',
    value: function getOverlayDOMNode() {
      if (!this.isMounted()) {
        // eslint-disable-line
        throw new Error('getOverlayDOMNode(): A component must be mounted to have a DOM node.');
      }

      if (this._overlayInstance) {
        if (this._overlayInstance.getWrappedDOMNode) {
          return this._overlayInstance.getWrappedDOMNode();
        }
        return _reactDom2.default.findDOMNode(this._overlayInstance);
      }

      return null;
    }
  }, {
    key: '_getOverlay',
    value: function _getOverlay() {
      if (!this.props.children) return null;
      return _react2.default.createElement(
        'div',
        { className: this.props.className },
        this.props.children
      );
    }
  }, {
    key: '_renderOverlay',
    value: function _renderOverlay() {
      var overlay = this._getOverlay();
      if (overlay !== null) {
        this._mountOverlayTarget();
        this._overlayInstance = _reactDom2.default.unstable_renderSubtreeIntoContainer(this, overlay, this._overlayTarget);
      } else {
        this._unrenderOverlay();
        this._unmountOverlayTarget();
      }
    }
  }, {
    key: '_unrenderOverlay',
    value: function _unrenderOverlay() {
      if (this._overlayTarget) {
        _reactDom2.default.unmountComponentAtNode(this._overlayTarget);
        this._overlayInstance = null;
      }
    }
  }, {
    key: '_mountOverlayTarget',
    value: function _mountOverlayTarget() {
      if (!this._overlayTarget) {
        this._overlayTarget = document.createElement('div');
        this._portalContainerNode = getContainer(this.props.container);
        this._portalContainerNode.appendChild(this._overlayTarget);
      }
    }
  }, {
    key: '_unmountOverlayTarget',
    value: function _unmountOverlayTarget() {
      if (this._overlayTarget) {
        this._portalContainerNode.removeChild(this._overlayTarget);
        this._overlayTarget = null;
      }
      this._portalContainerNode = null;
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return Portal;
}(_react.Component);

Portal.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  container: _propTypes2.default.node
};
Portal.defaultProps = {
  className: ''
};


function getContainer(container) {
  var _container = typeof container === 'function' ? container() : container;
  return _reactDom2.default.findDOMNode(_container) || document.body;
}

exports.default = Portal;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Ripple = __webpack_require__(26);

var _Ripple2 = _interopRequireDefault(_Ripple);

var _theme = __webpack_require__(132);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (options) {
  return (0, _Ripple2.default)(_extends({}, options, { theme: _theme2.default }));
};

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selected__ = __webpack_require__(146);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__selected__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__selected__["b"]; });



/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = isNode;
/* harmony export (immutable) */ __webpack_exports__["a"] = getDefaultRoot;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getTypeGraphSelector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reselect__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__introspection___ = __webpack_require__(11);



function isNode(type) {
    return !(Object(__WEBPACK_IMPORTED_MODULE_2__introspection___["f" /* isScalarType */])(type) ||
        Object(__WEBPACK_IMPORTED_MODULE_2__introspection___["e" /* isInputObjectType */])(type) ||
        Object(__WEBPACK_IMPORTED_MODULE_2__introspection___["g" /* isSystemType */])(type) ||
        type.isRelayType);
}
function getDefaultRoot(schema) {
    return schema.queryType.id;
}
function getTypeGraph(schema, rootTypeId) {
    if (schema === null)
        return null;
    return buildGraph(rootTypeId || getDefaultRoot(schema));
    function getEdgeTargets(type) {
        return __WEBPACK_IMPORTED_MODULE_0_lodash__(__WEBPACK_IMPORTED_MODULE_0_lodash__["values"](type.fields).concat(type.derivedTypes || [], type.possibleTypes || []))
            .map('type')
            .filter(isNode)
            .map('id')
            .value();
    }
    function buildGraph(rootId) {
        var typeIds = [rootId];
        var nodes = [];
        var types = __WEBPACK_IMPORTED_MODULE_0_lodash__["keyBy"](schema.types, 'id');
        for (var i = 0; i < typeIds.length; ++i) {
            var id = typeIds[i];
            if (typeIds.indexOf(id) < i)
                continue;
            var type = types[id];
            nodes.push(type);
            typeIds.push.apply(typeIds, getEdgeTargets(type));
        }
        return {
            rootId: rootId,
            nodes: __WEBPACK_IMPORTED_MODULE_0_lodash__["keyBy"](nodes, 'id'),
        };
    }
}
var getTypeGraphSelector = Object(__WEBPACK_IMPORTED_MODULE_1_reselect__["createSelector"])(__WEBPACK_IMPORTED_MODULE_2__introspection___["c" /* getSchemaSelector */], function (state) { return state.displayOptions.rootTypeId; }, getTypeGraph);


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDotSelector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reselect__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__introspection___ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__type_graph__ = __webpack_require__(69);




var template = __webpack_require__(153);
function getDot(typeGraph) {
    if (typeGraph === null)
        return null;
    return template({ _: __WEBPACK_IMPORTED_MODULE_0_lodash__, typeGraph: typeGraph, stringifyWrappers: __WEBPACK_IMPORTED_MODULE_2__introspection___["h" /* stringifyWrappers */] });
}
var getDotSelector = Object(__WEBPACK_IMPORTED_MODULE_1_reselect__["createSelector"])(__WEBPACK_IMPORTED_MODULE_3__type_graph__["b" /* getTypeGraphSelector */], getDot);


/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_toolbox_lib_button__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_toolbox_lib_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_toolbox_lib_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__icons_remove_red_eye_svg__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__FocusTypeButton_css__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__FocusTypeButton_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__FocusTypeButton_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions___ = __webpack_require__(6);






function FocusTypeButton(props) {
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_toolbox_lib_button__["IconButton"], { className: "eye-button", onClick: function () { return props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actions___["A" /* focusElement */])(props.type.id)); } },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__icons_remove_red_eye_svg__["a" /* default */], null)));
}
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])()(FocusTypeButton));


/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = function _arity(n, fn) {
  /* eslint-disable no-unused-vars */
  switch (n) {
    case 0: return function() { return fn.apply(this, arguments); };
    case 1: return function(a0) { return fn.apply(this, arguments); };
    case 2: return function(a0, a1) { return fn.apply(this, arguments); };
    case 3: return function(a0, a1, a2) { return fn.apply(this, arguments); };
    case 4: return function(a0, a1, a2, a3) { return fn.apply(this, arguments); };
    case 5: return function(a0, a1, a2, a3, a4) { return fn.apply(this, arguments); };
    case 6: return function(a0, a1, a2, a3, a4, a5) { return fn.apply(this, arguments); };
    case 7: return function(a0, a1, a2, a3, a4, a5, a6) { return fn.apply(this, arguments); };
    case 8: return function(a0, a1, a2, a3, a4, a5, a6, a7) { return fn.apply(this, arguments); };
    case 9: return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) { return fn.apply(this, arguments); };
    case 10: return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) { return fn.apply(this, arguments); };
    default: throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
  }
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(50);
var _reduce = __webpack_require__(171);


/**
 * Returns a single item by iterating through the list, successively calling
 * the iterator function and passing it an accumulator value and the current
 * value from the array, and then passing the result to the next call.
 *
 * The iterator function receives two values: *(acc, value)*. It may use
 * `R.reduced` to shortcut the iteration.
 *
 * The arguments' order of `reduceRight`'s iterator function is *(value, acc)*.
 *
 * Note: `R.reduce` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.reduce` method. For more details
 * on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
 *
 * Dispatches to the `reduce` method of the third argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduced, R.addIndex, R.reduceRight
 * @example
 *
 *      R.reduce(R.subtract, 0, [1, 2, 3, 4]) // => ((((0 - 1) - 2) - 3) - 4) = -10
 *                -               -10
 *               / \              / \
 *              -   4           -6   4
 *             / \              / \
 *            -   3   ==>     -3   3
 *           / \              / \
 *          -   2           -1   2
 *         / \              / \
 *        0   1            0   1
 *
 * @symb R.reduce(f, a, [b, c, d]) = f(f(f(a, b), c), d)
 */
module.exports = _curry3(_reduce);


/***/ }),
/* 74 */
/***/ (function(module, exports) {

/**
 * Tests whether or not an object is an array.
 *
 * @private
 * @param {*} val The object to test.
 * @return {Boolean} `true` if `val` is an array, `false` otherwise.
 * @example
 *
 *      _isArray([]); //=> true
 *      _isArray(null); //=> false
 *      _isArray({}); //=> false
 */
module.exports = Array.isArray || function _isArray(val) {
  return (val != null &&
          val.length >= 0 &&
          Object.prototype.toString.call(val) === '[object Array]');
};


/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = function _isString(x) {
  return Object.prototype.toString.call(x) === '[object String]';
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var _isArray = __webpack_require__(74);


/**
 * This checks whether a function has a [methodname] function. If it isn't an
 * array it will execute that function otherwise it will default to the ramda
 * implementation.
 *
 * @private
 * @param {Function} fn ramda implemtation
 * @param {String} methodname property to check for a custom implementation
 * @return {Object} Whatever the return value of the method is.
 */
module.exports = function _checkForMethod(methodname, fn) {
  return function() {
    var length = arguments.length;
    if (length === 0) {
      return fn();
    }
    var obj = arguments[length - 1];
    return (_isArray(obj) || typeof obj[methodname] !== 'function') ?
      fn.apply(this, arguments) :
      obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length - 1));
  };
};


/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};



var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", _extends({ height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" }, this.props), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }));
    }
  }]);

  return SVG;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SVG);

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ClientError = /** @class */ (function (_super) {
    __extends(ClientError, _super);
    function ClientError(response, request) {
        var _this = this;
        var message = ClientError.extractMessage(response) + ": " + JSON.stringify({ response: response, request: request });
        _this = _super.call(this, message) || this;
        _this.response = response;
        _this.request = request;
        // this is needed as Safari doesn't support .captureStackTrace
        /* tslint:disable-next-line */
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(_this, ClientError);
        }
        return _this;
    }
    ClientError.extractMessage = function (response) {
        try {
            return response.errors[0].message;
        }
        catch (e) {
            return "GraphQL Error (Code: " + response.status + ")";
        }
    };
    return ClientError;
}(Error));
exports.ClientError = ClientError;
//# sourceMappingURL=types.js.map

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var properties = __webpack_require__(202);
var PropTypes = __webpack_require__(3);

module.exports = function(props, propName, componentName) {
  var styles = props[propName];
  if (!styles) {
    return;
  }

  var failures = [];
  Object.keys(styles).forEach(function(styleKey){
    if (properties.indexOf(styleKey) === -1) {
      failures.push(styleKey);
    }
  });
  if (failures.length) {
    throw new Error('Prop ' + propName + ' passed to ' + componentName + '. Has invalid keys ' + failures.join(', '));
  }
};

module.exports.isRequired = function(props, propName, componentName) {
  if (!props[propName]) {
    throw new Error('Prop ' + propName + ' passed to ' + componentName + ' is required');
  }
  return module.exports(props, propName, componentName);
};

module.exports.supportingArrays = PropTypes.oneOfType([
  PropTypes.arrayOf(module.exports),
  module.exports
]);


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__(1);

var _classnames3 = _interopRequireDefault(_classnames2);

var _reactStyleProptype = __webpack_require__(79);

var _reactStyleProptype2 = _interopRequireDefault(_reactStyleProptype);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var factory = function factory(ripple) {
  var Check = function Check(_ref) {
    var checked = _ref.checked,
        children = _ref.children,
        onMouseDown = _ref.onMouseDown,
        theme = _ref.theme,
        style = _ref.style;
    return _react2.default.createElement(
      'div',
      {
        'data-react-toolbox': 'check',
        className: (0, _classnames3.default)(theme.check, _defineProperty({}, theme.checked, checked)),
        onMouseDown: onMouseDown,
        style: style
      },
      children
    );
  };

  Check.propTypes = {
    checked: _propTypes2.default.bool,
    children: _propTypes2.default.node,
    onMouseDown: _propTypes2.default.func,
    style: _reactStyleProptype2.default,
    theme: _propTypes2.default.shape({
      check: _propTypes2.default.string,
      checked: _propTypes2.default.string
    })
  };

  return ripple(Check);
};

exports.default = factory;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = exports.inputFactory = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames4 = __webpack_require__(1);

var _classnames5 = _interopRequireDefault(_classnames4);

var _reactCssThemr = __webpack_require__(7);

var _identifiers = __webpack_require__(8);

var _FontIcon = __webpack_require__(16);

var _FontIcon2 = _interopRequireDefault(_FontIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(FontIcon) {
  var Input = function (_React$Component) {
    _inherits(Input, _React$Component);

    function Input() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Input);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Input.__proto__ || Object.getPrototypeOf(Input)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (event) {
        var _this$props = _this.props,
            onChange = _this$props.onChange,
            multiline = _this$props.multiline,
            maxLength = _this$props.maxLength;

        var valueFromEvent = event.target.value;

        // Trim value to maxLength if that exists (only on multiline inputs).
        // Note that this is still required even tho we have the onKeyPress filter
        // because the user could paste smt in the textarea.
        var haveToTrim = multiline && maxLength && event.target.value.length > maxLength;
        var value = haveToTrim ? valueFromEvent.substr(0, maxLength) : valueFromEvent;

        // propagate to to store and therefore to the input
        if (onChange) onChange(value, event);
      }, _this.handleAutoresize = function () {
        var element = _this.inputNode;
        var rows = _this.props.rows;

        if (typeof rows === 'number' && !isNaN(rows)) {
          element.style.height = null;
        } else {
          // compute the height difference between inner height and outer height
          var style = getComputedStyle(element, null);
          var heightOffset = style.boxSizing === 'content-box' ? -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom)) : parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);

          // resize the input to its content size
          element.style.height = 'auto';
          element.style.height = element.scrollHeight + heightOffset + 'px';
        }
      }, _this.handleKeyPress = function (event) {
        // prevent insertion of more characters if we're a multiline input
        // and maxLength exists
        var _this$props2 = _this.props,
            multiline = _this$props2.multiline,
            maxLength = _this$props2.maxLength,
            onKeyPress = _this$props2.onKeyPress;

        if (multiline && maxLength) {
          // check if smt is selected, in which case the newly added charcter would
          // replace the selected characters, so the length of value doesn't actually
          // increase.
          var isReplacing = event.target.selectionEnd - event.target.selectionStart;
          var value = event.target.value;

          if (!isReplacing && value.length === maxLength) {
            event.preventDefault();
            event.stopPropagation();
            return undefined;
          }
        }

        if (onKeyPress) onKeyPress(event);
        return undefined;
      }, _this.valuePresent = function (value) {
        return value !== null && value !== undefined && value !== '' && !(typeof value === 'number' && isNaN(value));
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Input, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (this.props.multiline) {
          window.addEventListener('resize', this.handleAutoresize);
          this.handleAutoresize();
        }
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (!this.props.multiline && nextProps.multiline) {
          window.addEventListener('resize', this.handleAutoresize);
        } else if (this.props.multiline && !nextProps.multiline) {
          window.removeEventListener('resize', this.handleAutoresize);
        }
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        // resize the textarea, if nessesary
        if (this.props.multiline) this.handleAutoresize();
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.props.multiline) window.removeEventListener('resize', this.handleAutoresize);
      }
    }, {
      key: 'blur',
      value: function blur() {
        this.inputNode.blur();
      }
    }, {
      key: 'focus',
      value: function focus() {
        this.inputNode.focus();
      }
    }, {
      key: 'render',
      value: function render() {
        var _classnames2,
            _this2 = this;

        var _props = this.props,
            children = _props.children,
            defaultValue = _props.defaultValue,
            disabled = _props.disabled,
            error = _props.error,
            floating = _props.floating,
            hint = _props.hint,
            icon = _props.icon,
            name = _props.name,
            labelText = _props.label,
            maxLength = _props.maxLength,
            multiline = _props.multiline,
            required = _props.required,
            theme = _props.theme,
            type = _props.type,
            value = _props.value,
            onKeyPress = _props.onKeyPress,
            _props$rows = _props.rows,
            rows = _props$rows === undefined ? 1 : _props$rows,
            others = _objectWithoutProperties(_props, ['children', 'defaultValue', 'disabled', 'error', 'floating', 'hint', 'icon', 'name', 'label', 'maxLength', 'multiline', 'required', 'theme', 'type', 'value', 'onKeyPress', 'rows']);

        var length = maxLength && value ? value.length : 0;
        var labelClassName = (0, _classnames5.default)(theme.label, _defineProperty({}, theme.fixed, !floating));

        var className = (0, _classnames5.default)(theme.input, (_classnames2 = {}, _defineProperty(_classnames2, theme.disabled, disabled), _defineProperty(_classnames2, theme.errored, error), _defineProperty(_classnames2, theme.hidden, type === 'hidden'), _defineProperty(_classnames2, theme.withIcon, icon), _classnames2), this.props.className);

        var valuePresent = this.valuePresent(value) || this.valuePresent(defaultValue);

        var inputElementProps = _extends({}, others, {
          className: (0, _classnames5.default)(theme.inputElement, _defineProperty({}, theme.filled, valuePresent)),
          onChange: this.handleChange,
          ref: function ref(node) {
            _this2.inputNode = node;
          },
          role: 'input',
          name: name,
          defaultValue: defaultValue,
          disabled: disabled,
          required: required,
          type: type,
          value: value
        });
        if (!multiline) {
          inputElementProps.maxLength = maxLength;
          inputElementProps.onKeyPress = onKeyPress;
        } else {
          inputElementProps.rows = rows;
          inputElementProps.onKeyPress = this.handleKeyPress;
        }

        return _react2.default.createElement(
          'div',
          { 'data-react-toolbox': 'input', className: className },
          _react2.default.createElement(multiline ? 'textarea' : 'input', inputElementProps),
          icon ? _react2.default.createElement(FontIcon, { className: theme.icon, value: icon }) : null,
          _react2.default.createElement('span', { className: theme.bar }),
          labelText ? _react2.default.createElement(
            'label',
            { className: labelClassName },
            labelText,
            required ? _react2.default.createElement(
              'span',
              { className: theme.required },
              ' * '
            ) : null
          ) : null,
          hint ? _react2.default.createElement(
            'span',
            { hidden: labelText, className: theme.hint },
            hint
          ) : null,
          error ? _react2.default.createElement(
            'span',
            { className: theme.error },
            error
          ) : null,
          maxLength ? _react2.default.createElement(
            'span',
            { className: theme.counter },
            length,
            '/',
            maxLength
          ) : null,
          children
        );
      }
    }]);

    return Input;
  }(_react2.default.Component);

  Input.propTypes = {
    children: _propTypes2.default.node,
    className: _propTypes2.default.string,
    defaultValue: _propTypes2.default.string,
    disabled: _propTypes2.default.bool,
    error: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
    floating: _propTypes2.default.bool,
    hint: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
    icon: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
    label: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
    maxLength: _propTypes2.default.number,
    multiline: _propTypes2.default.bool,
    name: _propTypes2.default.string,
    onBlur: _propTypes2.default.func,
    onChange: _propTypes2.default.func,
    onFocus: _propTypes2.default.func,
    onKeyPress: _propTypes2.default.func,
    required: _propTypes2.default.bool,
    rows: _propTypes2.default.number,
    theme: _propTypes2.default.shape({
      bar: _propTypes2.default.string,
      counter: _propTypes2.default.string,
      disabled: _propTypes2.default.string,
      error: _propTypes2.default.string,
      errored: _propTypes2.default.string,
      hidden: _propTypes2.default.string,
      hint: _propTypes2.default.string,
      icon: _propTypes2.default.string,
      input: _propTypes2.default.string,
      inputElement: _propTypes2.default.string,
      required: _propTypes2.default.string,
      withIcon: _propTypes2.default.string
    }),
    type: _propTypes2.default.string,
    value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.object, _propTypes2.default.string])
  };
  Input.defaultProps = {
    className: '',
    hint: '',
    disabled: false,
    floating: true,
    multiline: false,
    required: false,
    type: 'text'
  };


  return Input;
};

var Input = factory(_FontIcon2.default);
exports.default = (0, _reactCssThemr.themr)(_identifiers.INPUT)(Input);
exports.inputFactory = factory;
exports.Input = Input;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(83);
module.exports = __webpack_require__(86);


/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_hint_css_hint_base_css__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_hint_css_hint_base_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_hint_css_hint_base_css__);




/***/ }),
/* 84 */
/***/ (function(module, exports) {

;
if (!Element.prototype.scrollIntoViewIfNeeded) {
    Element.prototype.scrollIntoViewIfNeeded = function (centerIfNeeded) {
        centerIfNeeded = arguments.length === 0 ? true : !!centerIfNeeded;
        var parent = this.parentNode, parentComputedStyle = window.getComputedStyle(parent, null), parentBorderTopWidth = parseInt(parentComputedStyle.getPropertyValue('border-top-width')), parentBorderLeftWidth = parseInt(parentComputedStyle.getPropertyValue('border-left-width')), overTop = this.offsetTop - parent.offsetTop < parent.scrollTop, overBottom = (this.offsetTop - parent.offsetTop + this.clientHeight - parentBorderTopWidth) > (parent.scrollTop + parent.clientHeight), overLeft = this.offsetLeft - parent.offsetLeft < parent.scrollLeft, overRight = (this.offsetLeft - parent.offsetLeft + this.clientWidth - parentBorderLeftWidth) > (parent.scrollLeft + parent.clientWidth), alignWithTop = overTop && !overBottom;
        if ((overTop || overBottom) && centerIfNeeded) {
            parent.scrollTop = this.offsetTop - parent.offsetTop - parent.clientHeight / 2 - parentBorderTopWidth + this.clientHeight / 2;
        }
        if ((overLeft || overRight) && centerIfNeeded) {
            parent.scrollLeft = this.offsetLeft - parent.offsetLeft - parent.clientWidth / 2 - parentBorderLeftWidth + this.clientWidth / 2;
        }
        if ((overTop || overBottom || overLeft || overRight) && !centerIfNeeded) {
            this.scrollIntoView(alignWithTop);
        }
    };
}


/***/ }),
/* 85 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components__ = __webpack_require__(87);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Voyager", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["a"]; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



function init(element, options) {
    __WEBPACK_IMPORTED_MODULE_1_react_dom__["render"](__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__components__["a" /* Voyager */], __assign({}, options)), element);
}



/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Voyager__ = __webpack_require__(88);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Voyager__["a"]; });



/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__redux__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_graphql_utilities__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_graphql_utilities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_graphql_utilities__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Voyager_css__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Voyager_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Voyager_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__viewport_css__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__viewport_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__viewport_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_ErrorBar__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_LoadingAnimation__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__panel_DocPanel__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__settings_SchemaModal__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__graph___ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__actions___ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__introspection___ = __webpack_require__(11);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
















var Voyager = /** @class */ (function (_super) {
    __extends(Voyager, _super);
    function Voyager(props) {
        var _this = _super.call(this, props) || this;
        _this.store = Object(__WEBPACK_IMPORTED_MODULE_3__redux__["a" /* configureStore */])();
        return _this;
    }
    Voyager.prototype.componentDidMount = function () {
        // init viewport and svg-renderer
        this.renderer = new __WEBPACK_IMPORTED_MODULE_11__graph___["a" /* SVGRender */](this.store);
        this.viewport = new __WEBPACK_IMPORTED_MODULE_11__graph___["b" /* Viewport */](this.store, this.refs['viewport']);
        this.updateIntrospection();
    };
    Voyager.prototype.componentWillUnmount = function () {
        this.viewport.destroy();
        this.renderer.unsubscribe();
    };
    Voyager.prototype.updateIntrospection = function () {
        var _this = this;
        var displayOpts = normalizeDisplayOptions(this.props.displayOptions);
        if (__WEBPACK_IMPORTED_MODULE_1_lodash__["isFunction"](this.props.introspection)) {
            var promise = this.props.introspection(__WEBPACK_IMPORTED_MODULE_4_graphql_utilities__["introspectionQuery"]);
            if (!isPromise(promise)) {
                this.store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_12__actions___["D" /* reportError */])('SchemaProvider did not return a Promise for introspection.'));
            }
            promise.then(function (schema) {
                if (schema === _this.store.schema)
                    return;
                _this.store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_12__actions___["w" /* changeSchema */])(schema, displayOpts));
            });
        }
        else if (this.props.introspection) {
            this.store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_12__actions___["w" /* changeSchema */])(this.props.introspection, displayOpts));
        }
    };
    Voyager.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.introspection !== prevProps.introspection) {
            this.updateIntrospection();
            return;
        }
        if (this.props.displayOptions !== prevProps.displayOptions) {
            var opts = normalizeDisplayOptions(this.props.displayOptions);
            this.store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_12__actions___["t" /* changeDisplayOptions */])(opts));
        }
    };
    Voyager.prototype.render = function () {
        var _schemaPresets = this.props._schemaPresets;
        var showModal = !!_schemaPresets;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_redux__["Provider"], { store: this.store },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "graphql-voyager" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9__panel_DocPanel__["a" /* default */], { _showChangeButton: !!_schemaPresets }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { ref: "viewport", className: "viewport" }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7__utils_ErrorBar__["a" /* default */], null),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8__utils_LoadingAnimation__["a" /* default */], null),
                showModal && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_10__settings_SchemaModal__["a" /* default */], { presets: _schemaPresets }))));
    };
    Voyager.propTypes = {
        introspection: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].oneOfType([
            __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired,
            __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object.isRequired,
            __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].bool.isRequired
        ]).isRequired,
        _schemaPresets: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object,
        displayOptions: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].shape({
            rootType: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
            skipRelay: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].bool,
            sortByAlphabet: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].bool
        })
    };
    return Voyager;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (Voyager);
// Duck-type promise detection.
function isPromise(value) {
    return typeof value === 'object' && typeof value.then === 'function';
}
function normalizeDisplayOptions(opts) {
    opts = opts || {};
    return {
        rootTypeId: opts.rootType && Object(__WEBPACK_IMPORTED_MODULE_13__introspection___["i" /* typeNameToId */])(opts.rootType),
        skipRelay: opts.skipRelay,
        sortByAlphabet: opts.sortByAlphabet
    };
}


/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_89__;

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_90__;

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = rootReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions___ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__introspection__ = __webpack_require__(11);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



var initialState = {
    schema: null,
    schemaModal: {
        opened: false,
        activePreset: null,
        notApplied: null
    },
    displayOptions: {
        rootTypeId: null,
        skipRelay: true,
        sortByAlphabet: false
    },
    currentSvgIndex: null,
    svgCache: [],
    selected: {
        previousTypesIds: [],
        currentNodeId: null,
        currentEdgeId: null,
        scalar: null
    },
    graphView: {
        focusedId: null,
    },
    menuOpened: false,
    errorMessage: null,
};
function pushHistory(currentTypeId, previousState) {
    var previousTypesIds = previousState.selected.previousTypesIds;
    var previousTypeId = previousState.selected.currentNodeId;
    if (previousTypeId === null || previousTypeId === currentTypeId)
        return previousTypesIds;
    if (__WEBPACK_IMPORTED_MODULE_0_lodash__["last"](previousTypesIds) !== previousTypeId)
        return previousTypesIds.concat([previousTypeId]);
}
function rootReducer(previousState, action) {
    if (previousState === void 0) { previousState = initialState; }
    var type = action.type;
    switch (type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions___["e" /* CHANGE_SCHEMA */]:
            return __assign({}, previousState, { schema: action.payload.introspection, displayOptions: __WEBPACK_IMPORTED_MODULE_0_lodash__["defaults"](action.payload.displayOptions, initialState.displayOptions), svgCache: [], currentSvgIndex: null, graphView: initialState.graphView, selected: initialState.selected });
        case __WEBPACK_IMPORTED_MODULE_1__actions___["b" /* CHANGE_DISPLAY_OPTIONS */]:
            var displayOptions_1 = __assign({}, previousState.displayOptions, action.payload);
            var cacheIdx = __WEBPACK_IMPORTED_MODULE_0_lodash__["findIndex"](previousState.svgCache, function (cacheItem) {
                return __WEBPACK_IMPORTED_MODULE_0_lodash__["isEqual"](cacheItem.displayOptions, displayOptions_1);
            });
            return __assign({}, previousState, { displayOptions: displayOptions_1, currentSvgIndex: cacheIdx >= 0 ? cacheIdx : null, graphView: initialState.graphView, selected: initialState.selected });
        case __WEBPACK_IMPORTED_MODULE_1__actions___["q" /* SVG_RENDERING_FINISHED */]:
            return __assign({}, previousState, { svgCache: previousState.svgCache.concat([{
                        displayOptions: previousState.displayOptions,
                        svg: action.payload
                    }]), currentSvgIndex: previousState.svgCache.length });
        case __WEBPACK_IMPORTED_MODULE_1__actions___["n" /* SELECT_NODE */]:
            var currentNodeId = action.payload;
            if (currentNodeId === previousState.selected.currentNodeId)
                return previousState;
            return __assign({}, previousState, { selected: __assign({}, previousState.selected, { previousTypesIds: pushHistory(currentNodeId, previousState), currentNodeId: currentNodeId, currentEdgeId: null, scalar: null }) });
        case __WEBPACK_IMPORTED_MODULE_1__actions___["m" /* SELECT_EDGE */]:
            var currentEdgeId = action.payload;
            // deselect if click again
            if (currentEdgeId === previousState.selected.currentEdgeId) {
                return __assign({}, previousState, { selected: __assign({}, previousState.selected, { currentEdgeId: null, scalar: null }) });
            }
            var nodeId = Object(__WEBPACK_IMPORTED_MODULE_2__introspection__["a" /* extractTypeId */])(currentEdgeId);
            return __assign({}, previousState, { selected: __assign({}, previousState.selected, { previousTypesIds: pushHistory(nodeId, previousState), currentNodeId: nodeId, currentEdgeId: currentEdgeId, scalar: null }) });
        case __WEBPACK_IMPORTED_MODULE_1__actions___["o" /* SELECT_PREVIOUS_TYPE */]:
            return __assign({}, previousState, { selected: __assign({}, previousState.selected, { previousTypesIds: __WEBPACK_IMPORTED_MODULE_0_lodash__["initial"](previousState.selected.previousTypesIds), currentNodeId: __WEBPACK_IMPORTED_MODULE_0_lodash__["last"](previousState.selected.previousTypesIds), currentEdgeId: null, scalar: null }) });
        case __WEBPACK_IMPORTED_MODULE_1__actions___["h" /* CLEAR_SELECTION */]:
            return __assign({}, previousState, { selected: initialState.selected });
        case __WEBPACK_IMPORTED_MODULE_1__actions___["i" /* FOCUS_ELEMENT */]:
            return __assign({}, previousState, { graphView: __assign({}, previousState.graphView, { focusedId: action.payload }) });
        case __WEBPACK_IMPORTED_MODULE_1__actions___["j" /* FOCUS_ELEMENT_DONE */]:
            if (previousState.graphView.focusedId !== action.payload)
                return previousState;
            return __assign({}, previousState, { graphView: __assign({}, previousState.graphView, { focusedId: null }) });
        case __WEBPACK_IMPORTED_MODULE_1__actions___["p" /* SHOW_SCHEMA_MODAL */]:
            var presetValue = previousState.schema;
            return __assign({}, previousState, { schemaModal: __assign({}, previousState.schemaModal, { opened: true, notApplied: {
                        //schema: schema,
                        activePreset: previousState.schemaModal.activePreset,
                        displayOptions: previousState.displayOptions,
                        presetValue: presetValue
                    } }), errorMessage: initialState.errorMessage });
        case __WEBPACK_IMPORTED_MODULE_1__actions___["a" /* CHANGE_ACTIVE_PRESET */]:
            return __assign({}, previousState, { schemaModal: __assign({}, previousState.schemaModal, { activePreset: action.payload }) });
        case __WEBPACK_IMPORTED_MODULE_1__actions___["c" /* CHANGE_NOT_APPLIED_ACTIVE_PRESET */]:
            var naActivePreset = action.payload.presetName;
            var naSchema = action.payload.schema;
            return __assign({}, previousState, { schemaModal: __assign({}, previousState.schemaModal, { notApplied: __assign({}, previousState.schemaModal.notApplied, { presetValue: naSchema, activePreset: naActivePreset, displayOptions: initialState.displayOptions }) }), errorMessage: initialState.errorMessage });
        case __WEBPACK_IMPORTED_MODULE_1__actions___["d" /* CHANGE_NOT_APPLIED_DISPLAY_OPTIONS */]:
            return __assign({}, previousState, { schemaModal: __assign({}, previousState.schemaModal, { notApplied: __assign({}, previousState.schemaModal.notApplied, { displayOptions: action.payload }) }) });
        case __WEBPACK_IMPORTED_MODULE_1__actions___["k" /* HIDE_SCHEMA_MODAL */]:
            return __assign({}, previousState, { schemaModal: __assign({}, previousState.schemaModal, { opened: false, notApplied: null }) });
        case __WEBPACK_IMPORTED_MODULE_1__actions___["r" /* TOGGLE_MENU */]:
            return __assign({}, previousState, { menuOpened: !previousState.menuOpened });
        case __WEBPACK_IMPORTED_MODULE_1__actions___["l" /* REPORT_ERROR */]:
            return __assign({}, previousState, { errorMessage: action.payload });
        case __WEBPACK_IMPORTED_MODULE_1__actions___["g" /* CLEAR_ERROR */]:
            return __assign({}, previousState, { errorMessage: initialState.errorMessage });
        case __WEBPACK_IMPORTED_MODULE_1__actions___["f" /* CHANGE_SELECTED_TYPEINFO */]:
            return __assign({}, previousState, { selected: __assign({}, previousState.selected, { typeinfo: action.payload }) });
        default:
            return previousState;
    }
}


/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SHOW_SCHEMA_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return HIDE_SCHEMA_MODAL; });
/* harmony export (immutable) */ __webpack_exports__["j"] = showSchemaModal;
/* harmony export (immutable) */ __webpack_exports__["i"] = hideSchemaModal;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CHANGE_NOT_APPLIED_ACTIVE_PRESET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CHANGE_NOT_APPLIED_DISPLAY_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CHANGE_ACTIVE_PRESET; });
/* harmony export (immutable) */ __webpack_exports__["g"] = changeNaActivePreset;
/* harmony export (immutable) */ __webpack_exports__["h"] = changeNaDisplayOptions;
/* harmony export (immutable) */ __webpack_exports__["f"] = changeActivePreset;
var SHOW_SCHEMA_MODAL = 'SHOW_SCHEMA_MODAL';
var HIDE_SCHEMA_MODAL = 'HIDE_SCHEMA_MODAL';
function showSchemaModal() {
    return {
        type: SHOW_SCHEMA_MODAL
    };
}
function hideSchemaModal() {
    return {
        type: HIDE_SCHEMA_MODAL
    };
}
var CHANGE_NOT_APPLIED_ACTIVE_PRESET = 'CHANGE_NOT_APPLIED_ACTIVE_PRESET';
var CHANGE_NOT_APPLIED_DISPLAY_OPTIONS = 'CHANGE_NOT_APPLIED_DISPLAY_OPTIONS';
var CHANGE_ACTIVE_PRESET = 'CHANGE_ACTIVE_PRESET';
function changeNaActivePreset(value, schema) {
    return {
        type: CHANGE_NOT_APPLIED_ACTIVE_PRESET,
        payload: {
            presetName: value,
            schema: schema
        }
    };
}
function changeNaDisplayOptions(options) {
    return {
        type: CHANGE_NOT_APPLIED_DISPLAY_OPTIONS,
        payload: options
    };
}
function changeActivePreset(preset) {
    console.log(preset);
    return {
        type: CHANGE_ACTIVE_PRESET,
        payload: preset
    };
}


/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CHANGE_SCHEMA; });
/* harmony export (immutable) */ __webpack_exports__["b"] = changeSchema;
var CHANGE_SCHEMA = 'CHANGE_SCHEMA';
function changeSchema(introspection, displayOptions) {
    return {
        type: CHANGE_SCHEMA,
        payload: {
            introspection: introspection,
            displayOptions: displayOptions
        }
    };
}


/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SVG_RENDERING_FINISHED; });
/* harmony export (immutable) */ __webpack_exports__["b"] = svgRenderingFinished;
var SVG_RENDERING_FINISHED = 'SVG_RENDERING_FINISHED';
function svgRenderingFinished(svgString) {
    return {
        type: SVG_RENDERING_FINISHED,
        payload: svgString
    };
}


/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CHANGE_DISPLAY_OPTIONS; });
/* harmony export (immutable) */ __webpack_exports__["f"] = changeDisplayOptions;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return TOGGLE_MENU; });
/* unused harmony export toggleMenu */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return REPORT_ERROR; });
/* harmony export (immutable) */ __webpack_exports__["i"] = reportError;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CLEAR_ERROR; });
/* harmony export (immutable) */ __webpack_exports__["h"] = clearError;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CHANGE_SELECTED_TYPEINFO; });
/* harmony export (immutable) */ __webpack_exports__["g"] = changeSelectedTypeInfo;
var CHANGE_DISPLAY_OPTIONS = 'CHANGE_DISPLAY_OPTIONS';
function changeDisplayOptions(options) {
    return {
        type: CHANGE_DISPLAY_OPTIONS,
        payload: options,
    };
}
var TOGGLE_MENU = 'TOGGLE_MENU';
function toggleMenu() {
    return {
        type: TOGGLE_MENU
    };
}
var REPORT_ERROR = 'REPORT_ERROR';
function reportError(msg) {
    return {
        type: REPORT_ERROR,
        payload: msg
    };
}
var CLEAR_ERROR = 'CLEAR_ERROR';
function clearError() {
    return {
        type: CLEAR_ERROR
    };
}
var CHANGE_SELECTED_TYPEINFO = 'CHANGE_SELECTED_TYPEINFO';
function changeSelectedTypeInfo(type) {
    return {
        type: CHANGE_SELECTED_TYPEINFO,
        payload: type
    };
}


/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SELECT_NODE; });
/* harmony export (immutable) */ __webpack_exports__["k"] = selectNode;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SELECT_EDGE; });
/* harmony export (immutable) */ __webpack_exports__["j"] = selectEdge;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SELECT_PREVIOUS_TYPE; });
/* harmony export (immutable) */ __webpack_exports__["l"] = selectPreviousType;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CLEAR_SELECTION; });
/* harmony export (immutable) */ __webpack_exports__["g"] = clearSelection;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FOCUS_ELEMENT; });
/* harmony export (immutable) */ __webpack_exports__["h"] = focusElement;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FOCUS_ELEMENT_DONE; });
/* harmony export (immutable) */ __webpack_exports__["i"] = focusElementDone;
var SELECT_NODE = 'SELECT_NODE';
function selectNode(id) {
    return {
        type: SELECT_NODE,
        payload: id,
    };
}
var SELECT_EDGE = 'SELECT_EDGE';
function selectEdge(id) {
    return {
        type: SELECT_EDGE,
        payload: id,
    };
}
var SELECT_PREVIOUS_TYPE = 'SELECT_PREVIOUS_TYPE';
function selectPreviousType() {
    return {
        type: SELECT_PREVIOUS_TYPE,
    };
}
var CLEAR_SELECTION = 'CLEAR_SELECTION';
function clearSelection() {
    return {
        type: CLEAR_SELECTION,
    };
}
var FOCUS_ELEMENT = 'FOCUS_ELEMENT';
function focusElement(id) {
    return {
        type: FOCUS_ELEMENT,
        payload: id,
    };
}
var FOCUS_ELEMENT_DONE = 'FOCUS_ELEMENT_DONE';
function focusElementDone(id) {
    return {
        type: FOCUS_ELEMENT_DONE,
        payload: id,
    };
}


/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getSchema */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getSchemaSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getNaSchemaSelector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reselect__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(51);




function unwrapType(type, wrappers) {
    while (type.kind === 'NON_NULL' || type.kind == 'LIST') {
        wrappers.push(type.kind);
        type = type.ofType;
    }
    return type.name;
}
function convertArg(inArg) {
    var outArg = {
        name: inArg.name,
        description: inArg.description,
        defaultValue: inArg.defaultValue,
        typeWrappers: [],
    };
    outArg.type = unwrapType(inArg.type, outArg.typeWrappers);
    return outArg;
}
var convertInputField = convertArg;
function convertField(inField) {
    var outField = {
        name: inField.name,
        description: inField.description,
        typeWrappers: [],
        isDeprecated: inField.isDeprecated
    };
    outField.type = unwrapType(inField.type, outField.typeWrappers);
    outField.args = __WEBPACK_IMPORTED_MODULE_0_lodash__(inField.args).map(convertArg).keyBy('name').value();
    if (outField.isDeprecated)
        outField.deprecationReason = inField.deprecationReason;
    return outField;
}
function convertType(inType) {
    var outType = {
        kind: inType.kind,
        name: inType.name,
        description: inType.description,
    };
    switch (outType.kind) {
        case 'OBJECT':
            outType.interfaces = __WEBPACK_IMPORTED_MODULE_0_lodash__(inType.interfaces).map('name').uniq().value();
            outType.fields = __WEBPACK_IMPORTED_MODULE_0_lodash__(inType.fields).map(convertField).keyBy('name').value();
            break;
        case 'INTERFACE':
            outType.derivedTypes = __WEBPACK_IMPORTED_MODULE_0_lodash__(inType.possibleTypes).map('name').uniq().value();
            outType.fields = __WEBPACK_IMPORTED_MODULE_0_lodash__(inType.fields).map(convertField).keyBy('name').value();
            break;
        case 'UNION':
            outType.possibleTypes = __WEBPACK_IMPORTED_MODULE_0_lodash__(inType.possibleTypes).map('name').uniq().value();
            break;
        case 'ENUM':
            outType.enumValues = inType.enumValues;
            break;
        case 'INPUT_OBJECT':
            outType.inputFields = __WEBPACK_IMPORTED_MODULE_0_lodash__(inType.inputFields)
                .map(convertInputField).keyBy('name').value();
            break;
    }
    return outType;
}
function simplifySchema(inSchema) {
    return {
        types: __WEBPACK_IMPORTED_MODULE_0_lodash__(inSchema.types).map(convertType).keyBy('name').value(),
        queryType: inSchema.queryType.name,
        mutationType: __WEBPACK_IMPORTED_MODULE_0_lodash__["get"](inSchema, 'mutationType.name', null),
        subscriptionType: __WEBPACK_IMPORTED_MODULE_0_lodash__["get"](inSchema, 'subscriptionType.name', null),
    };
}
function markRelayTypes(schema) {
    var nodeType = schema.types[Object(__WEBPACK_IMPORTED_MODULE_3__utils__["g" /* typeNameToId */])('Node')];
    if (nodeType)
        nodeType.isRelayType = true;
    var pageInfoType = schema.types[Object(__WEBPACK_IMPORTED_MODULE_3__utils__["g" /* typeNameToId */])('PageInfo')];
    if (pageInfoType)
        pageInfoType.isRelayType = true;
    var edgeTypesMap = {};
    __WEBPACK_IMPORTED_MODULE_0_lodash__["each"](schema.types, function (type) {
        if (!__WEBPACK_IMPORTED_MODULE_0_lodash__["isEmpty"](type.interfaces)) {
            type.interfaces = __WEBPACK_IMPORTED_MODULE_0_lodash__["reject"](type.interfaces, function (baseType) { return baseType.type.name === 'Node'; });
            if (__WEBPACK_IMPORTED_MODULE_0_lodash__["isEmpty"](type.interfaces))
                delete type.interfaces;
        }
        __WEBPACK_IMPORTED_MODULE_0_lodash__["each"](type.fields, function (field) {
            if (!/.Connection$/.test(field.type.name))
                return;
            //FIXME: additional checks
            var relayConnetion = field.type;
            if (!relayConnetion.fields.edges)
                return;
            relayConnetion.isRelayType = true;
            var relayEdge = relayConnetion.fields['edges'].type;
            relayEdge.isRelayType = true;
            var realType = relayEdge.fields['node'].type;
            edgeTypesMap[relayEdge.name] = realType;
            field.relayType = field.type;
            field.type = realType;
            field.typeWrappers = ['LIST'];
            var relayArgNames = ['first', 'last', 'before', 'after'];
            var isRelayArg = (function (arg) { return relayArgNames.includes(arg.name); });
            field.relayArgs = __WEBPACK_IMPORTED_MODULE_0_lodash__["pickBy"](field.args, isRelayArg);
            field.args = __WEBPACK_IMPORTED_MODULE_0_lodash__["omitBy"](field.args, isRelayArg);
        });
    });
    __WEBPACK_IMPORTED_MODULE_0_lodash__["each"](schema.types, function (type) {
        __WEBPACK_IMPORTED_MODULE_0_lodash__["each"](type.fields, function (field) {
            var realType = edgeTypesMap[field.type.name];
            if (realType === undefined)
                return;
            field.relayType = field.type;
            field.type = realType;
        });
    });
    var queryType = schema.queryType;
    var query = schema.types[queryType];
    if (__WEBPACK_IMPORTED_MODULE_0_lodash__["get"](query, 'fields.node.type.isRelayType'))
        delete query.fields['node'];
    //GitHub use `nodes` instead of `node`.
    if (__WEBPACK_IMPORTED_MODULE_0_lodash__["get"](query, 'fields.nodes.type.isRelayType'))
        delete query.fields['nodes'];
    if (__WEBPACK_IMPORTED_MODULE_0_lodash__["get"](query, 'fields.relay.type.id') == queryType)
        delete query.fields['relay'];
}
function sortIntrospection(value) {
    if (__WEBPACK_IMPORTED_MODULE_0_lodash__["isArray"](value)) {
        if (__WEBPACK_IMPORTED_MODULE_0_lodash__["isString"](value[0]))
            return value.sort();
        else
            return __WEBPACK_IMPORTED_MODULE_0_lodash__["map"](value, sortIntrospection);
    }
    else if (__WEBPACK_IMPORTED_MODULE_0_lodash__["isPlainObject"](value))
        return __WEBPACK_IMPORTED_MODULE_0_lodash__(value)
            .toPairs().sortBy(0).fromPairs()
            .mapValues(sortIntrospection).value();
    else
        return value;
}
function assignTypesAndIDs(schema) {
    schema.queryType = schema.types[schema.queryType];
    schema.mutationType = schema.types[schema.mutationType];
    schema.subscriptionType = schema.types[schema.subscriptionType];
    __WEBPACK_IMPORTED_MODULE_0_lodash__["each"](schema.types, function (type) {
        type.id = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["g" /* typeNameToId */])(type.name);
        __WEBPACK_IMPORTED_MODULE_0_lodash__["each"](type.inputFields, function (field) {
            field.id = "FIELD::" + type.name + "::" + field.name;
            field.type = schema.types[field.type];
        });
        __WEBPACK_IMPORTED_MODULE_0_lodash__["each"](type.fields, function (field) {
            field.id = "FIELD::" + type.name + "::" + field.name;
            field.type = schema.types[field.type];
            __WEBPACK_IMPORTED_MODULE_0_lodash__["each"](field.args, function (arg) {
                arg.id = "ARGUMENT::" + type.name + "::" + field.name + "::" + arg.name;
                arg.type = schema.types[arg.type];
            });
        });
        if (!__WEBPACK_IMPORTED_MODULE_0_lodash__["isEmpty"](type.possibleTypes)) {
            type.possibleTypes = __WEBPACK_IMPORTED_MODULE_0_lodash__["map"](type.possibleTypes, function (possibleType) { return ({
                id: "POSSIBLE_TYPE::" + type.name + "::" + possibleType,
                type: schema.types[possibleType]
            }); });
        }
        if (!__WEBPACK_IMPORTED_MODULE_0_lodash__["isEmpty"](type.derivedTypes)) {
            type.derivedTypes = __WEBPACK_IMPORTED_MODULE_0_lodash__["map"](type.derivedTypes, function (derivedType) { return ({
                id: "DERIVED_TYPE::" + type.name + "::" + derivedType,
                type: schema.types[derivedType]
            }); });
        }
        if (!__WEBPACK_IMPORTED_MODULE_0_lodash__["isEmpty"](type.interfaces)) {
            type.interfaces = __WEBPACK_IMPORTED_MODULE_0_lodash__["map"](type.interfaces, function (baseType) { return ({
                id: "INTERFACE::" + type.name + "::" + baseType,
                type: schema.types[baseType]
            }); });
        }
    });
    schema.types = __WEBPACK_IMPORTED_MODULE_0_lodash__["keyBy"](schema.types, 'id');
}
function getSchema(introspection, sortByAlphabet, skipRelay) {
    if (!introspection)
        return null;
    //TODO: Check introspection result for errors
    var schema = simplifySchema(introspection.data.__schema);
    if (sortByAlphabet)
        schema = sortIntrospection(schema);
    assignTypesAndIDs(schema);
    if (skipRelay)
        markRelayTypes(schema);
    return schema;
}
var getSchemaSelector = Object(__WEBPACK_IMPORTED_MODULE_1_reselect__["createSelector"])(function (state) { return state.schema; }, function (state) { return state.displayOptions.sortByAlphabet; }, function (state) { return state.displayOptions.skipRelay; }, getSchema);
var getNaSchemaSelector = Object(__WEBPACK_IMPORTED_MODULE_1_reselect__["createSelector"])(function (state) {
    if (state.schemaModal.notApplied === null)
        return null;
    var presetValue = state.schemaModal.notApplied.presetValue;
    return presetValue;
}, function (state) { return __WEBPACK_IMPORTED_MODULE_0_lodash__["get"](state, 'schemaModal.notApplied.displayOptions.sortByAlphabet'); }, function (state) { return __WEBPACK_IMPORTED_MODULE_0_lodash__["get"](state, 'schemaModal.notApplied.displayOptions.skipRelay'); }, function (introspection, sortByAlphabet, skipRelay) {
    if (introspection == null)
        return { schema: null, error: null };
    try {
        if (typeof introspection === 'string')
            introspection = JSON.parse(introspection);
        //Used only to validate introspection so result is ignored
        Object(__WEBPACK_IMPORTED_MODULE_2_graphql__["buildClientSchema"])(introspection.data);
        var schema = getSchema(introspection, sortByAlphabet, skipRelay);
        return { schema: schema, error: null };
    }
    catch (e) {
        console.error(e);
        return { error: e.toString(), schema: null };
    }
});


/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_98__;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var introspectionQuery = exports.introspectionQuery = '\n  query IntrospectionQuery {\n    __schema {\n      queryType { name }\n      mutationType { name }\n      subscriptionType { name }\n      types {\n        ...FullType\n      }\n      directives {\n        name\n        description\n        locations\n        args {\n          ...InputValue\n        }\n      }\n    }\n  }\n\n  fragment FullType on __Type {\n    kind\n    name\n    description\n    fields(includeDeprecated: true) {\n      name\n      description\n      args {\n        ...InputValue\n      }\n      type {\n        ...TypeRef\n      }\n      isDeprecated\n      deprecationReason\n    }\n    inputFields {\n      ...InputValue\n    }\n    interfaces {\n      ...TypeRef\n    }\n    enumValues(includeDeprecated: true) {\n      name\n      description\n      isDeprecated\n      deprecationReason\n    }\n    possibleTypes {\n      ...TypeRef\n    }\n  }\n\n  fragment InputValue on __InputValue {\n    name\n    description\n    type { ...TypeRef }\n    defaultValue\n  }\n\n  fragment TypeRef on __Type {\n    kind\n    name\n    ofType {\n      kind\n      name\n      ofType {\n        kind\n        name\n        ofType {\n          kind\n          name\n          ofType {\n            kind\n            name\n            ofType {\n              kind\n              name\n              ofType {\n                kind\n                name\n                ofType {\n                  kind\n                  name\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n';
/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOperationAST = getOperationAST;

var _kinds = __webpack_require__(10);

/**
 * Returns an operation AST given a document AST and optionally an operation
 * name. If a name is not provided, an operation is only returned if only one is
 * provided in the document.
 */
function getOperationAST(documentAST, operationName) {
  var operation = null;
  for (var i = 0; i < documentAST.definitions.length; i++) {
    var definition = documentAST.definitions[i];
    if (definition.kind === _kinds.OPERATION_DEFINITION) {
      if (!operationName) {
        // If no operation name was provided, only return an Operation if there
        // is one defined in the document. Upon encountering the second, return
        // null.
        if (operation) {
          return null;
        }
        operation = definition;
      } else if (definition.name && definition.name.value === operationName) {
        return definition;
      }
    }
  }
  return operation;
}
/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildClientSchema = buildClientSchema;

var _invariant = __webpack_require__(4);

var _invariant2 = _interopRequireDefault(_invariant);

var _keyMap = __webpack_require__(20);

var _keyMap2 = _interopRequireDefault(_keyMap);

var _keyValMap = __webpack_require__(33);

var _keyValMap2 = _interopRequireDefault(_keyValMap);

var _valueFromAST = __webpack_require__(21);

var _parser = __webpack_require__(54);

var _schema = __webpack_require__(24);

var _definition = __webpack_require__(2);

var _introspection = __webpack_require__(25);

var _scalars = __webpack_require__(13);

var _directives = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Build a GraphQLSchema for use by client tools.
 *
 * Given the result of a client running the introspection query, creates and
 * returns a GraphQLSchema instance which can be then used with all graphql-js
 * tools, but cannot be used to execute a query, as introspection does not
 * represent the "resolver", "parse" or "serialize" functions or any other
 * server-internal mechanisms.
 */
function buildClientSchema(introspection) {

  // Get the schema from the introspection result.
  var schemaIntrospection = introspection.__schema;

  // Converts the list of types into a keyMap based on the type names.
  var typeIntrospectionMap = (0, _keyMap2.default)(schemaIntrospection.types, function (type) {
    return type.name;
  });

  // A cache to use to store the actual GraphQLType definition objects by name.
  // Initialize to the GraphQL built in scalars. All functions below are inline
  // so that this type def cache is within the scope of the closure.
  var typeDefCache = {
    String: _scalars.GraphQLString,
    Int: _scalars.GraphQLInt,
    Float: _scalars.GraphQLFloat,
    Boolean: _scalars.GraphQLBoolean,
    ID: _scalars.GraphQLID,
    __Schema: _introspection.__Schema,
    __Directive: _introspection.__Directive,
    __DirectiveLocation: _introspection.__DirectiveLocation,
    __Type: _introspection.__Type,
    __Field: _introspection.__Field,
    __InputValue: _introspection.__InputValue,
    __EnumValue: _introspection.__EnumValue,
    __TypeKind: _introspection.__TypeKind
  };

  // Given a type reference in introspection, return the GraphQLType instance.
  // preferring cached instances before building new instances.
  function getType(typeRef) {
    if (typeRef.kind === _introspection.TypeKind.LIST) {
      var itemRef = typeRef.ofType;
      if (!itemRef) {
        throw new Error('Decorated type deeper than introspection query.');
      }
      return new _definition.GraphQLList(getType(itemRef));
    }
    if (typeRef.kind === _introspection.TypeKind.NON_NULL) {
      var nullableRef = typeRef.ofType;
      if (!nullableRef) {
        throw new Error('Decorated type deeper than introspection query.');
      }
      var nullableType = getType(nullableRef);
      !!(nullableType instanceof _definition.GraphQLNonNull) ? (0, _invariant2.default)(0, 'No nesting nonnull.') : void 0;
      return new _definition.GraphQLNonNull(nullableType);
    }
    return getNamedType(typeRef.name);
  }

  function getNamedType(typeName) {
    if (typeDefCache[typeName]) {
      return typeDefCache[typeName];
    }
    var typeIntrospection = typeIntrospectionMap[typeName];
    if (!typeIntrospection) {
      throw new Error('Invalid or incomplete schema, unknown type: ' + typeName + '. Ensure ' + 'that a full introspection query is used in order to build a ' + 'client schema.');
    }
    var typeDef = buildType(typeIntrospection);
    typeDefCache[typeName] = typeDef;
    return typeDef;
  }

  function getInputType(typeRef) {
    var type = getType(typeRef);
    !(0, _definition.isInputType)(type) ? (0, _invariant2.default)(0, 'Introspection must provide input type for arguments.') : void 0;
    return type;
  }

  function getOutputType(typeRef) {
    var type = getType(typeRef);
    !(0, _definition.isOutputType)(type) ? (0, _invariant2.default)(0, 'Introspection must provide output type for fields.') : void 0;
    return type;
  }

  function getObjectType(typeRef) {
    var type = getType(typeRef);
    !(type instanceof _definition.GraphQLObjectType) ? (0, _invariant2.default)(0, 'Introspection must provide object type for possibleTypes.') : void 0;
    return type;
  }

  function getInterfaceType(typeRef) {
    var type = getType(typeRef);
    !(type instanceof _definition.GraphQLInterfaceType) ? (0, _invariant2.default)(0, 'Introspection must provide interface type for interfaces.') : void 0;
    return type;
  }

  // Given a type's introspection result, construct the correct
  // GraphQLType instance.
  function buildType(type) {
    switch (type.kind) {
      case _introspection.TypeKind.SCALAR:
        return buildScalarDef(type);
      case _introspection.TypeKind.OBJECT:
        return buildObjectDef(type);
      case _introspection.TypeKind.INTERFACE:
        return buildInterfaceDef(type);
      case _introspection.TypeKind.UNION:
        return buildUnionDef(type);
      case _introspection.TypeKind.ENUM:
        return buildEnumDef(type);
      case _introspection.TypeKind.INPUT_OBJECT:
        return buildInputObjectDef(type);
      default:
        throw new Error('Invalid or incomplete schema, unknown kind: ' + type.kind + '. Ensure ' + 'that a full introspection query is used in order to build a ' + 'client schema.');
    }
  }

  function buildScalarDef(scalarIntrospection) {
    return new _definition.GraphQLScalarType({
      name: scalarIntrospection.name,
      description: scalarIntrospection.description,
      serialize: function serialize(id) {
        return id;
      },
      // Note: validation calls the parse functions to determine if a
      // literal value is correct. Returning null would cause use of custom
      // scalars to always fail validation. Returning false causes them to
      // always pass validation.
      parseValue: function parseValue() {
        return false;
      },
      parseLiteral: function parseLiteral() {
        return false;
      }
    });
  }

  function buildObjectDef(objectIntrospection) {
    return new _definition.GraphQLObjectType({
      name: objectIntrospection.name,
      description: objectIntrospection.description,
      interfaces: objectIntrospection.interfaces.map(getInterfaceType),
      fields: function fields() {
        return buildFieldDefMap(objectIntrospection);
      }
    });
  }

  function buildInterfaceDef(interfaceIntrospection) {
    return new _definition.GraphQLInterfaceType({
      name: interfaceIntrospection.name,
      description: interfaceIntrospection.description,
      fields: function fields() {
        return buildFieldDefMap(interfaceIntrospection);
      },
      resolveType: cannotExecuteClientSchema
    });
  }

  function buildUnionDef(unionIntrospection) {
    return new _definition.GraphQLUnionType({
      name: unionIntrospection.name,
      description: unionIntrospection.description,
      types: unionIntrospection.possibleTypes.map(getObjectType),
      resolveType: cannotExecuteClientSchema
    });
  }

  function buildEnumDef(enumIntrospection) {
    return new _definition.GraphQLEnumType({
      name: enumIntrospection.name,
      description: enumIntrospection.description,
      values: (0, _keyValMap2.default)(enumIntrospection.enumValues, function (valueIntrospection) {
        return valueIntrospection.name;
      }, function (valueIntrospection) {
        return {
          description: valueIntrospection.description,
          deprecationReason: valueIntrospection.deprecationReason
        };
      })
    });
  }

  function buildInputObjectDef(inputObjectIntrospection) {
    return new _definition.GraphQLInputObjectType({
      name: inputObjectIntrospection.name,
      description: inputObjectIntrospection.description,
      fields: function fields() {
        return buildInputValueDefMap(inputObjectIntrospection.inputFields);
      }
    });
  }

  function buildFieldDefMap(typeIntrospection) {
    return (0, _keyValMap2.default)(typeIntrospection.fields, function (fieldIntrospection) {
      return fieldIntrospection.name;
    }, function (fieldIntrospection) {
      return {
        description: fieldIntrospection.description,
        deprecationReason: fieldIntrospection.deprecationReason,
        type: getOutputType(fieldIntrospection.type),
        args: buildInputValueDefMap(fieldIntrospection.args)
      };
    });
  }

  function buildInputValueDefMap(inputValueIntrospections) {
    return (0, _keyValMap2.default)(inputValueIntrospections, function (inputValue) {
      return inputValue.name;
    }, buildInputValue);
  }

  function buildInputValue(inputValueIntrospection) {
    var type = getInputType(inputValueIntrospection.type);
    var defaultValue = inputValueIntrospection.defaultValue ? (0, _valueFromAST.valueFromAST)((0, _parser.parseValue)(inputValueIntrospection.defaultValue), type) : undefined;
    return {
      name: inputValueIntrospection.name,
      description: inputValueIntrospection.description,
      type: type,
      defaultValue: defaultValue
    };
  }

  function buildDirective(directiveIntrospection) {
    // Support deprecated `on****` fields for building `locations`, as this
    // is used by GraphiQL which may need to support outdated servers.
    var locations = directiveIntrospection.locations ? directiveIntrospection.locations.slice() : [].concat(!directiveIntrospection.onField ? [] : [_directives.DirectiveLocation.FIELD], !directiveIntrospection.onOperation ? [] : [_directives.DirectiveLocation.QUERY, _directives.DirectiveLocation.MUTATION, _directives.DirectiveLocation.SUBSCRIPTION], !directiveIntrospection.onFragment ? [] : [_directives.DirectiveLocation.FRAGMENT_DEFINITION, _directives.DirectiveLocation.FRAGMENT_SPREAD, _directives.DirectiveLocation.INLINE_FRAGMENT]);
    return new _directives.GraphQLDirective({
      name: directiveIntrospection.name,
      description: directiveIntrospection.description,
      locations: locations,
      args: buildInputValueDefMap(directiveIntrospection.args)
    });
  }

  // Iterate through all types, getting the type definition for each, ensuring
  // that any type not directly referenced by a field will get created.
  var types = schemaIntrospection.types.map(function (typeIntrospection) {
    return getNamedType(typeIntrospection.name);
  });

  // Get the root Query, Mutation, and Subscription types.
  var queryType = getObjectType(schemaIntrospection.queryType);

  var mutationType = schemaIntrospection.mutationType ? getObjectType(schemaIntrospection.mutationType) : null;

  var subscriptionType = schemaIntrospection.subscriptionType ? getObjectType(schemaIntrospection.subscriptionType) : null;

  // Get the directives supported by Introspection, assuming empty-set if
  // directives were not queried for.
  var directives = schemaIntrospection.directives ? schemaIntrospection.directives.map(buildDirective) : [];

  // Then produce and return a Schema with these types.
  return new _schema.GraphQLSchema({
    query: queryType,
    mutation: mutationType,
    subscription: subscriptionType,
    types: types,
    directives: directives
  });
}
/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

function cannotExecuteClientSchema() {
  throw new Error('Client Schema cannot use Interface or Union types for execution.');
}

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Source = undefined;

var _invariant = __webpack_require__(4);

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * A representation of source input to GraphQL.
 * `name` and `locationOffset` are optional. They are useful for clients who
 * store GraphQL documents in source files; for example, if the GraphQL input
 * starts at line 40 in a file named Foo.graphql, it might be useful for name to
 * be "Foo.graphql" and location to be `{ line: 40, column: 0 }`.
 * line and column in locationOffset are 1-indexed
 */
var Source = exports.Source = function Source(body, name, locationOffset) {
  _classCallCheck(this, Source);

  this.body = body;
  this.name = name || 'GraphQL request';
  this.locationOffset = locationOffset || { line: 1, column: 1 };
  !(this.locationOffset.line > 0) ? (0, _invariant2.default)(0, 'line in locationOffset is 1-indexed and must be positive') : void 0;
  !(this.locationOffset.column > 0) ? (0, _invariant2.default)(0, 'column in locationOffset is 1-indexed and must be positive') : void 0;
};

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.syntaxError = syntaxError;

var _location = __webpack_require__(55);

var _GraphQLError = __webpack_require__(23);

/**
 * Produces a GraphQLError representing a syntax error, containing useful
 * descriptive information about the syntax error's position in the source.
 */

/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

function syntaxError(source, position, description) {
  var location = (0, _location.getLocation)(source, position);
  var line = location.line + source.locationOffset.line - 1;
  var columnOffset = getColumnOffset(source, location);
  var column = location.column + columnOffset;
  var error = new _GraphQLError.GraphQLError('Syntax Error ' + source.name + ' (' + line + ':' + column + ') ' + description + '\n\n' + highlightSourceAtLocation(source, location), undefined, source, [position]);
  return error;
}

/**
 * Render a helpful description of the location of the error in the GraphQL
 * Source document.
 */
function highlightSourceAtLocation(source, location) {
  var line = location.line;
  var lineOffset = source.locationOffset.line - 1;
  var columnOffset = getColumnOffset(source, location);
  var contextLine = line + lineOffset;
  var prevLineNum = (contextLine - 1).toString();
  var lineNum = contextLine.toString();
  var nextLineNum = (contextLine + 1).toString();
  var padLen = nextLineNum.length;
  var lines = source.body.split(/\r\n|[\n\r]/g);
  lines[0] = whitespace(source.locationOffset.column - 1) + lines[0];
  return (line >= 2 ? lpad(padLen, prevLineNum) + ': ' + lines[line - 2] + '\n' : '') + lpad(padLen, lineNum) + ': ' + lines[line - 1] + '\n' + whitespace(2 + padLen + location.column - 1 + columnOffset) + '^\n' + (line < lines.length ? lpad(padLen, nextLineNum) + ': ' + lines[line] + '\n' : '');
}

function getColumnOffset(source, location) {
  return location.line === 1 ? source.locationOffset.column - 1 : 0;
}

function whitespace(len) {
  return Array(len + 1).join(' ');
}

function lpad(len, str) {
  return whitespace(len - str.length) + str;
}

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.locatedError = locatedError;

var _GraphQLError = __webpack_require__(23);

/**
 * Given an arbitrary Error, presumably thrown while attempting to execute a
 * GraphQL operation, produce a new GraphQLError aware of the location in the
 * document responsible for the original Error.
 */
function locatedError(originalError, nodes, path) {
  // Note: this uses a brand-check to support GraphQL errors originating from
  // other contexts.
  if (originalError && originalError.path) {
    return originalError;
  }

  var message = originalError ? originalError.message || String(originalError) : 'An unknown error occurred.';
  return new _GraphQLError.GraphQLError(message, originalError && originalError.nodes || nodes, originalError && originalError.source, originalError && originalError.positions, path, originalError);
}
/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatError = formatError;

var _invariant = __webpack_require__(4);

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Given a GraphQLError, format it according to the rules described by the
 * Response Format, Errors section of the GraphQL Specification.
 */
function formatError(error) {
  !error ? (0, _invariant2.default)(0, 'Received null or undefined error.') : void 0;
  return {
    message: error.message,
    locations: error.locations,
    path: error.path
  };
}
/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

exports.getVariableValues = getVariableValues;
exports.getArgumentValues = getArgumentValues;
exports.getDirectiveValues = getDirectiveValues;
exports.coerceValue = coerceValue;

var _iterall = __webpack_require__(37);

var _error = __webpack_require__(35);

var _find = __webpack_require__(39);

var _find2 = _interopRequireDefault(_find);

var _invariant = __webpack_require__(4);

var _invariant2 = _interopRequireDefault(_invariant);

var _isNullish = __webpack_require__(14);

var _isNullish2 = _interopRequireDefault(_isNullish);

var _isInvalid = __webpack_require__(22);

var _isInvalid2 = _interopRequireDefault(_isInvalid);

var _keyMap = __webpack_require__(20);

var _keyMap2 = _interopRequireDefault(_keyMap);

var _typeFromAST = __webpack_require__(40);

var _valueFromAST = __webpack_require__(21);

var _isValidJSValue = __webpack_require__(59);

var _isValidLiteralValue = __webpack_require__(60);

var _kinds = __webpack_require__(10);

var Kind = _interopRequireWildcard(_kinds);

var _printer = __webpack_require__(29);

var _definition = __webpack_require__(2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Prepares an object map of variableValues of the correct type based on the
 * provided variable definitions and arbitrary input. If the input cannot be
 * parsed to match the variable definitions, a GraphQLError will be thrown.
 */
function getVariableValues(schema, varDefNodes, inputs) {
  var coercedValues = Object.create(null);
  for (var i = 0; i < varDefNodes.length; i++) {
    var varDefNode = varDefNodes[i];
    var varName = varDefNode.variable.name.value;
    var varType = (0, _typeFromAST.typeFromAST)(schema, varDefNode.type);
    if (!(0, _definition.isInputType)(varType)) {
      throw new _error.GraphQLError('Variable "$' + varName + '" expected value of type ' + ('"' + (0, _printer.print)(varDefNode.type) + '" which cannot be used as an input type.'), [varDefNode.type]);
    }

    var value = inputs[varName];
    if ((0, _isInvalid2.default)(value)) {
      var defaultValue = varDefNode.defaultValue;
      if (defaultValue) {
        coercedValues[varName] = (0, _valueFromAST.valueFromAST)(defaultValue, varType);
      }
      if (varType instanceof _definition.GraphQLNonNull) {
        throw new _error.GraphQLError('Variable "$' + varName + '" of required type ' + ('"' + String(varType) + '" was not provided.'), [varDefNode]);
      }
    } else {
      var errors = (0, _isValidJSValue.isValidJSValue)(value, varType);
      if (errors.length) {
        var message = errors ? '\n' + errors.join('\n') : '';
        throw new _error.GraphQLError('Variable "$' + varName + '" got invalid value ' + (JSON.stringify(value) + '.' + message), [varDefNode]);
      }

      var coercedValue = coerceValue(varType, value);
      !!(0, _isInvalid2.default)(coercedValue) ? (0, _invariant2.default)(0, 'Should have reported error.') : void 0;
      coercedValues[varName] = coercedValue;
    }
  }
  return coercedValues;
}

/**
 * Prepares an object map of argument values given a list of argument
 * definitions and list of argument AST nodes.
 */
function getArgumentValues(def, node, variableValues) {
  var argDefs = def.args;
  var argNodes = node.arguments;
  if (!argDefs || !argNodes) {
    return {};
  }
  var coercedValues = Object.create(null);
  var argNodeMap = (0, _keyMap2.default)(argNodes, function (arg) {
    return arg.name.value;
  });
  for (var i = 0; i < argDefs.length; i++) {
    var argDef = argDefs[i];
    var name = argDef.name;
    var argType = argDef.type;
    var argumentNode = argNodeMap[name];
    var defaultValue = argDef.defaultValue;
    if (!argumentNode) {
      if (!(0, _isInvalid2.default)(defaultValue)) {
        coercedValues[name] = defaultValue;
      } else if (argType instanceof _definition.GraphQLNonNull) {
        throw new _error.GraphQLError('Argument "' + name + '" of required type ' + ('"' + String(argType) + '" was not provided.'), [node]);
      }
    } else if (argumentNode.value.kind === Kind.VARIABLE) {
      var variableName = argumentNode.value.name.value;
      if (variableValues && !(0, _isInvalid2.default)(variableValues[variableName])) {
        // Note: this does not check that this variable value is correct.
        // This assumes that this query has been validated and the variable
        // usage here is of the correct type.
        coercedValues[name] = variableValues[variableName];
      } else if (!(0, _isInvalid2.default)(defaultValue)) {
        coercedValues[name] = defaultValue;
      } else if (argType instanceof _definition.GraphQLNonNull) {
        throw new _error.GraphQLError('Argument "' + name + '" of required type "' + String(argType) + '" was ' + ('provided the variable "$' + variableName + '" which was not provided ') + 'a runtime value.', [argumentNode.value]);
      }
    } else {
      var valueNode = argumentNode.value;
      var coercedValue = (0, _valueFromAST.valueFromAST)(valueNode, argType, variableValues);
      if ((0, _isInvalid2.default)(coercedValue)) {
        var errors = (0, _isValidLiteralValue.isValidLiteralValue)(argType, valueNode);
        var message = errors ? '\n' + errors.join('\n') : '';
        throw new _error.GraphQLError('Argument "' + name + '" got invalid value ' + (0, _printer.print)(valueNode) + '.' + message, [argumentNode.value]);
      }
      coercedValues[name] = coercedValue;
    }
  }
  return coercedValues;
}

/**
 * Prepares an object map of argument values given a directive definition
 * and a AST node which may contain directives. Optionally also accepts a map
 * of variable values.
 *
 * If the directive does not exist on the node, returns undefined.
 */
function getDirectiveValues(directiveDef, node, variableValues) {
  var directiveNode = node.directives && (0, _find2.default)(node.directives, function (directive) {
    return directive.name.value === directiveDef.name;
  });

  if (directiveNode) {
    return getArgumentValues(directiveDef, directiveNode, variableValues);
  }
}

/**
 * Given a type and any value, return a runtime value coerced to match the type.
 */
function coerceValue(type, value) {
  // Ensure flow knows that we treat function params as const.
  var _value = value;

  if ((0, _isInvalid2.default)(_value)) {
    return; // Intentionally return no value.
  }

  if (type instanceof _definition.GraphQLNonNull) {
    if (_value === null) {
      return; // Intentionally return no value.
    }
    return coerceValue(type.ofType, _value);
  }

  if (_value === null) {
    // Intentionally return the value null.
    return null;
  }

  if (type instanceof _definition.GraphQLList) {
    var itemType = type.ofType;
    if ((0, _iterall.isCollection)(_value)) {
      var coercedValues = [];
      var valueIter = (0, _iterall.createIterator)(_value);
      if (!valueIter) {
        return; // Intentionally return no value.
      }
      var step = void 0;
      while (!(step = valueIter.next()).done) {
        var itemValue = coerceValue(itemType, step.value);
        if ((0, _isInvalid2.default)(itemValue)) {
          return; // Intentionally return no value.
        }
        coercedValues.push(itemValue);
      }
      return coercedValues;
    }
    var coercedValue = coerceValue(itemType, _value);
    if ((0, _isInvalid2.default)(coercedValue)) {
      return; // Intentionally return no value.
    }
    return [coerceValue(itemType, _value)];
  }

  if (type instanceof _definition.GraphQLInputObjectType) {
    if ((typeof _value === 'undefined' ? 'undefined' : _typeof(_value)) !== 'object') {
      return; // Intentionally return no value.
    }
    var coercedObj = Object.create(null);
    var fields = type.getFields();
    var fieldNames = Object.keys(fields);
    for (var i = 0; i < fieldNames.length; i++) {
      var fieldName = fieldNames[i];
      var field = fields[fieldName];
      if ((0, _isInvalid2.default)(_value[fieldName])) {
        if (!(0, _isInvalid2.default)(field.defaultValue)) {
          coercedObj[fieldName] = field.defaultValue;
        } else if (field.type instanceof _definition.GraphQLNonNull) {
          return; // Intentionally return no value.
        }
        continue;
      }
      var fieldValue = coerceValue(field.type, _value[fieldName]);
      if ((0, _isInvalid2.default)(fieldValue)) {
        return; // Intentionally return no value.
      }
      coercedObj[fieldName] = fieldValue;
    }
    return coercedObj;
  }

  !(type instanceof _definition.GraphQLScalarType || type instanceof _definition.GraphQLEnumType) ? (0, _invariant2.default)(0, 'Must be input type') : void 0;

  var parsed = type.parseValue(_value);
  if ((0, _isNullish2.default)(parsed)) {
    // null or invalid values represent a failure to parse correctly,
    // in which case no value is returned.
    return;
  }

  return parsed;
}

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extendSchema = extendSchema;

var _invariant = __webpack_require__(4);

var _invariant2 = _interopRequireDefault(_invariant);

var _keyMap = __webpack_require__(20);

var _keyMap2 = _interopRequireDefault(_keyMap);

var _keyValMap = __webpack_require__(33);

var _keyValMap2 = _interopRequireDefault(_keyValMap);

var _buildASTSchema = __webpack_require__(58);

var _valueFromAST = __webpack_require__(21);

var _GraphQLError = __webpack_require__(23);

var _schema = __webpack_require__(24);

var _definition = __webpack_require__(2);

var _directives = __webpack_require__(15);

var _introspection = __webpack_require__(25);

var _scalars = __webpack_require__(13);

var _kinds = __webpack_require__(10);

var Kind = _interopRequireWildcard(_kinds);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Produces a new schema given an existing schema and a document which may
 * contain GraphQL type extensions and definitions. The original schema will
 * remain unaltered.
 *
 * Because a schema represents a graph of references, a schema cannot be
 * extended without effectively making an entire copy. We do not know until it's
 * too late if subgraphs remain unchanged.
 *
 * This algorithm copies the provided schema, applying extensions while
 * producing the copy. The original schema remains unaltered.
 */

/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

function extendSchema(schema, documentAST) {
  !(schema instanceof _schema.GraphQLSchema) ? (0, _invariant2.default)(0, 'Must provide valid GraphQLSchema') : void 0;

  !(documentAST && documentAST.kind === Kind.DOCUMENT) ? (0, _invariant2.default)(0, 'Must provide valid Document AST') : void 0;

  // Collect the type definitions and extensions found in the document.
  var typeDefinitionMap = Object.create(null);
  var typeExtensionsMap = Object.create(null);

  // New directives and types are separate because a directives and types can
  // have the same name. For example, a type named "skip".
  var directiveDefinitions = [];

  for (var i = 0; i < documentAST.definitions.length; i++) {
    var def = documentAST.definitions[i];
    switch (def.kind) {
      case Kind.OBJECT_TYPE_DEFINITION:
      case Kind.INTERFACE_TYPE_DEFINITION:
      case Kind.ENUM_TYPE_DEFINITION:
      case Kind.UNION_TYPE_DEFINITION:
      case Kind.SCALAR_TYPE_DEFINITION:
      case Kind.INPUT_OBJECT_TYPE_DEFINITION:
        // Sanity check that none of the defined types conflict with the
        // schema's existing types.
        var typeName = def.name.value;
        if (schema.getType(typeName)) {
          throw new _GraphQLError.GraphQLError('Type "' + typeName + '" already exists in the schema. It cannot also ' + 'be defined in this type definition.', [def]);
        }
        typeDefinitionMap[typeName] = def;
        break;
      case Kind.TYPE_EXTENSION_DEFINITION:
        // Sanity check that this type extension exists within the
        // schema's existing types.
        var extendedTypeName = def.definition.name.value;
        var existingType = schema.getType(extendedTypeName);
        if (!existingType) {
          throw new _GraphQLError.GraphQLError('Cannot extend type "' + extendedTypeName + '" because it does not ' + 'exist in the existing schema.', [def.definition]);
        }
        if (!(existingType instanceof _definition.GraphQLObjectType)) {
          throw new _GraphQLError.GraphQLError('Cannot extend non-object type "' + extendedTypeName + '".', [def.definition]);
        }
        var extensions = typeExtensionsMap[extendedTypeName];
        if (extensions) {
          extensions.push(def);
        } else {
          extensions = [def];
        }
        typeExtensionsMap[extendedTypeName] = extensions;
        break;
      case Kind.DIRECTIVE_DEFINITION:
        var directiveName = def.name.value;
        var existingDirective = schema.getDirective(directiveName);
        if (existingDirective) {
          throw new _GraphQLError.GraphQLError('Directive "' + directiveName + '" already exists in the schema. It ' + 'cannot be redefined.', [def]);
        }
        directiveDefinitions.push(def);
        break;
    }
  }

  // If this document contains no new types, extensions, or directives then
  // return the same unmodified GraphQLSchema instance.
  if (Object.keys(typeExtensionsMap).length === 0 && Object.keys(typeDefinitionMap).length === 0 && directiveDefinitions.length === 0) {
    return schema;
  }

  // A cache to use to store the actual GraphQLType definition objects by name.
  // Initialize to the GraphQL built in scalars and introspection types. All
  // functions below are inline so that this type def cache is within the scope
  // of the closure.
  var typeDefCache = {
    String: _scalars.GraphQLString,
    Int: _scalars.GraphQLInt,
    Float: _scalars.GraphQLFloat,
    Boolean: _scalars.GraphQLBoolean,
    ID: _scalars.GraphQLID,
    __Schema: _introspection.__Schema,
    __Directive: _introspection.__Directive,
    __DirectiveLocation: _introspection.__DirectiveLocation,
    __Type: _introspection.__Type,
    __Field: _introspection.__Field,
    __InputValue: _introspection.__InputValue,
    __EnumValue: _introspection.__EnumValue,
    __TypeKind: _introspection.__TypeKind
  };

  // Get the root Query, Mutation, and Subscription object types.
  var queryType = getTypeFromDef(schema.getQueryType());

  var existingMutationType = schema.getMutationType();
  var mutationType = existingMutationType ? getTypeFromDef(existingMutationType) : null;

  var existingSubscriptionType = schema.getSubscriptionType();
  var subscriptionType = existingSubscriptionType ? getTypeFromDef(existingSubscriptionType) : null;

  // Iterate through all types, getting the type definition for each, ensuring
  // that any type not directly referenced by a field will get created.
  var typeMap = schema.getTypeMap();
  var types = Object.keys(typeMap).map(function (typeName) {
    return getTypeFromDef(typeMap[typeName]);
  });

  // Do the same with new types, appending to the list of defined types.
  Object.keys(typeDefinitionMap).forEach(function (typeName) {
    types.push(getTypeFromAST(typeDefinitionMap[typeName]));
  });

  // Then produce and return a Schema with these types.
  return new _schema.GraphQLSchema({
    query: queryType,
    mutation: mutationType,
    subscription: subscriptionType,
    types: types,
    directives: getMergedDirectives(),
    astNode: schema.astNode
  });

  // Below are functions used for producing this schema that have closed over
  // this scope and have access to the schema, cache, and newly defined types.

  function getMergedDirectives() {
    var existingDirectives = schema.getDirectives();
    !existingDirectives ? (0, _invariant2.default)(0, 'schema must have default directives') : void 0;

    var newDirectives = directiveDefinitions.map(function (directiveNode) {
      return getDirective(directiveNode);
    });
    return existingDirectives.concat(newDirectives);
  }

  function getTypeFromDef(typeDef) {
    var type = _getNamedType(typeDef.name);
    !type ? (0, _invariant2.default)(0, 'Missing type from schema') : void 0;
    return type;
  }

  function getTypeFromAST(node) {
    var type = _getNamedType(node.name.value);
    if (!type) {
      throw new _GraphQLError.GraphQLError('Unknown type: "' + node.name.value + '". Ensure that this type exists ' + 'either in the original schema, or is added in a type definition.', [node]);
    }
    return type;
  }

  function getObjectTypeFromAST(node) {
    var type = getTypeFromAST(node);
    !(type instanceof _definition.GraphQLObjectType) ? (0, _invariant2.default)(0, 'Must be Object type.') : void 0;
    return type;
  }

  function getInterfaceTypeFromAST(node) {
    var type = getTypeFromAST(node);
    !(type instanceof _definition.GraphQLInterfaceType) ? (0, _invariant2.default)(0, 'Must be Interface type.') : void 0;
    return type;
  }

  function getInputTypeFromAST(node) {
    return (0, _definition.assertInputType)(getTypeFromAST(node));
  }

  function getOutputTypeFromAST(node) {
    return (0, _definition.assertOutputType)(getTypeFromAST(node));
  }

  // Given a name, returns a type from either the existing schema or an
  // added type.
  function _getNamedType(typeName) {
    var cachedTypeDef = typeDefCache[typeName];
    if (cachedTypeDef) {
      return cachedTypeDef;
    }

    var existingType = schema.getType(typeName);
    if (existingType) {
      var typeDef = extendType(existingType);
      typeDefCache[typeName] = typeDef;
      return typeDef;
    }

    var typeNode = typeDefinitionMap[typeName];
    if (typeNode) {
      var _typeDef = buildType(typeNode);
      typeDefCache[typeName] = _typeDef;
      return _typeDef;
    }
  }

  // Given a type's introspection result, construct the correct
  // GraphQLType instance.
  function extendType(type) {
    if (type instanceof _definition.GraphQLObjectType) {
      return extendObjectType(type);
    }
    if (type instanceof _definition.GraphQLInterfaceType) {
      return extendInterfaceType(type);
    }
    if (type instanceof _definition.GraphQLUnionType) {
      return extendUnionType(type);
    }
    return type;
  }

  function extendObjectType(type) {
    var name = type.name;
    var extensionASTNodes = type.extensionASTNodes;
    if (typeExtensionsMap[name]) {
      extensionASTNodes = extensionASTNodes.concat(typeExtensionsMap[name]);
    }

    return new _definition.GraphQLObjectType({
      name: name,
      description: type.description,
      interfaces: function interfaces() {
        return extendImplementedInterfaces(type);
      },
      fields: function fields() {
        return extendFieldMap(type);
      },
      astNode: type.astNode,
      extensionASTNodes: extensionASTNodes,
      isTypeOf: type.isTypeOf
    });
  }

  function extendInterfaceType(type) {
    return new _definition.GraphQLInterfaceType({
      name: type.name,
      description: type.description,
      fields: function fields() {
        return extendFieldMap(type);
      },
      astNode: type.astNode,
      resolveType: type.resolveType
    });
  }

  function extendUnionType(type) {
    return new _definition.GraphQLUnionType({
      name: type.name,
      description: type.description,
      types: type.getTypes().map(getTypeFromDef),
      astNode: type.astNode,
      resolveType: type.resolveType
    });
  }

  function extendImplementedInterfaces(type) {
    var interfaces = type.getInterfaces().map(getTypeFromDef);

    // If there are any extensions to the interfaces, apply those here.
    var extensions = typeExtensionsMap[type.name];
    if (extensions) {
      extensions.forEach(function (extension) {
        extension.definition.interfaces.forEach(function (namedType) {
          var interfaceName = namedType.name.value;
          if (interfaces.some(function (def) {
            return def.name === interfaceName;
          })) {
            throw new _GraphQLError.GraphQLError('Type "' + type.name + '" already implements "' + interfaceName + '". ' + 'It cannot also be implemented in this type extension.', [namedType]);
          }
          interfaces.push(getInterfaceTypeFromAST(namedType));
        });
      });
    }

    return interfaces;
  }

  function extendFieldMap(type) {
    var newFieldMap = Object.create(null);
    var oldFieldMap = type.getFields();
    Object.keys(oldFieldMap).forEach(function (fieldName) {
      var field = oldFieldMap[fieldName];
      newFieldMap[fieldName] = {
        description: field.description,
        deprecationReason: field.deprecationReason,
        type: extendFieldType(field.type),
        args: (0, _keyMap2.default)(field.args, function (arg) {
          return arg.name;
        }),
        astNode: field.astNode,
        resolve: field.resolve
      };
    });

    // If there are any extensions to the fields, apply those here.
    var extensions = typeExtensionsMap[type.name];
    if (extensions) {
      extensions.forEach(function (extension) {
        extension.definition.fields.forEach(function (field) {
          var fieldName = field.name.value;
          if (oldFieldMap[fieldName]) {
            throw new _GraphQLError.GraphQLError('Field "' + type.name + '.' + fieldName + '" already exists in the ' + 'schema. It cannot also be defined in this type extension.', [field]);
          }
          newFieldMap[fieldName] = {
            description: (0, _buildASTSchema.getDescription)(field),
            type: buildOutputFieldType(field.type),
            args: buildInputValues(field.arguments),
            deprecationReason: (0, _buildASTSchema.getDeprecationReason)(field),
            astNode: field
          };
        });
      });
    }

    return newFieldMap;
  }

  function extendFieldType(typeDef) {
    if (typeDef instanceof _definition.GraphQLList) {
      return new _definition.GraphQLList(extendFieldType(typeDef.ofType));
    }
    if (typeDef instanceof _definition.GraphQLNonNull) {
      return new _definition.GraphQLNonNull(extendFieldType(typeDef.ofType));
    }
    return getTypeFromDef(typeDef);
  }

  function buildType(typeNode) {
    switch (typeNode.kind) {
      case Kind.OBJECT_TYPE_DEFINITION:
        return buildObjectType(typeNode);
      case Kind.INTERFACE_TYPE_DEFINITION:
        return buildInterfaceType(typeNode);
      case Kind.UNION_TYPE_DEFINITION:
        return buildUnionType(typeNode);
      case Kind.SCALAR_TYPE_DEFINITION:
        return buildScalarType(typeNode);
      case Kind.ENUM_TYPE_DEFINITION:
        return buildEnumType(typeNode);
      case Kind.INPUT_OBJECT_TYPE_DEFINITION:
        return buildInputObjectType(typeNode);
    }
    throw new TypeError('Unknown type kind ' + typeNode.kind);
  }

  function buildObjectType(typeNode) {
    return new _definition.GraphQLObjectType({
      name: typeNode.name.value,
      description: (0, _buildASTSchema.getDescription)(typeNode),
      interfaces: function interfaces() {
        return buildImplementedInterfaces(typeNode);
      },
      fields: function fields() {
        return buildFieldMap(typeNode);
      },
      astNode: typeNode
    });
  }

  function buildInterfaceType(typeNode) {
    return new _definition.GraphQLInterfaceType({
      name: typeNode.name.value,
      description: (0, _buildASTSchema.getDescription)(typeNode),
      fields: function fields() {
        return buildFieldMap(typeNode);
      },
      astNode: typeNode,
      resolveType: cannotExecuteExtendedSchema
    });
  }

  function buildUnionType(typeNode) {
    return new _definition.GraphQLUnionType({
      name: typeNode.name.value,
      description: (0, _buildASTSchema.getDescription)(typeNode),
      types: typeNode.types.map(getObjectTypeFromAST),
      astNode: typeNode,
      resolveType: cannotExecuteExtendedSchema
    });
  }

  function buildScalarType(typeNode) {
    return new _definition.GraphQLScalarType({
      name: typeNode.name.value,
      description: (0, _buildASTSchema.getDescription)(typeNode),
      astNode: typeNode,
      serialize: function serialize(id) {
        return id;
      },
      // Note: validation calls the parse functions to determine if a
      // literal value is correct. Returning null would cause use of custom
      // scalars to always fail validation. Returning false causes them to
      // always pass validation.
      parseValue: function parseValue() {
        return false;
      },
      parseLiteral: function parseLiteral() {
        return false;
      }
    });
  }

  function buildEnumType(typeNode) {
    return new _definition.GraphQLEnumType({
      name: typeNode.name.value,
      description: (0, _buildASTSchema.getDescription)(typeNode),
      values: (0, _keyValMap2.default)(typeNode.values, function (enumValue) {
        return enumValue.name.value;
      }, function (enumValue) {
        return {
          description: (0, _buildASTSchema.getDescription)(enumValue),
          deprecationReason: (0, _buildASTSchema.getDeprecationReason)(enumValue),
          astNode: enumValue
        };
      }),
      astNode: typeNode
    });
  }

  function buildInputObjectType(typeNode) {
    return new _definition.GraphQLInputObjectType({
      name: typeNode.name.value,
      description: (0, _buildASTSchema.getDescription)(typeNode),
      fields: function fields() {
        return buildInputValues(typeNode.fields);
      },
      astNode: typeNode
    });
  }

  function getDirective(directiveNode) {
    return new _directives.GraphQLDirective({
      name: directiveNode.name.value,
      description: (0, _buildASTSchema.getDescription)(directiveNode),
      locations: directiveNode.locations.map(function (node) {
        return node.value;
      }),
      args: directiveNode.arguments && buildInputValues(directiveNode.arguments),
      astNode: directiveNode
    });
  }

  function buildImplementedInterfaces(typeNode) {
    return typeNode.interfaces && typeNode.interfaces.map(getInterfaceTypeFromAST);
  }

  function buildFieldMap(typeNode) {
    return (0, _keyValMap2.default)(typeNode.fields, function (field) {
      return field.name.value;
    }, function (field) {
      return {
        type: buildOutputFieldType(field.type),
        description: (0, _buildASTSchema.getDescription)(field),
        args: buildInputValues(field.arguments),
        deprecationReason: (0, _buildASTSchema.getDeprecationReason)(field),
        astNode: field
      };
    });
  }

  function buildInputValues(values) {
    return (0, _keyValMap2.default)(values, function (value) {
      return value.name.value;
    }, function (value) {
      var type = buildInputFieldType(value.type);
      return {
        type: type,
        description: (0, _buildASTSchema.getDescription)(value),
        defaultValue: (0, _valueFromAST.valueFromAST)(value.defaultValue, type),
        astNode: value
      };
    });
  }

  function buildInputFieldType(typeNode) {
    if (typeNode.kind === Kind.LIST_TYPE) {
      return new _definition.GraphQLList(buildInputFieldType(typeNode.type));
    }
    if (typeNode.kind === Kind.NON_NULL_TYPE) {
      var nullableType = buildInputFieldType(typeNode.type);
      !!(nullableType instanceof _definition.GraphQLNonNull) ? (0, _invariant2.default)(0, 'Must be nullable') : void 0;
      return new _definition.GraphQLNonNull(nullableType);
    }
    return getInputTypeFromAST(typeNode);
  }

  function buildOutputFieldType(typeNode) {
    if (typeNode.kind === Kind.LIST_TYPE) {
      return new _definition.GraphQLList(buildOutputFieldType(typeNode.type));
    }
    if (typeNode.kind === Kind.NON_NULL_TYPE) {
      var nullableType = buildOutputFieldType(typeNode.type);
      !!(nullableType instanceof _definition.GraphQLNonNull) ? (0, _invariant2.default)(0, 'Must be nullable') : void 0;
      return new _definition.GraphQLNonNull(nullableType);
    }
    return getOutputTypeFromAST(typeNode);
  }
}

function cannotExecuteExtendedSchema() {
  throw new Error('Extended Schema cannot use Interface or Union types for execution.');
}

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.printSchema = printSchema;
exports.printIntrospectionSchema = printIntrospectionSchema;
exports.printType = printType;

var _invariant = __webpack_require__(4);

var _invariant2 = _interopRequireDefault(_invariant);

var _isNullish = __webpack_require__(14);

var _isNullish2 = _interopRequireDefault(_isNullish);

var _isInvalid = __webpack_require__(22);

var _isInvalid2 = _interopRequireDefault(_isInvalid);

var _astFromValue = __webpack_require__(36);

var _printer = __webpack_require__(29);

var _definition = __webpack_require__(2);

var _scalars = __webpack_require__(13);

var _directives = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

function printSchema(schema) {
  return printFilteredSchema(schema, function (n) {
    return !isSpecDirective(n);
  }, isDefinedType);
}

function printIntrospectionSchema(schema) {
  return printFilteredSchema(schema, isSpecDirective, isIntrospectionType);
}

function isSpecDirective(directiveName) {
  return directiveName === 'skip' || directiveName === 'include' || directiveName === 'deprecated';
}

function isDefinedType(typename) {
  return !isIntrospectionType(typename) && !isBuiltInScalar(typename);
}

function isIntrospectionType(typename) {
  return typename.indexOf('__') === 0;
}

function isBuiltInScalar(typename) {
  return typename === 'String' || typename === 'Boolean' || typename === 'Int' || typename === 'Float' || typename === 'ID';
}

function printFilteredSchema(schema, directiveFilter, typeFilter) {
  var directives = schema.getDirectives().filter(function (directive) {
    return directiveFilter(directive.name);
  });
  var typeMap = schema.getTypeMap();
  var types = Object.keys(typeMap).filter(typeFilter).sort(function (name1, name2) {
    return name1.localeCompare(name2);
  }).map(function (typeName) {
    return typeMap[typeName];
  });

  return [printSchemaDefinition(schema)].concat(directives.map(printDirective), types.map(printType)).filter(Boolean).join('\n\n') + '\n';
}

function printSchemaDefinition(schema) {
  if (isSchemaOfCommonNames(schema)) {
    return;
  }

  var operationTypes = [];

  var queryType = schema.getQueryType();
  if (queryType) {
    operationTypes.push('  query: ' + queryType.name);
  }

  var mutationType = schema.getMutationType();
  if (mutationType) {
    operationTypes.push('  mutation: ' + mutationType.name);
  }

  var subscriptionType = schema.getSubscriptionType();
  if (subscriptionType) {
    operationTypes.push('  subscription: ' + subscriptionType.name);
  }

  return 'schema {\n' + operationTypes.join('\n') + '\n}';
}

/**
 * GraphQL schema define root types for each type of operation. These types are
 * the same as any other type and can be named in any manner, however there is
 * a common naming convention:
 *
 *   schema {
 *     query: Query
 *     mutation: Mutation
 *   }
 *
 * When using this naming convention, the schema description can be omitted.
 */
function isSchemaOfCommonNames(schema) {
  var queryType = schema.getQueryType();
  if (queryType && queryType.name !== 'Query') {
    return false;
  }

  var mutationType = schema.getMutationType();
  if (mutationType && mutationType.name !== 'Mutation') {
    return false;
  }

  var subscriptionType = schema.getSubscriptionType();
  if (subscriptionType && subscriptionType.name !== 'Subscription') {
    return false;
  }

  return true;
}

function printType(type) {
  if (type instanceof _definition.GraphQLScalarType) {
    return printScalar(type);
  } else if (type instanceof _definition.GraphQLObjectType) {
    return printObject(type);
  } else if (type instanceof _definition.GraphQLInterfaceType) {
    return printInterface(type);
  } else if (type instanceof _definition.GraphQLUnionType) {
    return printUnion(type);
  } else if (type instanceof _definition.GraphQLEnumType) {
    return printEnum(type);
  }
  !(type instanceof _definition.GraphQLInputObjectType) ? (0, _invariant2.default)(0) : void 0;
  return printInputObject(type);
}

function printScalar(type) {
  return printDescription(type) + ('scalar ' + type.name);
}

function printObject(type) {
  var interfaces = type.getInterfaces();
  var implementedInterfaces = interfaces.length ? ' implements ' + interfaces.map(function (i) {
    return i.name;
  }).join(', ') : '';
  return printDescription(type) + ('type ' + type.name + implementedInterfaces + ' {\n') + printFields(type) + '\n' + '}';
}

function printInterface(type) {
  return printDescription(type) + ('interface ' + type.name + ' {\n') + printFields(type) + '\n' + '}';
}

function printUnion(type) {
  return printDescription(type) + ('union ' + type.name + ' = ' + type.getTypes().join(' | '));
}

function printEnum(type) {
  return printDescription(type) + ('enum ' + type.name + ' {\n') + printEnumValues(type.getValues()) + '\n' + '}';
}

function printEnumValues(values) {
  return values.map(function (value, i) {
    return printDescription(value, '  ', !i) + '  ' + value.name + printDeprecated(value);
  }).join('\n');
}

function printInputObject(type) {
  var fieldMap = type.getFields();
  var fields = Object.keys(fieldMap).map(function (fieldName) {
    return fieldMap[fieldName];
  });
  return printDescription(type) + ('input ' + type.name + ' {\n') + fields.map(function (f, i) {
    return printDescription(f, '  ', !i) + '  ' + printInputValue(f);
  }).join('\n') + '\n' + '}';
}

function printFields(type) {
  var fieldMap = type.getFields();
  var fields = Object.keys(fieldMap).map(function (fieldName) {
    return fieldMap[fieldName];
  });
  return fields.map(function (f, i) {
    return printDescription(f, '  ', !i) + '  ' + f.name + printArgs(f.args, '  ') + ': ' + String(f.type) + printDeprecated(f);
  }).join('\n');
}

function printArgs(args) {
  var indentation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (args.length === 0) {
    return '';
  }

  // If every arg does not have a description, print them on one line.
  if (args.every(function (arg) {
    return !arg.description;
  })) {
    return '(' + args.map(printInputValue).join(', ') + ')';
  }

  return '(\n' + args.map(function (arg, i) {
    return printDescription(arg, '  ' + indentation, !i) + '  ' + indentation + printInputValue(arg);
  }).join('\n') + '\n' + indentation + ')';
}

function printInputValue(arg) {
  var argDecl = arg.name + ': ' + String(arg.type);
  if (!(0, _isInvalid2.default)(arg.defaultValue)) {
    argDecl += ' = ' + (0, _printer.print)((0, _astFromValue.astFromValue)(arg.defaultValue, arg.type));
  }
  return argDecl;
}

function printDirective(directive) {
  return printDescription(directive) + 'directive @' + directive.name + printArgs(directive.args) + ' on ' + directive.locations.join(' | ');
}

function printDeprecated(fieldOrEnumVal) {
  var reason = fieldOrEnumVal.deprecationReason;
  if ((0, _isNullish2.default)(reason)) {
    return '';
  }
  if (reason === '' || reason === _directives.DEFAULT_DEPRECATION_REASON) {
    return ' @deprecated';
  }
  return ' @deprecated(reason: ' + (0, _printer.print)((0, _astFromValue.astFromValue)(reason, _scalars.GraphQLString)) + ')';
}

function printDescription(def) {
  var indentation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var firstInBlock = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (!def.description) {
    return '';
  }
  var lines = def.description.split('\n');
  var description = indentation && !firstInBlock ? '\n' : '';
  for (var i = 0; i < lines.length; i++) {
    if (lines[i] === '') {
      description += indentation + '#\n';
    } else {
      // For > 120 character long lines, cut at space boundaries into sublines
      // of ~80 chars.
      var sublines = breakLine(lines[i], 120 - indentation.length);
      for (var j = 0; j < sublines.length; j++) {
        description += indentation + '# ' + sublines[j] + '\n';
      }
    }
  }
  return description;
}

function breakLine(line, len) {
  if (line.length < len + 5) {
    return [line];
  }
  var parts = line.split(new RegExp('((?: |^).{15,' + (len - 40) + '}(?= |$))'));
  if (parts.length < 4) {
    return [line];
  }
  var sublines = [parts[0] + parts[1] + parts[2]];
  for (var i = 3; i < parts.length; i += 2) {
    sublines.push(parts[i].slice(1) + parts[i + 1]);
  }
  return sublines;
}

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.concatAST = concatAST;


/**
 * Provided a collection of ASTs, presumably each from different files,
 * concatenate the ASTs together into batched AST, useful for validating many
 * GraphQL source files which together represent one conceptual application.
 */
function concatAST(asts) {
  var batchDefinitions = [];
  for (var i = 0; i < asts.length; i++) {
    var definitions = asts[i].definitions;
    for (var j = 0; j < definitions.length; j++) {
      batchDefinitions.push(definitions[j]);
    }
  }
  return {
    kind: 'Document',
    definitions: batchDefinitions
  };
}
/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.separateOperations = separateOperations;

var _visitor = __webpack_require__(38);

/**
 * separateOperations accepts a single AST document which may contain many
 * operations and fragments and returns a collection of AST documents each of
 * which contains a single operation as well the fragment definitions it
 * refers to.
 */
function separateOperations(documentAST) {

  var operations = [];
  var fragments = Object.create(null);
  var positions = new Map();
  var depGraph = Object.create(null);
  var fromName = void 0;
  var idx = 0;

  // Populate metadata and build a dependency graph.
  (0, _visitor.visit)(documentAST, {
    OperationDefinition: function OperationDefinition(node) {
      fromName = opName(node);
      operations.push(node);
      positions.set(node, idx++);
    },
    FragmentDefinition: function FragmentDefinition(node) {
      fromName = node.name.value;
      fragments[fromName] = node;
      positions.set(node, idx++);
    },
    FragmentSpread: function FragmentSpread(node) {
      var toName = node.name.value;
      (depGraph[fromName] || (depGraph[fromName] = Object.create(null)))[toName] = true;
    }
  });

  // For each operation, produce a new synthesized AST which includes only what
  // is necessary for completing that operation.
  var separatedDocumentASTs = Object.create(null);
  operations.forEach(function (operation) {
    var operationName = opName(operation);
    var dependencies = Object.create(null);
    collectTransitiveDependencies(dependencies, depGraph, operationName);

    // The list of definition nodes to be included for this operation, sorted
    // to retain the same order as the original document.
    var definitions = [operation];
    Object.keys(dependencies).forEach(function (name) {
      definitions.push(fragments[name]);
    });
    definitions.sort(function (n1, n2) {
      return (positions.get(n1) || 0) - (positions.get(n2) || 0);
    });

    separatedDocumentASTs[operationName] = {
      kind: 'Document',
      definitions: definitions
    };
  });

  return separatedDocumentASTs;
}
/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

// Provides the empty string for anonymous operations.
function opName(operation) {
  return operation.name ? operation.name.value : '';
}

// From a dependency graph, collects a list of transitive dependencies by
// recursing through a dependency graph.
function collectTransitiveDependencies(collected, depGraph, fromName) {
  var immediateDeps = depGraph[fromName];
  if (immediateDeps) {
    Object.keys(immediateDeps).forEach(function (toName) {
      if (!collected[toName]) {
        collected[toName] = true;
        collectTransitiveDependencies(collected, depGraph, toName);
      }
    });
  }
}

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DangerousChangeType = exports.BreakingChangeType = undefined;
exports.findBreakingChanges = findBreakingChanges;
exports.findDangerousChanges = findDangerousChanges;
exports.findRemovedTypes = findRemovedTypes;
exports.findTypesThatChangedKind = findTypesThatChangedKind;
exports.findArgChanges = findArgChanges;
exports.findFieldsThatChangedType = findFieldsThatChangedType;
exports.findFieldsThatChangedTypeOnInputObjectTypes = findFieldsThatChangedTypeOnInputObjectTypes;
exports.findTypesRemovedFromUnions = findTypesRemovedFromUnions;
exports.findTypesAddedToUnions = findTypesAddedToUnions;
exports.findValuesRemovedFromEnums = findValuesRemovedFromEnums;
exports.findValuesAddedToEnums = findValuesAddedToEnums;
exports.findInterfacesRemovedFromObjectTypes = findInterfacesRemovedFromObjectTypes;

var _definition = __webpack_require__(2);

var _schema = __webpack_require__(24);

/**
 *  Copyright (c) 2016, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

var BreakingChangeType = exports.BreakingChangeType = {
  FIELD_CHANGED_KIND: 'FIELD_CHANGED_KIND',
  FIELD_REMOVED: 'FIELD_REMOVED',
  TYPE_CHANGED_KIND: 'TYPE_CHANGED_KIND',
  TYPE_REMOVED: 'TYPE_REMOVED',
  TYPE_REMOVED_FROM_UNION: 'TYPE_REMOVED_FROM_UNION',
  VALUE_REMOVED_FROM_ENUM: 'VALUE_REMOVED_FROM_ENUM',
  ARG_REMOVED: 'ARG_REMOVED',
  ARG_CHANGED_KIND: 'ARG_CHANGED_KIND',
  NON_NULL_ARG_ADDED: 'NON_NULL_ARG_ADDED',
  NON_NULL_INPUT_FIELD_ADDED: 'NON_NULL_INPUT_FIELD_ADDED',
  INTERFACE_REMOVED_FROM_OBJECT: 'INTERFACE_REMOVED_FROM_OBJECT'
};

var DangerousChangeType = exports.DangerousChangeType = {
  ARG_DEFAULT_VALUE_CHANGE: 'ARG_DEFAULT_VALUE_CHANGE',
  VALUE_ADDED_TO_ENUM: 'VALUE_ADDED_TO_ENUM',
  TYPE_ADDED_TO_UNION: 'TYPE_ADDED_TO_UNION'
};

/**
 * Given two schemas, returns an Array containing descriptions of all the types
 * of breaking changes covered by the other functions down below.
 */
function findBreakingChanges(oldSchema, newSchema) {
  return [].concat(findRemovedTypes(oldSchema, newSchema), findTypesThatChangedKind(oldSchema, newSchema), findFieldsThatChangedType(oldSchema, newSchema), findTypesRemovedFromUnions(oldSchema, newSchema), findValuesRemovedFromEnums(oldSchema, newSchema), findArgChanges(oldSchema, newSchema).breakingChanges, findInterfacesRemovedFromObjectTypes(oldSchema, newSchema));
}

/**
 * Given two schemas, returns an Array containing descriptions of all the types
 * of potentially dangerous changes covered by the other functions down below.
 */
function findDangerousChanges(oldSchema, newSchema) {
  return [].concat(findArgChanges(oldSchema, newSchema).dangerousChanges, findValuesAddedToEnums(oldSchema, newSchema), findTypesAddedToUnions(oldSchema, newSchema));
}

/**
 * Given two schemas, returns an Array containing descriptions of any breaking
 * changes in the newSchema related to removing an entire type.
 */
function findRemovedTypes(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();

  var breakingChanges = [];
  Object.keys(oldTypeMap).forEach(function (typeName) {
    if (!newTypeMap[typeName]) {
      breakingChanges.push({
        type: BreakingChangeType.TYPE_REMOVED,
        description: typeName + ' was removed.'
      });
    }
  });
  return breakingChanges;
}

/**
 * Given two schemas, returns an Array containing descriptions of any breaking
 * changes in the newSchema related to changing the type of a type.
 */
function findTypesThatChangedKind(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();

  var breakingChanges = [];
  Object.keys(oldTypeMap).forEach(function (typeName) {
    if (!newTypeMap[typeName]) {
      return;
    }
    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];
    if (!(oldType instanceof newType.constructor)) {
      breakingChanges.push({
        type: BreakingChangeType.TYPE_CHANGED_KIND,
        description: typeName + ' changed from ' + (typeKindName(oldType) + ' to ' + typeKindName(newType) + '.')
      });
    }
  });
  return breakingChanges;
}

/**
 * Given two schemas, returns an Array containing descriptions of any
 * breaking or dangerous changes in the newSchema related to arguments
 * (such as removal or change of type of an argument, or a change in an
 * argument's default value).
 */
function findArgChanges(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();

  var breakingChanges = [];
  var dangerousChanges = [];

  Object.keys(oldTypeMap).forEach(function (typeName) {
    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];
    if (!(oldType instanceof _definition.GraphQLObjectType || oldType instanceof _definition.GraphQLInterfaceType) || !(newType instanceof oldType.constructor)) {
      return;
    }

    var oldTypeFields = oldType.getFields();
    var newTypeFields = newType.getFields();

    Object.keys(oldTypeFields).forEach(function (fieldName) {
      if (!newTypeFields[fieldName]) {
        return;
      }

      oldTypeFields[fieldName].args.forEach(function (oldArgDef) {
        var newArgs = newTypeFields[fieldName].args;
        var newArgDef = newArgs.find(function (arg) {
          return arg.name === oldArgDef.name;
        });

        // Arg not present
        if (!newArgDef) {
          breakingChanges.push({
            type: BreakingChangeType.ARG_REMOVED,
            description: oldType.name + '.' + fieldName + ' arg ' + (oldArgDef.name + ' was removed')
          });
        } else {
          var isSafe = isChangeSafeForInputObjectFieldOrFieldArg(oldArgDef.type, newArgDef.type);
          if (!isSafe) {
            breakingChanges.push({
              type: BreakingChangeType.ARG_CHANGED_KIND,
              description: oldType.name + '.' + fieldName + ' arg ' + (oldArgDef.name + ' has changed type from ') + (oldArgDef.type.toString() + ' to ' + newArgDef.type.toString())
            });
          } else if (oldArgDef.defaultValue !== undefined && oldArgDef.defaultValue !== newArgDef.defaultValue) {
            dangerousChanges.push({
              type: DangerousChangeType.ARG_DEFAULT_VALUE_CHANGE,
              description: oldType.name + '.' + fieldName + ' arg ' + (oldArgDef.name + ' has changed defaultValue')
            });
          }
        }
      });
      // Check if a non-null arg was added to the field
      newTypeFields[fieldName].args.forEach(function (newArgDef) {
        var oldArgs = oldTypeFields[fieldName].args;
        var oldArgDef = oldArgs.find(function (arg) {
          return arg.name === newArgDef.name;
        });
        if (!oldArgDef && newArgDef.type instanceof _definition.GraphQLNonNull) {
          breakingChanges.push({
            type: BreakingChangeType.NON_NULL_ARG_ADDED,
            description: 'A non-null arg ' + newArgDef.name + ' on ' + (newType.name + '.' + fieldName + ' was added')
          });
        }
      });
    });
  });

  return {
    breakingChanges: breakingChanges,
    dangerousChanges: dangerousChanges
  };
}

function typeKindName(type) {
  if (type instanceof _definition.GraphQLScalarType) {
    return 'a Scalar type';
  }
  if (type instanceof _definition.GraphQLObjectType) {
    return 'an Object type';
  }
  if (type instanceof _definition.GraphQLInterfaceType) {
    return 'an Interface type';
  }
  if (type instanceof _definition.GraphQLUnionType) {
    return 'a Union type';
  }
  if (type instanceof _definition.GraphQLEnumType) {
    return 'an Enum type';
  }
  if (type instanceof _definition.GraphQLInputObjectType) {
    return 'an Input type';
  }
  throw new TypeError('Unknown type ' + type.constructor.name);
}

/**
 * Given two schemas, returns an Array containing descriptions of any breaking
 * changes in the newSchema related to the fields on a type. This includes if
 * a field has been removed from a type, if a field has changed type, or if
 * a non-null field is added to an input type.
 */
function findFieldsThatChangedType(oldSchema, newSchema) {
  return [].concat(findFieldsThatChangedTypeOnObjectOrInterfaceTypes(oldSchema, newSchema), findFieldsThatChangedTypeOnInputObjectTypes(oldSchema, newSchema));
}

function findFieldsThatChangedTypeOnObjectOrInterfaceTypes(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();

  var breakingFieldChanges = [];
  Object.keys(oldTypeMap).forEach(function (typeName) {
    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];
    if (!(oldType instanceof _definition.GraphQLObjectType || oldType instanceof _definition.GraphQLInterfaceType) || !(newType instanceof oldType.constructor)) {
      return;
    }

    var oldTypeFieldsDef = oldType.getFields();
    var newTypeFieldsDef = newType.getFields();
    Object.keys(oldTypeFieldsDef).forEach(function (fieldName) {
      // Check if the field is missing on the type in the new schema.
      if (!(fieldName in newTypeFieldsDef)) {
        breakingFieldChanges.push({
          type: BreakingChangeType.FIELD_REMOVED,
          description: typeName + '.' + fieldName + ' was removed.'
        });
      } else {
        var oldFieldType = oldTypeFieldsDef[fieldName].type;
        var newFieldType = newTypeFieldsDef[fieldName].type;
        var isSafe = isChangeSafeForObjectOrInterfaceField(oldFieldType, newFieldType);
        if (!isSafe) {
          var oldFieldTypeString = (0, _definition.isNamedType)(oldFieldType) ? oldFieldType.name : oldFieldType.toString();
          var newFieldTypeString = (0, _definition.isNamedType)(newFieldType) ? newFieldType.name : newFieldType.toString();
          breakingFieldChanges.push({
            type: BreakingChangeType.FIELD_CHANGED_KIND,
            description: typeName + '.' + fieldName + ' changed type from ' + (oldFieldTypeString + ' to ' + newFieldTypeString + '.')
          });
        }
      }
    });
  });
  return breakingFieldChanges;
}

function findFieldsThatChangedTypeOnInputObjectTypes(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();

  var breakingFieldChanges = [];
  Object.keys(oldTypeMap).forEach(function (typeName) {
    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];
    if (!(oldType instanceof _definition.GraphQLInputObjectType) || !(newType instanceof _definition.GraphQLInputObjectType)) {
      return;
    }

    var oldTypeFieldsDef = oldType.getFields();
    var newTypeFieldsDef = newType.getFields();
    Object.keys(oldTypeFieldsDef).forEach(function (fieldName) {
      // Check if the field is missing on the type in the new schema.
      if (!(fieldName in newTypeFieldsDef)) {
        breakingFieldChanges.push({
          type: BreakingChangeType.FIELD_REMOVED,
          description: typeName + '.' + fieldName + ' was removed.'
        });
      } else {
        var oldFieldType = oldTypeFieldsDef[fieldName].type;
        var newFieldType = newTypeFieldsDef[fieldName].type;

        var isSafe = isChangeSafeForInputObjectFieldOrFieldArg(oldFieldType, newFieldType);
        if (!isSafe) {
          var oldFieldTypeString = (0, _definition.isNamedType)(oldFieldType) ? oldFieldType.name : oldFieldType.toString();
          var newFieldTypeString = (0, _definition.isNamedType)(newFieldType) ? newFieldType.name : newFieldType.toString();
          breakingFieldChanges.push({
            type: BreakingChangeType.FIELD_CHANGED_KIND,
            description: typeName + '.' + fieldName + ' changed type from ' + (oldFieldTypeString + ' to ' + newFieldTypeString + '.')
          });
        }
      }
    });
    // Check if a non-null field was added to the input object type
    Object.keys(newTypeFieldsDef).forEach(function (fieldName) {
      if (!(fieldName in oldTypeFieldsDef) && newTypeFieldsDef[fieldName].type instanceof _definition.GraphQLNonNull) {
        breakingFieldChanges.push({
          type: BreakingChangeType.NON_NULL_INPUT_FIELD_ADDED,
          description: 'A non-null field ' + fieldName + ' on ' + ('input type ' + newType.name + ' was added.')
        });
      }
    });
  });
  return breakingFieldChanges;
}

function isChangeSafeForObjectOrInterfaceField(oldType, newType) {
  if ((0, _definition.isNamedType)(oldType)) {
    return (
      // if they're both named types, see if their names are equivalent
      (0, _definition.isNamedType)(newType) && oldType.name === newType.name ||
      // moving from nullable to non-null of the same underlying type is safe
      newType instanceof _definition.GraphQLNonNull && isChangeSafeForObjectOrInterfaceField(oldType, newType.ofType)
    );
  } else if (oldType instanceof _definition.GraphQLList) {
    return (
      // if they're both lists, make sure the underlying types are compatible
      newType instanceof _definition.GraphQLList && isChangeSafeForObjectOrInterfaceField(oldType.ofType, newType.ofType) ||
      // moving from nullable to non-null of the same underlying type is safe
      newType instanceof _definition.GraphQLNonNull && isChangeSafeForObjectOrInterfaceField(oldType, newType.ofType)
    );
  } else if (oldType instanceof _definition.GraphQLNonNull) {
    // if they're both non-null, make sure the underlying types are compatible
    return newType instanceof _definition.GraphQLNonNull && isChangeSafeForObjectOrInterfaceField(oldType.ofType, newType.ofType);
  }
  return false;
}

function isChangeSafeForInputObjectFieldOrFieldArg(oldType, newType) {
  if ((0, _definition.isNamedType)(oldType)) {
    // if they're both named types, see if their names are equivalent
    return (0, _definition.isNamedType)(newType) && oldType.name === newType.name;
  } else if (oldType instanceof _definition.GraphQLList) {
    // if they're both lists, make sure the underlying types are compatible
    return newType instanceof _definition.GraphQLList && isChangeSafeForInputObjectFieldOrFieldArg(oldType.ofType, newType.ofType);
  } else if (oldType instanceof _definition.GraphQLNonNull) {
    return (
      // if they're both non-null, make sure the underlying types are
      // compatible
      newType instanceof _definition.GraphQLNonNull && isChangeSafeForInputObjectFieldOrFieldArg(oldType.ofType, newType.ofType) ||
      // moving from non-null to nullable of the same underlying type is safe
      !(newType instanceof _definition.GraphQLNonNull) && isChangeSafeForInputObjectFieldOrFieldArg(oldType.ofType, newType)
    );
  }
  return false;
}

/**
 * Given two schemas, returns an Array containing descriptions of any breaking
 * changes in the newSchema related to removing types from a union type.
 */
function findTypesRemovedFromUnions(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();

  var typesRemovedFromUnion = [];
  Object.keys(oldTypeMap).forEach(function (typeName) {
    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];
    if (!(oldType instanceof _definition.GraphQLUnionType) || !(newType instanceof _definition.GraphQLUnionType)) {
      return;
    }
    var typeNamesInNewUnion = Object.create(null);
    newType.getTypes().forEach(function (type) {
      typeNamesInNewUnion[type.name] = true;
    });
    oldType.getTypes().forEach(function (type) {
      if (!typeNamesInNewUnion[type.name]) {
        typesRemovedFromUnion.push({
          type: BreakingChangeType.TYPE_REMOVED_FROM_UNION,
          description: type.name + ' was removed from union type ' + typeName + '.'
        });
      }
    });
  });
  return typesRemovedFromUnion;
}

/**
 * Given two schemas, returns an Array containing descriptions of any dangerous
 * changes in the newSchema related to adding types to a union type.
 */
function findTypesAddedToUnions(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();

  var typesAddedToUnion = [];
  Object.keys(newTypeMap).forEach(function (typeName) {
    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];
    if (!(oldType instanceof _definition.GraphQLUnionType) || !(newType instanceof _definition.GraphQLUnionType)) {
      return;
    }
    var typeNamesInOldUnion = Object.create(null);
    oldType.getTypes().forEach(function (type) {
      typeNamesInOldUnion[type.name] = true;
    });
    newType.getTypes().forEach(function (type) {
      if (!typeNamesInOldUnion[type.name]) {
        typesAddedToUnion.push({
          type: DangerousChangeType.TYPE_ADDED_TO_UNION,
          description: type.name + ' was added to union type ' + typeName + '.'
        });
      }
    });
  });
  return typesAddedToUnion;
}
/**
 * Given two schemas, returns an Array containing descriptions of any breaking
 * changes in the newSchema related to removing values from an enum type.
 */
function findValuesRemovedFromEnums(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();

  var valuesRemovedFromEnums = [];
  Object.keys(oldTypeMap).forEach(function (typeName) {
    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];
    if (!(oldType instanceof _definition.GraphQLEnumType) || !(newType instanceof _definition.GraphQLEnumType)) {
      return;
    }
    var valuesInNewEnum = Object.create(null);
    newType.getValues().forEach(function (value) {
      valuesInNewEnum[value.name] = true;
    });
    oldType.getValues().forEach(function (value) {
      if (!valuesInNewEnum[value.name]) {
        valuesRemovedFromEnums.push({
          type: BreakingChangeType.VALUE_REMOVED_FROM_ENUM,
          description: value.name + ' was removed from enum type ' + typeName + '.'
        });
      }
    });
  });
  return valuesRemovedFromEnums;
}

/**
 * Given two schemas, returns an Array containing descriptions of any dangerous
 * changes in the newSchema related to adding values to an enum type.
 */
function findValuesAddedToEnums(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();

  var valuesAddedToEnums = [];
  Object.keys(oldTypeMap).forEach(function (typeName) {
    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];
    if (!(oldType instanceof _definition.GraphQLEnumType) || !(newType instanceof _definition.GraphQLEnumType)) {
      return;
    }

    var valuesInOldEnum = Object.create(null);
    oldType.getValues().forEach(function (value) {
      valuesInOldEnum[value.name] = true;
    });
    newType.getValues().forEach(function (value) {
      if (!valuesInOldEnum[value.name]) {
        valuesAddedToEnums.push({
          type: DangerousChangeType.VALUE_ADDED_TO_ENUM,
          description: value.name + ' was added to enum type ' + typeName + '.'
        });
      }
    });
  });
  return valuesAddedToEnums;
}

function findInterfacesRemovedFromObjectTypes(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();
  var breakingChanges = [];

  Object.keys(oldTypeMap).forEach(function (typeName) {
    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];
    if (!(oldType instanceof _definition.GraphQLObjectType) || !(newType instanceof _definition.GraphQLObjectType)) {
      return;
    }

    var oldInterfaces = oldType.getInterfaces();
    var newInterfaces = newType.getInterfaces();
    oldInterfaces.forEach(function (oldInterface) {
      if (!newInterfaces.some(function (int) {
        return int.name === oldInterface.name;
      })) {
        breakingChanges.push({
          type: BreakingChangeType.INTERFACE_REMOVED_FROM_OBJECT,
          description: typeName + ' no longer implements interface ' + (oldInterface.name + '.')
        });
      }
    });
  });
  return breakingChanges;
}

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findDeprecatedUsages = findDeprecatedUsages;

var _GraphQLError = __webpack_require__(23);

var _visitor = __webpack_require__(38);

var _definition = __webpack_require__(2);

var _schema = __webpack_require__(24);

var _TypeInfo = __webpack_require__(61);

/**
 * A validation rule which reports deprecated usages.
 *
 * Returns a list of GraphQLError instances describing each deprecated use.
 */
function findDeprecatedUsages(schema, ast) {
  var errors = [];
  var typeInfo = new _TypeInfo.TypeInfo(schema);

  (0, _visitor.visit)(ast, (0, _visitor.visitWithTypeInfo)(typeInfo, {
    Field: function Field(node) {
      var fieldDef = typeInfo.getFieldDef();
      if (fieldDef && fieldDef.isDeprecated) {
        var parentType = typeInfo.getParentType();
        if (parentType) {
          var reason = fieldDef.deprecationReason;
          errors.push(new _GraphQLError.GraphQLError('The field ' + parentType.name + '.' + fieldDef.name + ' is deprecated.' + (reason ? ' ' + reason : ''), [node]));
        }
      }
    },
    EnumValue: function EnumValue(node) {
      var enumVal = typeInfo.getEnumValue();
      if (enumVal && enumVal.isDeprecated) {
        var type = (0, _definition.getNamedType)(typeInfo.getInputType());
        if (type) {
          var reason = enumVal.deprecationReason;
          errors.push(new _GraphQLError.GraphQLError('The enum value ' + type.name + '.' + enumVal.name + ' is deprecated.' + (reason ? ' ' + reason : ''), [node]));
        }
      }
    }
  }));

  return errors;
}
/**
 *  Copyright (c) Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

/***/ }),
/* 113 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 114 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_toolbox_lib_snackbar__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_toolbox_lib_snackbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_toolbox_lib_snackbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ErrorBar_css__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ErrorBar_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__ErrorBar_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions__ = __webpack_require__(6);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





function mapStateToProps(state) {
    return {
        errorMessage: state.errorMessage,
    };
}
var ErrorBar = /** @class */ (function (_super) {
    __extends(ErrorBar, _super);
    function ErrorBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ErrorBar.prototype.render = function () {
        var _a = this.props, errorMessage = _a.errorMessage, dispatch = _a.dispatch;
        if (!errorMessage)
            return null;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_toolbox_lib_snackbar__["Snackbar"], { className: 'error-bar', action: 'Dismiss', active: errorMessage !== null, label: errorMessage, timeout: 2000, onClick: function () { return dispatch(Object(__WEBPACK_IMPORTED_MODULE_4__actions__["y" /* clearError */])()); }, type: 'warning' }));
    };
    return ErrorBar;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps)(ErrorBar));


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Snackbar = undefined;

var _reactCssThemr = __webpack_require__(7);

var _identifiers = __webpack_require__(8);

var _Snackbar = __webpack_require__(125);

var _button = __webpack_require__(18);

var _theme = __webpack_require__(134);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThemedSnackbar = (0, _reactCssThemr.themr)(_identifiers.SNACKBAR, _theme2.default)((0, _Snackbar.snackbarFactory)(_button.Button));

exports.default = ThemedSnackbar;
exports.Snackbar = ThemedSnackbar;

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

var _react = __webpack_require__(0);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _themrShape = __webpack_require__(121);

var _themrShape2 = _interopRequireDefault(_themrShape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ThemeProvider = (_temp = _class = function (_Component) {
  _inherits(ThemeProvider, _Component);

  function ThemeProvider() {
    _classCallCheck(this, ThemeProvider);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  ThemeProvider.prototype.getChildContext = function getChildContext() {
    return {
      themr: {
        theme: this.props.theme
      }
    };
  };

  ThemeProvider.prototype.render = function render() {
    return _react.Children.only(this.props.children);
  };

  return ThemeProvider;
}(_react.Component), _class.propTypes = {
  children: _propTypes2.default.element.isRequired,
  theme: _propTypes2.default.object.isRequired
}, _class.defaultProps = {
  theme: {}
}, _class.childContextTypes = {
  themr: _themrShape2.default.isRequired
}, _temp);
exports.default = ThemeProvider;

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(41);
var invariant = __webpack_require__(42);
var warning = __webpack_require__(62);

var ReactPropTypesSecret = __webpack_require__(43);
var checkPropTypes = __webpack_require__(119);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplid to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



if (process.env.NODE_ENV !== 'production') {
  var invariant = __webpack_require__(42);
  var warning = __webpack_require__(62);
  var ReactPropTypesSecret = __webpack_require__(43);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(41);
var invariant = __webpack_require__(42);
var ReactPropTypesSecret = __webpack_require__(43);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _propTypes2.default.shape({
  theme: _propTypes2.default.object.isRequired
});

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.themeable = themeable;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(123);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _invariant = __webpack_require__(124);

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @typedef {Object.<string, TReactCSSThemrTheme>} TReactCSSThemrTheme
 */

/**
 * @typedef {{}} TReactCSSThemrOptions
 * @property {String|Boolean} [composeTheme=COMPOSE_DEEPLY]
 */

var COMPOSE_DEEPLY = 'deeply';
var COMPOSE_SOFTLY = 'softly';
var DONT_COMPOSE = false;

var DEFAULT_OPTIONS = {
  composeTheme: COMPOSE_DEEPLY,
  mapThemrProps: defaultMapThemrProps
};

var THEMR_CONFIG = typeof Symbol !== 'undefined' ? Symbol('THEMR_CONFIG') : '__REACT_CSS_THEMR_CONFIG__';

/**
 * Themr decorator
 * @param {String|Number|Symbol} componentName - Component name
 * @param {TReactCSSThemrTheme} [localTheme] - Base theme
 * @param {{}} [options] - Themr options
 * @returns {function(ThemedComponent:Function):Function} - ThemedComponent
 */

exports.default = function (componentName, localTheme) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return function (ThemedComponent) {
    var _class, _temp;

    var _DEFAULT_OPTIONS$opti = _extends({}, DEFAULT_OPTIONS, options),
        optionComposeTheme = _DEFAULT_OPTIONS$opti.composeTheme,
        optionMapThemrProps = _DEFAULT_OPTIONS$opti.mapThemrProps;

    validateComposeOption(optionComposeTheme);

    var config = ThemedComponent[THEMR_CONFIG];
    if (config && config.componentName === componentName) {
      config.localTheme = themeable(config.localTheme, localTheme);
      return ThemedComponent;
    }

    config = {
      componentName: componentName,
      localTheme: localTheme
    };

    /**
     * @property {{wrappedInstance: *}} refs
     */
    var Themed = (_temp = _class = function (_Component) {
      _inherits(Themed, _Component);

      function Themed() {
        _classCallCheck(this, Themed);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args)));

        _this.theme_ = _this.calcTheme(_this.props);
        return _this;
      }

      Themed.prototype.getWrappedInstance = function getWrappedInstance() {
        (0, _invariant2.default)(true, 'DEPRECATED: To access the wrapped instance, you have to pass ' + '{ innerRef: fn } and retrieve with a callback ref style.');

        return this.refs.wrappedInstance;
      };

      Themed.prototype.getNamespacedTheme = function getNamespacedTheme(props) {
        var themeNamespace = props.themeNamespace,
            theme = props.theme;

        if (!themeNamespace) return theme;
        if (themeNamespace && !theme) throw new Error('Invalid themeNamespace use in react-css-themr. ' + 'themeNamespace prop should be used only with theme prop.');

        return Object.keys(theme).filter(function (key) {
          return key.startsWith(themeNamespace);
        }).reduce(function (result, key) {
          var _extends2;

          return _extends({}, result, (_extends2 = {}, _extends2[removeNamespace(key, themeNamespace)] = theme[key], _extends2));
        }, {});
      };

      Themed.prototype.getThemeNotComposed = function getThemeNotComposed(props) {
        if (props.theme) return this.getNamespacedTheme(props);
        if (config.localTheme) return config.localTheme;
        return this.getContextTheme();
      };

      Themed.prototype.getContextTheme = function getContextTheme() {
        return this.context.themr ? this.context.themr.theme[config.componentName] : {};
      };

      Themed.prototype.getTheme = function getTheme(props) {
        return props.composeTheme === COMPOSE_SOFTLY ? _extends({}, this.getContextTheme(), config.localTheme, this.getNamespacedTheme(props)) : themeable(themeable(this.getContextTheme(), config.localTheme), this.getNamespacedTheme(props));
      };

      Themed.prototype.calcTheme = function calcTheme(props) {
        var composeTheme = props.composeTheme;

        return composeTheme ? this.getTheme(props) : this.getThemeNotComposed(props);
      };

      Themed.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if (nextProps.composeTheme !== this.props.composeTheme || nextProps.theme !== this.props.theme || nextProps.themeNamespace !== this.props.themeNamespace) {
          this.theme_ = this.calcTheme(nextProps);
        }
      };

      Themed.prototype.render = function render() {
        return _react2.default.createElement(ThemedComponent, this.props.mapThemrProps(this.props, this.theme_));
      };

      return Themed;
    }(_react.Component), _class.displayName = 'Themed' + ThemedComponent.name, _class.contextTypes = {
      themr: _propTypes2.default.object
    }, _class.propTypes = _extends({}, ThemedComponent.propTypes, {
      composeTheme: _propTypes2.default.oneOf([COMPOSE_DEEPLY, COMPOSE_SOFTLY, DONT_COMPOSE]),
      innerRef: _propTypes2.default.func,
      theme: _propTypes2.default.object,
      themeNamespace: _propTypes2.default.string,
      mapThemrProps: _propTypes2.default.func
    }), _class.defaultProps = _extends({}, ThemedComponent.defaultProps, {
      composeTheme: optionComposeTheme,
      mapThemrProps: optionMapThemrProps
    }), _temp);


    Themed[THEMR_CONFIG] = config;

    return (0, _hoistNonReactStatics2.default)(Themed, ThemedComponent);
  };
};

/**
 * Merges passed themes by concatenating string keys and processing nested themes
 *
 * @param {...TReactCSSThemrTheme} themes - Themes
 * @returns {TReactCSSThemrTheme} - Resulting theme
 */


function themeable() {
  for (var _len2 = arguments.length, themes = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    themes[_key2] = arguments[_key2];
  }

  return themes.reduce(function (acc, theme) {
    return merge(acc, theme);
  }, {});
}

/**
 * @param {TReactCSSThemrTheme} [original] - Original theme
 * @param {TReactCSSThemrTheme} [mixin] - Mixin theme
 * @returns {TReactCSSThemrTheme} - resulting theme
 */
function merge() {
  var original = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var mixin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  //make a copy to avoid mutations of nested objects
  //also strip all functions injected by isomorphic-style-loader
  var result = Object.keys(original).reduce(function (acc, key) {
    var value = original[key];
    if (typeof value !== 'function') {
      acc[key] = value;
    }
    return acc;
  }, {});

  //traverse mixin keys and merge them to resulting theme
  Object.keys(mixin).forEach(function (key) {
    //there's no need to set any defaults here
    var originalValue = result[key];
    var mixinValue = mixin[key];

    switch (typeof mixinValue === 'undefined' ? 'undefined' : _typeof(mixinValue)) {
      case 'object':
        {
          //possibly nested theme object
          switch (typeof originalValue === 'undefined' ? 'undefined' : _typeof(originalValue)) {
            case 'object':
              {
                //exactly nested theme object - go recursive
                result[key] = merge(originalValue, mixinValue);
                break;
              }

            case 'undefined':
              {
                //original does not contain this nested key - just take it as is
                result[key] = mixinValue;
                break;
              }

            default:
              {
                //can't merge an object with a non-object
                throw new Error('You are merging object ' + key + ' with a non-object ' + originalValue);
              }
          }
          break;
        }

      case 'undefined': //fallthrough - handles accidentally unset values which may come from props
      case 'function':
        {
          //this handles issue when isomorphic-style-loader addes helper functions to css-module
          break; //just skip
        }

      default:
        {
          //plain values
          switch (typeof originalValue === 'undefined' ? 'undefined' : _typeof(originalValue)) {
            case 'object':
              {
                //can't merge a non-object with an object
                throw new Error('You are merging non-object ' + mixinValue + ' with an object ' + key);
              }

            case 'undefined':
              {
                //mixin key is new to original theme - take it as is
                result[key] = mixinValue;
                break;
              }
            case 'function':
              {
                //this handles issue when isomorphic-style-loader addes helper functions to css-module
                break; //just skip
              }

            default:
              {
                //finally we can merge
                result[key] = originalValue.split(' ').concat(mixinValue.split(' ')).filter(function (item, pos, self) {
                  return self.indexOf(item) === pos && item !== '';
                }).join(' ');
                break;
              }
          }
          break;
        }
    }
  });

  return result;
}

/**
 * Validates compose option
 *
 * @param {String|Boolean} composeTheme - Compose them option
 * @throws
 * @returns {undefined}
 */
function validateComposeOption(composeTheme) {
  if ([COMPOSE_DEEPLY, COMPOSE_SOFTLY, DONT_COMPOSE].indexOf(composeTheme) === -1) {
    throw new Error('Invalid composeTheme option for react-css-themr. Valid composition options are ' + COMPOSE_DEEPLY + ', ' + COMPOSE_SOFTLY + ' and ' + DONT_COMPOSE + '. The given option was ' + composeTheme);
  }
}

/**
 * Removes namespace from key
 *
 * @param {String} key - Key
 * @param {String} themeNamespace - Theme namespace
 * @returns {String} - Key
 */
function removeNamespace(key, themeNamespace) {
  var capitalized = key.substr(themeNamespace.length);
  return capitalized.slice(0, 1).toLowerCase() + capitalized.slice(1);
}

/**
 * Maps props and theme to an object that will be used to pass down props to the
 * decorated component.
 *
 * @param {Object} ownProps - All props given to the decorated component
 * @param {Object} theme - Calculated then that should be passed down
 * @returns {Object} - Props that will be passed down to the decorated component
 */
function defaultMapThemrProps(ownProps, theme) {
  var composeTheme = ownProps.composeTheme,
      innerRef = ownProps.innerRef,
      themeNamespace = ownProps.themeNamespace,
      mapThemrProps = ownProps.mapThemrProps,
      rest = _objectWithoutProperties(ownProps, ['composeTheme', 'innerRef', 'themeNamespace', 'mapThemrProps']);

  return _extends({}, rest, {
    ref: innerRef,
    theme: theme
  });
}

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */


var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    arguments: true,
    arity: true
};

var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
        var keys = Object.getOwnPropertyNames(sourceComponent);

        /* istanbul ignore else */
        if (isGetOwnPropertySymbolsAvailable) {
            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
                try {
                    targetComponent[keys[i]] = sourceComponent[keys[i]];
                } catch (error) {

                }
            }
        }
    }

    return targetComponent;
};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Snackbar = exports.snackbarFactory = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__(1);

var _classnames3 = _interopRequireDefault(_classnames2);

var _reactCssThemr = __webpack_require__(7);

var _identifiers = __webpack_require__(8);

var _ActivableRenderer = __webpack_require__(126);

var _ActivableRenderer2 = _interopRequireDefault(_ActivableRenderer);

var _Button = __webpack_require__(63);

var _Button2 = _interopRequireDefault(_Button);

var _Portal = __webpack_require__(66);

var _Portal2 = _interopRequireDefault(_Portal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Button) {
  var Snackbar = function (_Component) {
    _inherits(Snackbar, _Component);

    function Snackbar() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Snackbar);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Snackbar.__proto__ || Object.getPrototypeOf(Snackbar)).call.apply(_ref, [this].concat(args))), _this), _this.scheduleTimeout = function (props) {
        var onTimeout = props.onTimeout,
            timeout = props.timeout;

        if (_this.curTimeout) clearTimeout(_this.curTimeout);
        _this.curTimeout = setTimeout(function () {
          if (onTimeout) onTimeout();
          _this.curTimeout = null;
        }, timeout);
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Snackbar, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (this.props.active && this.props.timeout) {
          this.scheduleTimeout(this.props);
        }
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.active && nextProps.timeout) {
          this.scheduleTimeout(nextProps);
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        clearTimeout(this.curTimeout);
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            action = _props.action,
            active = _props.active,
            children = _props.children,
            label = _props.label,
            onClick = _props.onClick,
            theme = _props.theme,
            type = _props.type;

        var className = (0, _classnames3.default)([theme.snackbar, theme[type]], _defineProperty({}, theme.active, active), this.props.className);

        return _react2.default.createElement(
          _Portal2.default,
          { className: theme.portal },
          _react2.default.createElement(
            'div',
            { 'data-react-toolbox': 'snackbar', className: className },
            _react2.default.createElement(
              'span',
              { className: theme.label },
              label,
              children
            ),
            action ? _react2.default.createElement(Button, {
              className: theme.button,
              label: action,
              onClick: onClick
            }) : null
          )
        );
      }
    }]);

    return Snackbar;
  }(_react.Component);

  Snackbar.propTypes = {
    action: _propTypes2.default.string,
    active: _propTypes2.default.bool,
    children: _propTypes2.default.node,
    className: _propTypes2.default.string,
    label: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
    onClick: _propTypes2.default.func,
    onTimeout: _propTypes2.default.func,
    theme: _propTypes2.default.shape({
      accept: _propTypes2.default.string,
      active: _propTypes2.default.string,
      button: _propTypes2.default.string,
      cancel: _propTypes2.default.string,
      label: _propTypes2.default.string,
      snackbar: _propTypes2.default.string,
      warning: _propTypes2.default.string
    }),
    timeout: _propTypes2.default.number,
    type: _propTypes2.default.oneOf(['accept', 'cancel', 'warning'])
  };


  return (0, _ActivableRenderer2.default)()(Snackbar);
};

var Snackbar = factory(_Button2.default);
exports.default = (0, _reactCssThemr.themr)(_identifiers.SNACKBAR)(Snackbar);
exports.snackbarFactory = factory;
exports.Snackbar = Snackbar;

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ActivableRendererFactory = function ActivableRendererFactory() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { delay: 500 };
  return function (ActivableComponent) {
    var _class, _temp2;

    return _temp2 = _class = function (_Component) {
      _inherits(ActivableRenderer, _Component);

      function ActivableRenderer() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ActivableRenderer);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ActivableRenderer.__proto__ || Object.getPrototypeOf(ActivableRenderer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
          active: _this.props.active,
          rendered: _this.props.active
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }

      _createClass(ActivableRenderer, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
          if (nextProps.active && !this.props.active) this.renderAndActivate();
          if (!nextProps.active && this.props.active) this.deactivateAndUnrender();
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          clearTimeout(this.activateTimeout);
          clearTimeout(this.unrenderTimeout);
        }
      }, {
        key: 'renderAndActivate',
        value: function renderAndActivate() {
          var _this2 = this;

          if (this.unrenderTimeout) clearTimeout(this.unrenderTimeout);
          this.setState({ rendered: true, active: false }, function () {
            _this2.activateTimeout = setTimeout(function () {
              return _this2.setState({ active: true });
            }, 20);
          });
        }
      }, {
        key: 'deactivateAndUnrender',
        value: function deactivateAndUnrender() {
          var _this3 = this;

          this.setState({ rendered: true, active: false }, function () {
            _this3.unrenderTimeout = setTimeout(function () {
              _this3.setState({ rendered: false });
              _this3.unrenderTimeout = null;
            }, _this3.props.delay);
          });
        }
      }, {
        key: 'render',
        value: function render() {
          var _props = this.props,
              delay = _props.delay,
              others = _objectWithoutProperties(_props, ['delay']); // eslint-disable-line no-unused-vars


          var _state = this.state,
              active = _state.active,
              rendered = _state.rendered;

          return rendered ? _react2.default.createElement(ActivableComponent, _extends({}, others, { active: active })) : null;
        }
      }]);

      return ActivableRenderer;
    }(_react.Component), _class.propTypes = {
      active: _propTypes2.default.bool.isRequired,
      children: _propTypes2.default.node,
      delay: _propTypes2.default.number
    }, _class.defaultProps = {
      delay: options.delay
    }, _temp2;
  };
};

exports.default = ActivableRendererFactory;

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(30);


/**
 * Returns a new object that does not contain a `prop` property.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Object
 * @sig String -> {k: v} -> {k: v}
 * @param {String} prop The name of the property to dissociate
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original but without the specified property
 * @see R.assoc
 * @example
 *
 *      R.dissoc('b', {a: 1, b: 2, c: 3}); //=> {a: 1, c: 3}
 */
module.exports = _curry2(function dissoc(prop, obj) {
  var result = {};
  for (var p in obj) {
    result[p] = obj[p];
  }
  delete result[prop];
  return result;
});


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var _has = __webpack_require__(65);


module.exports = (function() {
  var toString = Object.prototype.toString;
  return toString.call(arguments) === '[object Arguments]' ?
    function _isArguments(x) { return toString.call(x) === '[object Arguments]'; } :
    function _isArguments(x) { return _has('callee', x); };
}());


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var WEBKIT = 'Webkit';
var MICROSOFT = 'Ms';

var properties = {
  transform: [WEBKIT, MICROSOFT]
};

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.substr(1);
}

function getPrefixes(property, value) {
  return properties[property].reduce(function (acc, item) {
    acc['' + item + capitalize(property)] = value; // eslint-disable-line no-param-reassign
    return acc;
  }, {});
}

function addPrefixesTo(style, property, value) {
  var vendor = getPrefixes(property, value);
  for (var prefix in vendor) {
    // eslint-disable-line no-restricted-syntax
    if ({}.hasOwnProperty.call(vendor, prefix)) {
      style[prefix] = vendor[prefix]; // eslint-disable-line no-param-reassign
    }
  }

  return style;
}

function prefixer(style) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _style = defaultValue;
  for (var property in style) {
    // eslint-disable-line no-restricted-syntax
    if ({}.hasOwnProperty.call(style, property)) {
      _style[property] = style[property];
      if (properties[property]) {
        addPrefixesTo(_style, property, style[property]);
      }
    }
  }

  return _style;
}

exports.default = prefixer;

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BrowseButton = exports.browseButtonFactory = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__(1);

var _classnames3 = _interopRequireDefault(_classnames2);

var _reactCssThemr = __webpack_require__(7);

var _identifiers = __webpack_require__(8);

var _FontIcon = __webpack_require__(16);

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _Ripple = __webpack_require__(26);

var _Ripple2 = _interopRequireDefault(_Ripple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(ripple, FontIcon) {
  var SimpleBrowseButton = function (_Component) {
    _inherits(SimpleBrowseButton, _Component);

    function SimpleBrowseButton() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, SimpleBrowseButton);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SimpleBrowseButton.__proto__ || Object.getPrototypeOf(SimpleBrowseButton)).call.apply(_ref, [this].concat(args))), _this), _this.getLevel = function () {
        if (_this.props.primary) return 'primary';
        if (_this.props.accent) return 'accent';
        return 'neutral';
      }, _this.getShape = function () {
        if (_this.props.raised) return 'raised';
        if (_this.props.floating) return 'floating';
        return 'flat';
      }, _this.handleMouseUp = function (event) {
        _this.labelNode.blur();
        if (_this.props.onMouseUp) _this.props.onMouseUp(event);
      }, _this.handleMouseLeave = function (event) {
        _this.labelNode.blur();
        if (_this.props.onMouseLeave) _this.props.onMouseLeave(event);
      }, _this.handleFileChange = function (event) {
        if (_this.props.onChange) _this.props.onChange(event);
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SimpleBrowseButton, [{
      key: 'render',
      value: function render() {
        var _classnames,
            _this2 = this;

        var _props = this.props,
            accent = _props.accent,
            children = _props.children,
            className = _props.className,
            flat = _props.flat,
            floating = _props.floating,
            icon = _props.icon,
            inverse = _props.inverse,
            label = _props.label,
            mini = _props.mini,
            neutral = _props.neutral,
            primary = _props.primary,
            raised = _props.raised,
            theme = _props.theme,
            others = _objectWithoutProperties(_props, ['accent', 'children', 'className', 'flat', 'floating', 'icon', 'inverse', 'label', 'mini', 'neutral', 'primary', 'raised', 'theme']);

        var element = 'label';
        var level = this.getLevel();
        var shape = this.getShape();

        var classes = (0, _classnames3.default)(theme.button, [theme[shape]], (_classnames = {}, _defineProperty(_classnames, theme[level], neutral), _defineProperty(_classnames, theme.mini, mini), _defineProperty(_classnames, theme.inverse, inverse), _classnames), className);

        var props = _extends({}, others, {
          ref: function ref(node) {
            _this2.labelNode = node;
          },
          className: classes,
          disabled: this.props.disabled,
          onMouseUp: this.handleMouseUp,
          onMouseLeave: this.handleMouseLeave,
          'data-react-toolbox': 'label'
        });

        return _react2.default.createElement(element, props, icon ? _react2.default.createElement(FontIcon, { className: theme.icon, value: icon }) : null, _react2.default.createElement(
          'span',
          null,
          label
        ), _react2.default.createElement('input', {
          className: classes,
          type: 'file',
          onChange: this.handleFileChange
        }), children);
      }
    }]);

    return SimpleBrowseButton;
  }(_react.Component);

  SimpleBrowseButton.propTypes = {
    accent: _propTypes2.default.bool,
    children: _propTypes2.default.node,
    className: _propTypes2.default.string,
    disabled: _propTypes2.default.bool,
    flat: _propTypes2.default.bool,
    floating: _propTypes2.default.bool,
    icon: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
    inverse: _propTypes2.default.bool,
    label: _propTypes2.default.string,
    mini: _propTypes2.default.bool,
    neutral: _propTypes2.default.bool,
    onChange: _propTypes2.default.func,
    onMouseLeave: _propTypes2.default.func,
    onMouseUp: _propTypes2.default.func,
    primary: _propTypes2.default.bool,
    raised: _propTypes2.default.bool,
    theme: _propTypes2.default.shape({
      accent: _propTypes2.default.string,
      button: _propTypes2.default.string,
      flat: _propTypes2.default.string,
      floating: _propTypes2.default.string,
      icon: _propTypes2.default.string,
      inverse: _propTypes2.default.string,
      mini: _propTypes2.default.string,
      neutral: _propTypes2.default.string,
      primary: _propTypes2.default.string,
      raised: _propTypes2.default.string,
      rippleWrapper: _propTypes2.default.string,
      toggle: _propTypes2.default.string
    }),
    type: _propTypes2.default.string
  };
  SimpleBrowseButton.defaultProps = {
    accent: false,
    className: '',
    flat: false,
    floating: false,
    mini: false,
    neutral: true,
    primary: false,
    raised: false
  };


  return ripple(SimpleBrowseButton);
};

var BrowseButton = factory((0, _Ripple2.default)({ centered: false }), _FontIcon2.default);
exports.default = (0, _reactCssThemr.themr)(_identifiers.BUTTON)(BrowseButton);
exports.browseButtonFactory = factory;
exports.BrowseButton = BrowseButton;

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconButton = exports.iconButtonFactory = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__(1);

var _classnames3 = _interopRequireDefault(_classnames2);

var _reactCssThemr = __webpack_require__(7);

var _identifiers = __webpack_require__(8);

var _FontIcon = __webpack_require__(16);

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _Ripple = __webpack_require__(26);

var _Ripple2 = _interopRequireDefault(_Ripple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(ripple, FontIcon) {
  var IconButton = function (_Component) {
    _inherits(IconButton, _Component);

    function IconButton() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, IconButton);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = IconButton.__proto__ || Object.getPrototypeOf(IconButton)).call.apply(_ref, [this].concat(args))), _this), _this.getLevel = function () {
        if (_this.props.primary) return 'primary';
        if (_this.props.accent) return 'accent';
        return 'neutral';
      }, _this.handleMouseUp = function (event) {
        _this.buttonNode.blur();
        if (_this.props.onMouseUp) _this.props.onMouseUp(event);
      }, _this.handleMouseLeave = function (event) {
        _this.buttonNode.blur();
        if (_this.props.onMouseLeave) _this.props.onMouseLeave(event);
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(IconButton, [{
      key: 'render',
      value: function render() {
        var _classnames,
            _this2 = this;

        var _props = this.props,
            accent = _props.accent,
            children = _props.children,
            className = _props.className,
            href = _props.href,
            icon = _props.icon,
            inverse = _props.inverse,
            neutral = _props.neutral,
            primary = _props.primary,
            theme = _props.theme,
            type = _props.type,
            others = _objectWithoutProperties(_props, ['accent', 'children', 'className', 'href', 'icon', 'inverse', 'neutral', 'primary', 'theme', 'type']);

        var element = href ? 'a' : 'button';
        var level = this.getLevel();
        var classes = (0, _classnames3.default)([theme.toggle], (_classnames = {}, _defineProperty(_classnames, theme[level], neutral), _defineProperty(_classnames, theme.inverse, inverse), _classnames), className);

        var props = _extends({}, others, {
          href: href,
          ref: function ref(node) {
            _this2.buttonNode = node;
          },
          className: classes,
          disabled: this.props.disabled,
          onMouseUp: this.handleMouseUp,
          onMouseLeave: this.handleMouseLeave,
          type: !href ? type : null,
          'data-react-toolbox': 'button'
        });

        var iconElement = typeof icon === 'string' ? _react2.default.createElement(FontIcon, { className: theme.icon, value: icon }) : icon;

        return _react2.default.createElement(element, props, icon && iconElement, children);
      }
    }]);

    return IconButton;
  }(_react.Component);

  IconButton.propTypes = {
    accent: _propTypes2.default.bool,
    children: _propTypes2.default.node,
    className: _propTypes2.default.string,
    disabled: _propTypes2.default.bool,
    href: _propTypes2.default.string,
    icon: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
    inverse: _propTypes2.default.bool,
    neutral: _propTypes2.default.bool,
    onMouseLeave: _propTypes2.default.func,
    onMouseUp: _propTypes2.default.func,
    primary: _propTypes2.default.bool,
    theme: _propTypes2.default.shape({
      accent: _propTypes2.default.string,
      button: _propTypes2.default.string,
      flat: _propTypes2.default.string,
      floating: _propTypes2.default.string,
      icon: _propTypes2.default.string,
      inverse: _propTypes2.default.string,
      mini: _propTypes2.default.string,
      neutral: _propTypes2.default.string,
      primary: _propTypes2.default.string,
      raised: _propTypes2.default.string,
      rippleWrapper: _propTypes2.default.string,
      toggle: _propTypes2.default.string
    }),
    type: _propTypes2.default.string
  };
  IconButton.defaultProps = {
    accent: false,
    className: '',
    neutral: true,
    primary: false,
    type: 'button'
  };


  return ripple(IconButton);
};

var IconButton = factory((0, _Ripple2.default)({ centered: true }), _FontIcon2.default);
exports.default = (0, _reactCssThemr.themr)(_identifiers.BUTTON)(IconButton);
exports.iconButtonFactory = factory;
exports.IconButton = IconButton;

/***/ }),
/* 132 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"rippleWrapper":"theme_rippleWrapper-16N7o","ripple":"theme_ripple-3SV_u","rippleRestarting":"theme_rippleRestarting-2OZWa","rippleActive":"theme_rippleActive-3O2Ue"};

/***/ }),
/* 133 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"button":"theme_button-2Agdx","rippleWrapper":"theme_rippleWrapper-3AVBi","squared":"theme_squared-2GH_L","icon":"theme_icon-3aBSX","solid":"theme_solid-1ZxqC","raised":"theme_raised-221ic theme_button-2Agdx theme_squared-2GH_L theme_solid-1ZxqC","flat":"theme_flat-1jWAQ theme_button-2Agdx theme_squared-2GH_L","floating":"theme_floating-3IRMZ theme_button-2Agdx theme_solid-1ZxqC","mini":"theme_mini-2DCN-","toggle":"theme_toggle-hC5Z2 theme_button-2Agdx","primary":"theme_primary-3tTAW","accent":"theme_accent-2wp6F","neutral":"theme_neutral-2CPs4","inverse":"theme_inverse-2SPZr"};

/***/ }),
/* 134 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"snackbar":"theme_snackbar-zDi3X","accept":"theme_accept-2Y0Cy","button":"theme_button-2pCxU","warning":"theme_warning-2li3o","cancel":"theme_cancel-3731C","active":"theme_active-38CsO","label":"theme_label-1JIbY"};

/***/ }),
/* 135 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__LoadingAnimation_css__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__LoadingAnimation_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__LoadingAnimation_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__icons_logo_with_signals_svg__ = __webpack_require__(138);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





function mapStateToProps(state) {
    return {
        loading: (state.currentSvgIndex === null)
    };
}
var LoadingAnimation = /** @class */ (function (_super) {
    __extends(LoadingAnimation, _super);
    function LoadingAnimation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoadingAnimation.prototype.shouldComponentUpdate = function (nextProps) {
        return this.props.loading !== nextProps.loading;
    };
    LoadingAnimation.prototype.render = function () {
        var loading = this.props.loading;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_2_classnames__({
                'loading-box': true,
                'visible': loading
            }) },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: 'loading-animation' },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__icons_logo_with_signals_svg__["a" /* default */], null),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", null, " Transmitting... "))));
    };
    return LoadingAnimation;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps)(LoadingAnimation));


/***/ }),
/* 137 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};



var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 490.8 438.1" }, this.props), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M334.2 285c-2.3-2.3-6.1-2.3-8.5 0l-6.5 6.5-10.1-10.1 2.9-2.9c4.7-4.7 4.7-12.3 0-17l-2.6-2.6c.2-.6.4-1.3.4-2.1V217c22.9 15.1 46.9 23.5 67.7 23.5 4.8 0 9.5-.5 13.9-1.4 4.3-.9 7.8-4.1 9.1-8.3 1.3-4.2.1-8.8-3-11.9l-53.1-53.1v-24.3c1.2.2 2.5.4 3.7.4 5.1 0 9.9-2 13.5-5.6 7.5-7.5 7.5-19.6 0-27.1-3.6-3.6-8.4-5.6-13.5-5.6s-9.9 2-13.5 5.6c-3.6 3.6-5.6 8.4-5.6 13.5 0 1.3.1 2.5.4 3.7h-24.3L252 73.3c-2.3-2.3-5.3-3.5-8.5-3.5-1.1 0-2.3.2-3.4.5-4.2 1.3-7.4 4.7-8.3 9.1-4.9 23.5 3.4 53.2 22.2 81.6h-39.8c-.5 0-1 .1-1.5.2 3.3-5.3 2.7-12.4-1.9-17-1.9-1.9-4.2-3.1-6.7-3.7L177.6 30c.4-.3.8-.7 1.2-1.1 5.5-5.5 5.5-14.5 0-20s-14.5-5.5-20 0-5.5 14.5 0 20c2 2 4.5 3.3 7.1 3.8l26.2 110.6c-.3.3-.7.6-1 .9-5.3 5.3-5.3 14 0 19.3.3.3.7.6 1 .9L159.8 197c-.3-.4-.6-.7-.9-1-5.3-5.3-14-5.3-19.3 0-.3.3-.6.7-.9 1L28 170.7c-.6-2.7-1.9-5.1-3.8-7.1-5.5-5.5-14.5-5.5-20 0-2.7 2.7-4.1 6.2-4.1 10s1.5 7.3 4.1 10c2.8 2.8 6.4 4.1 10 4.1 3.6 0 7.2-1.4 10-4.1.4-.4.7-.8 1.1-1.2L136 208.6c.5 2.4 1.8 4.8 3.7 6.7 2.7 2.7 6.2 4 9.7 4 2.1 0 4.2-.5 6.1-1.5l.3.3 99.9 99.9c2.3 2.3 5.3 3.5 8.5 3.5s6.2-1.3 8.5-3.5l3.4-3.4 10.1 10.1-7.4 7.4c-2.3 2.3-2.3 6.1 0 8.5l95.7 95.7c.3.3.6.5.9.8h.1c.3.2.6.4 1 .5h.1c.3.1.7.2 1 .3h.1c.4.1.7.1 1.1.1s.7 0 1.1-.1h.1c.4-.1.7-.2 1-.3h.1c.3-.1.7-.3 1-.5h.1c.7-.4 1.2-1 1.7-1.7v-.1c.2-.3.4-.6.5-1v-.1c.1-.3.2-.7.3-1v-.1c.1-.4.1-.7.1-1.1v-40.9h40.9c1.7 0 3.3-.7 4.4-1.9 0 0 .1 0 .1-.1 2.3-2.3 2.3-6.1 0-8.5l-96-95.6zm38.3 94.2h-34.9v-34.9h34.9v34.9zM325.7 302v30.3h-30.3l30.3-30.3zm0 42.3v26.4l-26.4-26.4h26.4zm12-12v-26.9l26.9 26.9h-26.9zm-69.3-114.4h29.3v29.3l-29.3-29.3zm-3.5-42L295 206h-30.1v-30.1zm63.9-25.5l3.4-3.4v6.8l-3.4-3.4zm14.2-32.7c1.3-1.3 3.1-2.1 5-2.1s3.7.7 5 2.1c2.8 2.8 2.8 7.3 0 10.1-1.3 1.3-3.1 2.1-5 2.1s-3.7-.7-5-2.1-2.1-3.1-2.1-5 .7-3.7 2.1-5.1zm-19.2 20.8l-3.4 3.4-3.4-3.4h6.8zm-80.5-56.6l145.6 145.6c-3.6.7-7.5 1.1-11.5 1.1-21.7 0-48.5-10.8-73.4-30.5l-31.4-31.4c-23.2-29.4-34.1-61.6-29.3-84.8zm9.6 120.5L223.5 173h29.3v29.4zm-88.8 7.2l39.5-39.5 99.9 99.9-5.4 5.4c-.8.3-1.5.7-2.1 1.3-.6.6-1 1.3-1.3 2.1l-21.3 21.3c-.8.3-1.5.7-2.1 1.3-.6.6-1 1.3-1.3 2.1l-6 6-99.9-99.9zm120.3 96.5l16.3-16.3 10.1 10.1-16.3 16.3-10.1-10.1zm88.1 111.5l-26.4-26.4h26.4v26.4zm12-65.3l26.9 26.9h-26.9v-26.9z" }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M217.5 198.2c-5.2 0-10.2 1.5-14.5 4.5-11.8 8-14.9 24.1-6.9 35.9 4.8 7.1 12.8 11.4 21.4 11.4 5.2 0 10.2-1.5 14.5-4.5 5.7-3.9 9.6-9.7 10.9-16.5 1.3-6.8-.1-13.7-4-19.4-4.8-7.2-12.8-11.4-21.4-11.4zm7.8 37.3c-2.4 1.6-5.1 2.4-7.8 2.4-4.4 0-8.8-2.1-11.5-6.1-4.3-6.3-2.6-14.9 3.7-19.2 2.4-1.6 5.1-2.4 7.8-2.4 4.4 0 8.8 2.1 11.5 6.1 4.2 6.3 2.6 14.9-3.7 19.2z" }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { className: "voyager-signal1", d: "M369.5 101.3c5.1 5.1 10.3 9.4 14.6 12.2 2.6 1.7 5.9 3.6 8.9 3.6 1.4 0 2.6-.4 3.7-1.4 5.8-5.8-8.1-20.9-14.3-27.2-5.1-5.1-10.3-9.4-14.6-12.2-3.8-2.5-9.3-5.4-12.5-2.1-5.9 5.7 8 20.8 14.2 27.1zm7.9-7.9c6.6 6.6 10.6 12 12.4 15.4-3.3-1.9-8.8-5.9-15.4-12.4-6.6-6.6-10.6-12-12.4-15.4 3.4 1.8 8.8 5.8 15.4 12.4z" }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { className: "voyager-signal2", d: "M390 80.8c4.4 4.4 24.2 23.6 34.7 23.6 1.7 0 3.1-.5 4.2-1.6 8.1-8.1-16.9-33.9-22-39-5.1-5.1-30.9-30.1-39-22-3.1 3.1-2 8.4 3.5 16.8 4.4 6.7 11 14.5 18.6 22.2zm12-12.1c13.9 13.9 20.4 24.6 21.4 28.5-3.9-1.1-14.6-7.5-28.5-21.4-13.9-13.9-20.4-24.6-21.4-28.5 4 1.1 14.6 7.5 28.5 21.4z" }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { className: "voyager-signal3", d: "M462.5 67c-6.5-9.2-16.2-20.4-27.3-31.5-11-11-22.2-20.7-31.4-27.2-11.5-8.1-18-10.1-21.5-6.6s-1.5 9.9 6.6 21.5c6.5 9.2 16.2 20.4 27.3 31.5 11.1 11.1 22.3 20.8 31.5 27.3 7.9 5.6 13.4 8.3 17.2 8.3 1.7 0 3.1-.6 4.2-1.7 3.5-3.6 1.6-10-6.6-21.6zm-41.4-17.3C399.4 28 389.3 12.4 387.8 7.2c5.2 1.5 20.8 11.6 42.5 33.3C452 62.2 462 77.8 463.6 83c-5.2-1.6-20.8-11.6-42.5-33.3z" }));
    }
  }]);

  return SVG;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SVG);

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DocPanel_css__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DocPanel_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__DocPanel_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TitleArea__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__doc_explorer_TypeDoc__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TypeInfoPopover__ = __webpack_require__(186);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var DocPanel = /** @class */ (function (_super) {
    __extends(DocPanel, _super);
    function DocPanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DocPanel.prototype.render = function () {
        var _showChangeButton = this.props._showChangeButton;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "doc-panel" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "contents" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__TitleArea__["a" /* default */], { _showChangeButton: _showChangeButton }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__doc_explorer_TypeDoc__["a" /* default */], null)),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__TypeInfoPopover__["a" /* default */], null)));
    };
    return DocPanel;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (DocPanel);


/***/ }),
/* 140 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TitleArea_css__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TitleArea_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__TitleArea_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions___ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__icons_logo_small_svg__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_toolbox_lib_button__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_toolbox_lib_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_toolbox_lib_button__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var TitleArea = /** @class */ (function (_super) {
    __extends(TitleArea, _super);
    function TitleArea() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TitleArea.prototype.render = function () {
        var _a = this.props, dispatch = _a.dispatch, _showChangeButton = _a._showChangeButton;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "title-area" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "https://github.com/APIs-guru/graphql-voyager" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "logo" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__icons_logo_small_svg__["a" /* default */], null),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h2", { className: "title" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("strong", null, "GraphQL"),
                        " Voyager"))),
            _showChangeButton && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_react_toolbox_lib_button__["Button"], { className: "choosebutton", raised: true, primary: true, label: "Change Schema", onClick: function () { return dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__actions___["H" /* showSchemaModal */])()); } })));
    };
    return TitleArea;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])()(TitleArea));


/***/ }),
/* 142 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};



var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 431.7 433.3" }, this.props), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M429.9 375.9l-95.7-95.7c-1.1-1.1-2.7-1.8-4.2-1.8-1.6 0-3.1.6-4.2 1.8l-6.5 6.5-10.1-10.1 2.9-2.9c4.7-4.7 4.7-12.3 0-17l-2.6-2.6c.2-.6.4-1.3.4-2.1v-39.8c22.9 15.1 46.9 23.5 67.7 23.5 4.8 0 9.5-.5 13.9-1.4 4.3-.9 7.8-4.1 9.1-8.3 1.3-4.2.1-8.8-3-11.9L344.5 161v-24.3c1.2.2 2.5.4 3.8.4 5.1 0 9.9-2 13.5-5.6 3.6-3.6 5.6-8.4 5.6-13.5s-2-9.9-5.6-13.5c-3.6-3.6-8.4-5.6-13.5-5.6s-9.9 2-13.5 5.6-5.6 8.4-5.6 13.5c0 1.3.1 2.5.4 3.8h-24.3l-53.1-53.1c-2.3-2.3-5.3-3.5-8.5-3.5-1.1 0-2.3.2-3.4.5-4.2 1.3-7.4 4.7-8.3 9.1-4.9 23.5 3.4 53.2 22.2 81.6h-39.8c-.5 0-1 .1-1.5.2 3.3-5.3 2.7-12.4-1.9-17-1.9-1.9-4.2-3.1-6.7-3.7L177.6 25.2c.4-.3.8-.7 1.2-1.1 5.5-5.5 5.5-14.5 0-20s-14.5-5.5-20 0-5.5 14.5 0 20c2 2 4.5 3.3 7.1 3.8l26.2 110.6c-.3.3-.7.6-1 .9-5.3 5.3-5.3 14 0 19.3.3.3.7.6 1 .9L159.7 192c-.3-.4-.6-.7-.9-1-5.3-5.3-14-5.3-19.3 0-.3.3-.6.7-.9 1L28 165.9c-.5-2.6-1.8-5.1-3.8-7.1-5.5-5.5-14.5-5.5-20 0s-5.5 14.5 0 20c2.8 2.8 6.4 4.1 10 4.1s7.2-1.4 10-4.1c.4-.4.7-.8 1.1-1.2L136 203.8c.5 2.4 1.8 4.8 3.7 6.7 2.7 2.7 6.2 4 9.7 4 2.1 0 4.2-.5 6.1-1.5l.3.3 99.9 99.9c2.3 2.3 5.4 3.5 8.5 3.5 3.1 0 6.1-1.2 8.5-3.5l3.4-3.4 10.1 10.1-7.4 7.4c-1.1 1.1-1.8 2.7-1.8 4.2 0 1.6.6 3.1 1.8 4.2l95.7 95.7c.3.3.6.5.9.8h.1c.3.2.6.4 1 .5h.1c.3.1.7.2 1 .3h.1c.4.1.7.1 1.1.1s.7 0 1.1-.1h.1c.4-.1.7-.2 1-.3h.1c.3-.1.7-.3 1-.5h.1c.7-.4 1.2-1 1.7-1.7v-.1c.2-.3.4-.6.5-1v-.1c.1-.3.2-.7.3-1v-.1c.1-.4.1-.7.1-1.1v-40.9h40.9c1.7 0 3.3-.7 4.4-1.9 0 0 .1 0 .1-.1 2.1-2.1 2.1-5.9-.3-8.3zm-57.4-1.5h-34.9v-34.9h34.9v34.9zm-46.9-77.1v30.3h-30.3l30.3-30.3zm0 42.2v26.4l-26.4-26.4h26.4zm12-12v-26.9l26.9 26.9h-26.9zm-69.2-114.3h29.3v29.3l-29.3-29.3zm-3.5-42.1l30.1 30.1h-30.1v-30.1zm63.9-25.4l3.4-3.4v6.8l-3.4-3.4zM343 113c1.3-1.3 3.1-2.1 5-2.1s3.7.7 5 2.1c1.3 1.3 2.1 3.1 2.1 5s-.7 3.7-2.1 5c-1.3 1.3-3.1 2.1-5 2.1s-3.7-.7-5-2.1c-1.3-1.3-2.1-3.1-2.1-5s.7-3.7 2.1-5zm-19.2 20.8l-3.4 3.4-3.4-3.4h6.8zm-80.5-56.7l145.6 145.6c-3.6.7-7.5 1.1-11.5 1.1-21.7 0-48.5-10.8-73.4-30.5l-31.4-31.4c-23.2-29.4-34.1-61.5-29.3-84.8zm9.6 120.5l-29.3-29.3h29.3v29.3zm-88.8 7.3l39.5-39.5 99.9 99.9-5.4 5.4c-.8.3-1.5.7-2.1 1.3-.6.6-1 1.3-1.3 2.1l-21.3 21.3c-.8.3-1.5.7-2.1 1.3-.6.6-1 1.3-1.3 2.1l-6 6-99.9-99.9zm120.3 96.4l16.3-16.3 10.1 10.1-16.3 16.3-10.1-10.1zm88.1 111.5l-26.4-26.4h26.4v26.4zm12-65.3l26.9 26.9h-26.9v-26.9z" }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { className: "st0", d: "M217.5 193.4c-5.2 0-10.2 1.5-14.5 4.5-11.8 8-14.9 24.1-6.9 35.9 4.8 7.1 12.8 11.4 21.4 11.4 5.2 0 10.2-1.5 14.5-4.5 11.8-8 14.9-24.1 6.9-35.9-4.8-7.2-12.8-11.4-21.4-11.4zm7.7 37.3c-2.4 1.6-5.1 2.4-7.8 2.4-4.4 0-8.8-2.1-11.5-6.1-4.3-6.3-2.6-14.9 3.7-19.2 2.4-1.6 5.1-2.4 7.8-2.4 4.4 0 8.8 2.1 11.5 6.1 4.3 6.3 2.7 14.9-3.7 19.2z" }));
    }
  }]);

  return SVG;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SVG);

/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TypeDoc_css__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TypeDoc_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__TypeDoc_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__selectors__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__graph__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__TypeList__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__DocNavigation__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_Markdown__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Description__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__TypeLink__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__WrappedTypeName__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Argument__ = __webpack_require__(184);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};















function mapStateToProps(state) {
    return {
        selectedType: Object(__WEBPACK_IMPORTED_MODULE_6__selectors__["b" /* getSelectedType */])(state),
        selectedEdgeId: state.selected.currentEdgeId,
        typeGraph: Object(__WEBPACK_IMPORTED_MODULE_7__graph__["d" /* getTypeGraphSelector */])(state),
    };
}
var TypeDoc = /** @class */ (function (_super) {
    __extends(TypeDoc, _super);
    function TypeDoc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TypeDoc.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.selectedEdgeId !== prevProps.selectedEdgeId) {
            this.ensureActiveVisible();
        }
    };
    TypeDoc.prototype.ensureActiveVisible = function () {
        var itemComponent = this.refs['selectedItem'];
        if (!itemComponent)
            return;
        itemComponent.scrollIntoViewIfNeeded();
    };
    TypeDoc.prototype.renderTypesDef = function (type, typeGraph, selectedId) {
        var typesTitle;
        var types;
        var dispatch = this.props.dispatch;
        switch (type.kind) {
            case 'UNION':
                typesTitle = 'possible types';
                types = type.possibleTypes;
                break;
            case 'INTERFACE':
                typesTitle = 'implementations';
                types = type.derivedTypes;
                break;
            case 'OBJECT':
                typesTitle = 'implements';
                types = type.interfaces;
                break;
            default:
                return null;
        }
        types = __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](types, function (type) { return (typeGraph.nodes[type.type.id] !== undefined); });
        if (__WEBPACK_IMPORTED_MODULE_0_lodash__["isEmpty"](types))
            return null;
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: "doc-category" },
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: "title" }, typesTitle),
            __WEBPACK_IMPORTED_MODULE_0_lodash__["map"](types, function (type) {
                var props = {
                    key: type.id,
                    className: __WEBPACK_IMPORTED_MODULE_3_classnames__('item', {
                        '-selected': type.id === selectedId
                    }),
                    onClick: function () {
                        dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actions__["E" /* selectEdge */])(type.id));
                    }
                };
                if (type.id === selectedId)
                    props.ref = 'selectedItem';
                return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", __assign({}, props),
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_12__TypeLink__["a" /* default */], { type: type.type }),
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_11__Description__["a" /* default */], { text: type.type.description, className: "-linked-type" }));
            })));
    };
    TypeDoc.prototype.renderFields = function (type, selectedId) {
        if (__WEBPACK_IMPORTED_MODULE_0_lodash__["isEmpty"](type.fields))
            return null;
        var dispatch = this.props.dispatch;
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: "doc-category" },
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: "title" }, 'fields'),
            __WEBPACK_IMPORTED_MODULE_0_lodash__["map"](type.fields, function (field) {
                var props = {
                    key: field.name,
                    className: __WEBPACK_IMPORTED_MODULE_3_classnames__('item', {
                        '-selected': field.id === selectedId,
                        '-with-args': !__WEBPACK_IMPORTED_MODULE_0_lodash__["isEmpty"](field.args)
                    }),
                    onClick: function () {
                        dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actions__["E" /* selectEdge */])(field.id));
                    }
                };
                if (field.id === selectedId)
                    props.ref = 'selectedItem';
                return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", __assign({}, props),
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("a", { className: "field-name" }, field.name),
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("span", { className: __WEBPACK_IMPORTED_MODULE_3_classnames__('args-wrap', {
                            '-empty': __WEBPACK_IMPORTED_MODULE_0_lodash__["isEmpty"](field.args)
                        }) }, !__WEBPACK_IMPORTED_MODULE_0_lodash__["isEmpty"](field.args) &&
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("span", { key: "args", className: "args" }, __WEBPACK_IMPORTED_MODULE_0_lodash__["map"](field.args, function (arg) {
                            return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_14__Argument__["a" /* default */], { key: arg.name, arg: arg, expanded: field.id === selectedId });
                        }))),
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_13__WrappedTypeName__["a" /* default */], { container: field }),
                    field.isDeprecated &&
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("span", { className: "doc-alert-text" }, ' (DEPRECATED)'),
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_10__utils_Markdown__["a" /* default */], { text: field.description, className: "description-box -field" }));
            })));
    };
    TypeDoc.prototype.render = function () {
        var _a = this.props, selectedType = _a.selectedType, selectedEdgeId = _a.selectedEdgeId, typeGraph = _a.typeGraph;
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: "type-doc" },
            typeGraph && __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9__DocNavigation__["a" /* default */], null) || __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("span", { className: "loading" }, " Loading... "),
            !selectedType ?
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8__TypeList__["a" /* default */], { typeGraph: typeGraph }) :
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: "scroll-area" },
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_11__Description__["a" /* default */], { className: "-doc-type", text: selectedType.description }),
                    this.renderTypesDef(selectedType, typeGraph, selectedEdgeId),
                    this.renderFields(selectedType, selectedEdgeId))));
    };
    return TypeDoc;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps)(TypeDoc));


/***/ }),
/* 145 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getSelectedType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getPreviousType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reselect__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__graph__ = __webpack_require__(19);



var getSelectedType = Object(__WEBPACK_IMPORTED_MODULE_1_reselect__["createSelector"])(function (state) { return state.selected.currentNodeId; }, function (state) { return Object(__WEBPACK_IMPORTED_MODULE_2__graph__["d" /* getTypeGraphSelector */])(state); }, function (selectedNodeId, typeGraph) {
    console.log();
    return __WEBPACK_IMPORTED_MODULE_0_lodash__["get"](typeGraph, ['nodes', selectedNodeId], null);
});
var getPreviousType = Object(__WEBPACK_IMPORTED_MODULE_1_reselect__["createSelector"])(function (state) { return __WEBPACK_IMPORTED_MODULE_0_lodash__["last"](state.selected.previousTypesIds); }, function (state) { return Object(__WEBPACK_IMPORTED_MODULE_2__graph__["d" /* getTypeGraphSelector */])(state); }, function (previousNodeId, typeGraph) {
    return __WEBPACK_IMPORTED_MODULE_0_lodash__["get"](typeGraph, ['nodes', previousNodeId], null);
});


/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Viewport; });
/* unused harmony export preprocessVizSvg */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_pan_zoom__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_pan_zoom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_pan_zoom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__f_animate__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__f_animate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__f_animate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__redux__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils___ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__introspection__ = __webpack_require__(11);







var RelayIconSvg = __webpack_require__(151);
var svgns = 'http://www.w3.org/2000/svg';
var xlinkns = 'http://www.w3.org/1999/xlink';
var Viewport = /** @class */ (function () {
    function Viewport(store, container) {
        var _this = this;
        this.store = store;
        this.container = container;
        var unsubscribe = [];
        function subscribe() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            unsubscribe.push(__WEBPACK_IMPORTED_MODULE_4__redux__["b" /* observeStore */].apply(void 0, [store].concat(args)));
        }
        this._unsubscribe = Object(__WEBPACK_IMPORTED_MODULE_4__redux__["b" /* observeStore */])(store, function (state) { return state.currentSvgIndex; }, function (svgIdx) {
            unsubscribe.forEach(function (f) { return f(); });
            unsubscribe = [];
            if (svgIdx === null)
                return;
            var cachedSvg = store.getState().svgCache[svgIdx];
            _this.display(cachedSvg.svg);
            subscribe(function (state) { return state.selected.currentNodeId; }, function (id) { return _this.selectNodeById(id); });
            subscribe(function (state) { return state.selected.currentEdgeId; }, function (id) { return _this.selectEdgeById(id); });
            subscribe(function (state) { return state.graphView.focusedId; }, function (id) {
                if (id === null)
                    return;
                _this.focusElement(id);
                store.dispatch(__WEBPACK_IMPORTED_MODULE_3__actions__["B" /* focusElementDone */](id));
            });
        });
        this.resize();
    }
    Viewport.prototype.resize = function () {
        var bbRect = this.container.getBoundingClientRect();
        this.offsetLeft = bbRect.left;
        this.offsetTop = bbRect.top;
    };
    Viewport.prototype.display = function (svgString) {
        var _this = this;
        this.clear();
        this.$svg = preprocessVizSvg(svgString);
        this.container.appendChild(this.$svg);
        // run on next tick
        setTimeout(function () {
            _this.enableZoom();
            _this.bindClick();
            _this.bindHover();
        }, 0);
    };
    Viewport.prototype.clear = function () {
        try {
            this.zoomer && this.zoomer.destroy();
        }
        catch (e) {
            // skip
        }
        this.container.innerHTML = '';
    };
    Viewport.prototype.enableZoom = function () {
        var svgHeight = this.$svg['height'].baseVal.value;
        var svgWidth = this.$svg['width'].baseVal.value;
        var bbRect = this.container.getBoundingClientRect();
        this.maxZoom = Math.max(svgHeight / bbRect.height, svgWidth / bbRect.width);
        this.zoomer = __WEBPACK_IMPORTED_MODULE_1_svg_pan_zoom__(this.$svg, {
            zoomScaleSensitivity: 0.25,
            minZoom: 0.95,
            maxZoom: this.maxZoom,
            controlIconsEnabled: true
        });
        this.zoomer.zoom(0.95);
    };
    Viewport.prototype.bindClick = function () {
        var _this = this;
        var dragged = false;
        var moveHandler = function () { return dragged = true; };
        this.$svg.addEventListener('mousedown', function () {
            dragged = false;
            setTimeout(function () { return _this.$svg.addEventListener('mousemove', moveHandler); });
        });
        this.$svg.addEventListener('mouseup', function (event) {
            _this.$svg.removeEventListener('mousemove', moveHandler);
            if (dragged)
                return;
            var target = event.target;
            if (isLink(target)) {
                var typeId = Object(__WEBPACK_IMPORTED_MODULE_6__introspection__["i" /* typeNameToId */])(target.textContent);
                _this.store.dispatch(__WEBPACK_IMPORTED_MODULE_3__actions__["A" /* focusElement */](typeId));
            }
            else if (isNode(target)) {
                var $node = getParent(target, 'node');
                _this.store.dispatch(__WEBPACK_IMPORTED_MODULE_3__actions__["F" /* selectNode */]($node.id));
            }
            else if (isEdge(target)) {
                var $edge = getParent(target, 'edge');
                _this.store.dispatch(__WEBPACK_IMPORTED_MODULE_3__actions__["E" /* selectEdge */](edgeSource($edge).id));
            }
            else if (!isControl(target)) {
                _this.store.dispatch(__WEBPACK_IMPORTED_MODULE_3__actions__["z" /* clearSelection */]());
            }
        });
    };
    Viewport.prototype.bindHover = function () {
        var $prevHovered = null;
        var $prevHoveredEdge = null;
        function clearSelection() {
            if ($prevHovered)
                $prevHovered.classList.remove('hovered');
            if ($prevHoveredEdge)
                $prevHoveredEdge.classList.remove('hovered');
        }
        this.$svg.addEventListener('mousemove', function (event) {
            var target = event.target;
            if (isEdgeSource(target)) {
                var $sourceGroup = getParent(target, 'edge-source');
                if ($sourceGroup.classList.contains('hovered'))
                    return;
                clearSelection();
                $sourceGroup.classList.add('hovered');
                $prevHovered = $sourceGroup;
                var $edge = edgeFrom($sourceGroup.id);
                $edge.classList.add('hovered');
                $prevHoveredEdge = $edge;
            }
            else {
                clearSelection();
            }
        });
    };
    Viewport.prototype.selectNodeById = function (id) {
        this.deselectNode();
        if (id === null) {
            this.$svg.classList.remove('selection-active');
            return;
        }
        this.$svg.classList.add('selection-active');
        var $selected = document.getElementById(id);
        this.selectNode($selected);
    };
    Viewport.prototype.selectNode = function (node) {
        node.classList.add('selected');
        __WEBPACK_IMPORTED_MODULE_0_lodash__["each"](edgesFromNode(node), function ($edge) {
            $edge.classList.add('highlighted');
            edgeTarget($edge).classList.add('selected-reachable');
        });
        __WEBPACK_IMPORTED_MODULE_0_lodash__["each"](edgesTo(node.id), function ($edge) {
            $edge.classList.add('highlighted');
            edgeSource($edge).parentElement.classList.add('selected-reachable');
        });
    };
    Viewport.prototype.selectEdgeById = function (id) {
        Object(__WEBPACK_IMPORTED_MODULE_5__utils___["d" /* removeClass */])(this.$svg, '.edge.selected', 'selected');
        Object(__WEBPACK_IMPORTED_MODULE_5__utils___["d" /* removeClass */])(this.$svg, '.edge-source.selected', 'selected');
        Object(__WEBPACK_IMPORTED_MODULE_5__utils___["d" /* removeClass */])(this.$svg, '.field.selected', 'selected');
        if (id === null)
            return;
        var $selected = document.getElementById(id);
        if ($selected) {
            var $edge = edgeFrom($selected.id);
            if ($edge)
                $edge.classList.add('selected');
            $selected.classList.add('selected');
        }
    };
    Viewport.prototype.deselectNode = function () {
        Object(__WEBPACK_IMPORTED_MODULE_5__utils___["d" /* removeClass */])(this.$svg, '.node.selected', 'selected');
        Object(__WEBPACK_IMPORTED_MODULE_5__utils___["d" /* removeClass */])(this.$svg, '.highlighted', 'highlighted');
        Object(__WEBPACK_IMPORTED_MODULE_5__utils___["d" /* removeClass */])(this.$svg, '.selected-reachable', 'selected-reachable');
    };
    Viewport.prototype.focusElement = function (id) {
        var bbBox = document.getElementById(id).getBoundingClientRect();
        var currentPan = this.zoomer.getPan();
        var viewPortSizes = this.zoomer.getSizes();
        currentPan.x += viewPortSizes.width / 2 - bbBox.width / 2;
        currentPan.y += viewPortSizes.height / 2 - bbBox.height / 2;
        var zoomUpdateToFit = 1.2 * Math.max(bbBox.height / viewPortSizes.height, bbBox.width / viewPortSizes.width);
        var newZoom = this.zoomer.getZoom() / zoomUpdateToFit;
        var recomendedZoom = this.maxZoom * 0.6;
        if (newZoom > recomendedZoom)
            newZoom = recomendedZoom;
        var newX = currentPan.x - bbBox.left + this.offsetLeft;
        var newY = currentPan.y - bbBox.top + this.offsetTop;
        this.animatePanAndZoom(newX, newY, newZoom);
    };
    Viewport.prototype.animatePanAndZoom = function (x, y, zoomEnd) {
        var _this = this;
        var pan = this.zoomer.getPan();
        var panEnd = { x: x, y: y };
        __WEBPACK_IMPORTED_MODULE_2__f_animate__(pan, panEnd, function (props) {
            _this.zoomer.pan({ x: props.x, y: props.y });
            if (props === panEnd) {
                var zoom = _this.zoomer.getZoom();
                __WEBPACK_IMPORTED_MODULE_2__f_animate__({ zoom: zoom }, { zoom: zoomEnd }, function (props) {
                    _this.zoomer.zoom(props.zoom);
                });
            }
        });
    };
    Viewport.prototype.destroy = function () {
        this._unsubscribe();
        try {
            this.zoomer.destroy();
        }
        catch (e) {
            // skip
        }
    };
    return Viewport;
}());

function preprocessVizSvg(svgString) {
    //Add Relay Icon
    svgString = svgString.replace(/<svg [^>]*>/, '$&' + RelayIconSvg);
    var svg = Object(__WEBPACK_IMPORTED_MODULE_5__utils___["e" /* stringToSvg */])(svgString);
    Object(__WEBPACK_IMPORTED_MODULE_5__utils___["a" /* forEachNode */])(svg, 'a', function ($a) {
        var $g = $a.parentNode;
        var $docFrag = document.createDocumentFragment();
        while ($a.firstChild) {
            var $child = $a.firstChild;
            $docFrag.appendChild($child);
        }
        $g.replaceChild($docFrag, $a);
        $g.id = $g.id.replace(/^a_/, '');
    });
    Object(__WEBPACK_IMPORTED_MODULE_5__utils___["a" /* forEachNode */])(svg, 'title', function ($el) { return $el.remove(); });
    var edgesSources = {};
    Object(__WEBPACK_IMPORTED_MODULE_5__utils___["a" /* forEachNode */])(svg, '.edge', function ($edge) {
        var _a = $edge.id.split(' => '), from = _a[0], to = _a[1];
        $edge.removeAttribute('id');
        $edge.setAttribute('data-from', from);
        $edge.setAttribute('data-to', to);
        edgesSources[from] = true;
    });
    Object(__WEBPACK_IMPORTED_MODULE_5__utils___["a" /* forEachNode */])(svg, '[id]', function ($el) {
        var _a = $el.id.split('::'), tag = _a[0], restOfId = _a.slice(1);
        if (__WEBPACK_IMPORTED_MODULE_0_lodash__["size"](restOfId) < 1)
            return;
        $el.classList.add(tag.toLowerCase().replace(/_/, '-'));
    });
    Object(__WEBPACK_IMPORTED_MODULE_5__utils___["a" /* forEachNode */])(svg, 'g.edge path', function ($path) {
        var $newPath = $path.cloneNode();
        $newPath.classList.add('hover-path');
        $newPath.removeAttribute('stroke-dasharray');
        $path.parentNode.appendChild($newPath);
    });
    Object(__WEBPACK_IMPORTED_MODULE_5__utils___["a" /* forEachNode */])(svg, '.field', function ($field) {
        var texts = $field.querySelectorAll('text');
        texts[0].classList.add('field-name');
        //Remove spaces used for text alligment
        texts[1].remove();
        if (edgesSources[$field.id])
            $field.classList.add('edge-source');
        for (var i = 2; i < texts.length; ++i) {
            var str = texts[i].innerHTML;
            if (str === '{R}') {
                var $iconPlaceholder = texts[i];
                var height = 22;
                var width = 22;
                var $useRelayIcon = document.createElementNS(svgns, 'use');
                $useRelayIcon.setAttributeNS(xlinkns, 'href', '#RelayIcon');
                $useRelayIcon.setAttribute('width', width + "px");
                $useRelayIcon.setAttribute('height', height + "px");
                //FIXME: remove hardcoded offset
                var y = parseInt($iconPlaceholder.getAttribute('y')) - 15;
                $useRelayIcon.setAttribute('x', $iconPlaceholder.getAttribute('x'));
                $useRelayIcon.setAttribute('y', y.toString());
                $field.replaceChild($useRelayIcon, $iconPlaceholder);
                continue;
            }
            texts[i].classList.add('field-type');
            if (edgesSources[$field.id] && !/[\[\]\!]/.test(str))
                texts[i].classList.add('type-link');
        }
    });
    Object(__WEBPACK_IMPORTED_MODULE_5__utils___["a" /* forEachNode */])(svg, '.derived-type', function ($derivedType) {
        $derivedType.classList.add('edge-source');
        $derivedType.querySelector('text').classList.add('type-link');
    });
    Object(__WEBPACK_IMPORTED_MODULE_5__utils___["a" /* forEachNode */])(svg, '.possible-type', function ($possibleType) {
        $possibleType.classList.add('edge-source');
        $possibleType.querySelector('text').classList.add('type-link');
    });
    return svg;
}
function getParent(elem, className) {
    while (elem && elem.tagName !== 'svg') {
        if (elem.classList.contains(className))
            return elem;
        elem = elem.parentNode;
    }
    return null;
}
function isNode(elem) {
    return getParent(elem, 'node') != null;
}
function isEdge(elem) {
    return getParent(elem, 'edge') != null;
}
function isLink(elem) {
    return elem.classList.contains('type-link');
}
function isEdgeSource(elem) {
    return getParent(elem, 'edge-source') != null;
}
function isControl(elem) {
    if (!(elem instanceof SVGElement))
        return false;
    return elem.className.baseVal.startsWith('svg-pan-zoom');
}
function edgeSource(edge) {
    return document.getElementById(edge['dataset']['from']);
}
function edgeTarget(edge) {
    return document.getElementById(edge['dataset']['to']);
}
function edgeFrom(id) {
    return document.querySelector(".edge[data-from='" + id + "']");
}
function edgesFromNode($node) {
    var edges = [];
    Object(__WEBPACK_IMPORTED_MODULE_5__utils___["a" /* forEachNode */])($node, '.edge-source', function ($source) {
        var $edge = edgeFrom($source.id);
        edges.push($edge);
    });
    return edges;
}
function edgesTo(id) {
    return __WEBPACK_IMPORTED_MODULE_0_lodash__["toArray"](document.querySelectorAll(".edge[data-to='" + id + "']"));
}


/***/ }),
/* 148 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_148__;

/***/ }),
/* 149 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_149__;

/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = forEachNode;
/* unused harmony export addClass */
/* harmony export (immutable) */ __webpack_exports__["b"] = removeClass;
/* harmony export (immutable) */ __webpack_exports__["c"] = stringToSvg;
function forEachNode(parent, selector, fn) {
    var $nodes = parent.querySelectorAll(selector);
    for (var i = 0; i < $nodes.length; i++) {
        fn($nodes[i]);
    }
}
function addClass(parent, selector, className) {
    forEachNode(parent, selector, function (node) { return node.classList.add(className); });
}
function removeClass(parent, selector, className) {
    forEachNode(parent, selector, function (node) { return node.classList.remove(className); });
}
function stringToSvg(svgString) {
    var svgDoc = new DOMParser().parseFromString(svgString, 'image/svg+xml');
    return document.importNode(svgDoc.documentElement, true);
}


/***/ }),
/* 151 */
/***/ (function(module, exports) {

module.exports = "<symbol viewBox=\"0 0 600 600\" id=\"RelayIcon\"><g fill=\"#F26B00\"><path d=\"M142.536 198.858c0 26.36-21.368 47.72-47.72 47.72-26.36 0-47.722-21.36-47.722-47.72s21.36-47.72 47.72-47.72c26.355 0 47.722 21.36 47.722 47.72\"/><path d=\"M505.18 414.225H238.124c-35.25 0-63.926-28.674-63.926-63.923s28.678-63.926 63.926-63.926h120.78c20.816 0 37.753-16.938 37.753-37.756s-16.938-37.756-37.753-37.756H94.81c-7.227 0-13.086-5.86-13.086-13.085 0-7.227 5.86-13.086 13.085-13.086h264.093c35.25 0 63.923 28.678 63.923 63.926s-28.674 63.923-63.923 63.923h-120.78c-20.82 0-37.756 16.938-37.756 37.76 0 20.816 16.938 37.753 37.756 37.753H505.18c7.227 0 13.086 5.86 13.086 13.085 0 7.226-5.858 13.085-13.085 13.085z\"/><path d=\"M457.464 401.142c0-26.36 21.36-47.72 47.72-47.72s47.72 21.36 47.72 47.72-21.36 47.72-47.72 47.72-47.72-21.36-47.72-47.72\"/></g></symbol>"

/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SVGRender; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dot__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__redux__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils___ = __webpack_require__(46);




// just reference it to to trigger worker loader
__webpack_require__(154);
var SVGRender = /** @class */ (function () {
    function SVGRender(store) {
        var _this = this;
        this.store = store;
        Object(__WEBPACK_IMPORTED_MODULE_3__utils___["c" /* loadWorker */])('voyager.worker.js').then(function (worker) {
            _this.worker = worker;
            _this.unsubscribe = Object(__WEBPACK_IMPORTED_MODULE_1__redux__["b" /* observeStore */])(store, function (state) { return state.currentSvgIndex; }, __WEBPACK_IMPORTED_MODULE_0__dot__["a" /* getDotSelector */], function (currentSvgIndex, dot) {
                if (currentSvgIndex === null && dot !== null)
                    _this._renderSvg(dot);
            });
        });
    }
    SVGRender.prototype.destroy = function () {
        this.unsubscribe();
    };
    SVGRender.prototype._renderSvg = function (dot) {
        var _this = this;
        var cb = function (event) {
            var data = event.data;
            if (data.result === 'success')
                _this.store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actions__["I" /* svgRenderingFinished */])(data.svgString));
            else
                _this.store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actions__["D" /* reportError */])(data.msg));
            _this.worker.removeEventListener('message', cb);
        };
        this.worker.postMessage({ dot: dot });
        this.worker.addEventListener('message', cb);
    };
    return SVGRender;
}());

;


/***/ }),
/* 153 */
/***/ (function(module, exports) {

module.exports = function anonymous(locals, escapeFn, include, rethrow
/*``*/) {
"use strict";
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
        .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
  var __output = [], __append = __output.push.bind(__output);
    ; 
  var typeGraph = locals.typeGraph;
  var _ = locals._;
  var stringifyWrappers = locals.stringifyWrappers;
 
    ;  function HtmlId(id) {
  return 'HREF="remove_me_url" ID="' + id + '"';
} 
    ;  function TEXT(str) {
  if (str === '')
    return '';
  str = str.replace(/]/, '&#93;');
  return '<FONT>' + str + '</FONT>';
} 
    ;  var RELAY_ICON = TEXT('{R}'); 
    ; __append("digraph {\n  graph [\n    rankdir = \"LR\"\n  ];\n  node [\n    fontsize = \"16\"\n    fontname = \"helvetica, open-sans\"\n    shape = \"plaintext\"\n  ];\n  edge [\n  ];\n  ranksep = 2.0\n")
    ;  _.each(typeGraph.nodes, function(node) { 
    ; __append("  \"")
    ; __append( node.name )
    ; __append("\" [\n    id = \"")
    ; __append( node.id )
    ; __append("\"\n    label = <<TABLE ALIGN=\"LEFT\" BORDER=\"0\" CELLBORDER=\"1\" CELLSPACING=\"0\" CELLPADDING=\"5\">\n      <TR>\n")
    ;  var kindLabel = node.kind !== 'OBJECT' ? '<<' + node.kind.toLowerCase() + '>>' : '' 
    ; __append("        <TD CELLPADDING=\"4\" ")
    ; __append( HtmlId('TYPE_TITLE::' + node.name) )
    ; __append("\n          ><FONT POINT-SIZE=\"18\">")
    ; __append( node.name )
    ; __append("</FONT><BR/>")
    ; __append(escapeFn( kindLabel ))
    ; __append("</TD>\n      </TR>\n")
    ;  _.each(node.fields, function(field) { 
    ; __append("      <TR>\n        <TD ")
    ; __append( HtmlId(field.id) )
    ; __append("\n          ALIGN=\"LEFT\" PORT=\"")
    ; __append( field.name )
    ; __append("\">\n          <TABLE CELLPADDING=\"0\" CELLSPACING=\"0\" BORDER=\"0\">\n            <TR>\n              <TD ALIGN=\"LEFT\">")
    ; __append( field.name )
    ; __append("<FONT>  </FONT></TD>\n")
    ;  var parts = stringifyWrappers(field.typeWrappers); 
    ;  var relayIcon = field.relayType ? RELAY_ICON : ''; 
    ; __append("              <TD ALIGN=\"RIGHT\">")
    ; __append( relayIcon )
    ; __append( TEXT(parts[0]) )
    ; __append( field.type.name )
    ; __append( TEXT(parts[1]) )
    ; __append("</TD>\n            </TR>\n          </TABLE>\n        </TD>\n      </TR>\n")
    ;  }); 
    ;  if (!_.isEmpty(node.possibleTypes)) { 
    ; __append("      <TR>\n        <TD>possible types</TD>\n      </TR>\n")
    ;  _.each(node.possibleTypes, function (possibleType) { 
    ; __append("      <TR>\n        <TD ")
    ; __append( HtmlId(possibleType.id) )
    ; __append("\n          ALIGN=\"LEFT\" PORT=\"")
    ; __append( possibleType.type.name )
    ; __append("\">")
    ; __append( possibleType.type.name )
    ; __append("</TD>\n      </TR>\n")
    ;  }); 
    ;  } 
    ;  if (!_.isEmpty(node.derivedTypes)) { 
    ; __append("      <TR>\n        <TD>implementations</TD>\n      </TR>\n")
    ;  _.each(node.derivedTypes, function(derivedType) { 
    ; __append("      <TR>\n        <TD ")
    ; __append( HtmlId(derivedType.id) )
    ; __append("\n          ALIGN=\"LEFT\" PORT=\"")
    ; __append( derivedType.type.name )
    ; __append("\">")
    ; __append( derivedType.type.name )
    ; __append("</TD>\n      </TR>\n")
    ;  }); 
    ;  } 
    ; __append("    </TABLE>>\n  ];\n")
    ;  _(node.fields).each(function(field) { 
    ;  if (!typeGraph.nodes[field.type.id]) return; 
    ; __append("  \"")
    ; __append( node.name )
    ; __append("\":\"")
    ; __append( field.name )
    ; __append("\" -> \"")
    ; __append( field.type.name )
    ; __append("\" [\n    id = \"")
    ; __append( field.id )
    ; __append(" => ")
    ; __append( field.type.id )
    ; __append("\"\n    label = \"")
    ; __append( node.name )
    ; __append(":")
    ; __append( field.name )
    ; __append("\"\n  ]\n")
    ;  }); 
    ;  _(node.possibleTypes).each(function(possibleType) { 
    ; __append("  \"")
    ; __append( node.name )
    ; __append("\":\"")
    ; __append( possibleType.type.name )
    ; __append("\" -> \"")
    ; __append( possibleType.type.name )
    ; __append("\" [\n    id = \"")
    ; __append( possibleType.id )
    ; __append(" => ")
    ; __append( possibleType.type.id )
    ; __append("\"\n    style = \"dashed\"\n  ]\n")
    ;  }); 
    ;  _(node.derivedTypes).each(function(derivedType) { 
    ; __append("  \"")
    ; __append( node.name )
    ; __append("\":\"")
    ; __append( derivedType.type.name )
    ; __append("\" -> \"")
    ; __append( derivedType.type.name )
    ; __append("\" [\n    id = \"")
    ; __append( derivedType.id )
    ; __append(" => ")
    ; __append( derivedType.type.id )
    ; __append("\"\n    style = \"dotted\"\n  ]\n")
    ;  }); 
    ;  }); 
    ; __append("}\n")
  return __output.join("");

}

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function() {
	return new Worker(__webpack_require__.p + "voyager.worker.js");
};

/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TypeList_css__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TypeList_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__TypeList_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__TypeLink__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Description__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__FocusTypeButton__ = __webpack_require__(71);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();








var TypeList = /** @class */ (function (_super) {
    __extends(TypeList, _super);
    function TypeList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TypeList.prototype.renderItem = function (type, className) {
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { key: type.id, className: __WEBPACK_IMPORTED_MODULE_3_classnames__('typelist-item', className || '') },
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__TypeLink__["a" /* default */], { type: type }),
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7__FocusTypeButton__["a" /* default */], { type: type }),
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__Description__["a" /* default */], { className: "-doc-type", text: type.description })));
    };
    TypeList.prototype.render = function () {
        var _this = this;
        var typeGraph = this.props.typeGraph;
        if (typeGraph === null)
            return null;
        var rootType = typeGraph.nodes[typeGraph.rootId];
        var types = __WEBPACK_IMPORTED_MODULE_0_lodash__(typeGraph.nodes)
            .values()
            .reject({ id: rootType.id })
            .sortBy('name').value();
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: "scroll-area doc-explorer-type-list" },
            this.renderItem(rootType, '-root'),
            __WEBPACK_IMPORTED_MODULE_0_lodash__["map"](types, function (type) { return _this.renderItem(type); })));
    };
    return TypeList;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])()(TypeList));


/***/ }),
/* 156 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 157 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 158 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 159 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_159__;

/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};



var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", _extends({ height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" }, this.props), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" }));
    }
  }]);

  return SVG;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SVG);

/***/ }),
/* 161 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DocNavigation_css__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DocNavigation_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__DocNavigation_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selectors__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions___ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__FocusTypeButton__ = __webpack_require__(71);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






function mapStateToProps(state) {
    return {
        selectedType: Object(__WEBPACK_IMPORTED_MODULE_3__selectors__["b" /* getSelectedType */])(state),
        previousType: Object(__WEBPACK_IMPORTED_MODULE_3__selectors__["a" /* getPreviousType */])(state),
    };
}
var DocNavigation = /** @class */ (function (_super) {
    __extends(DocNavigation, _super);
    function DocNavigation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DocNavigation.prototype.render = function () {
        var _a = this.props, selectedType = _a.selectedType, previousType = _a.previousType, dispatch = _a.dispatch;
        var clickHandler = function () {
            if (!previousType)
                return dispatch(Object(__WEBPACK_IMPORTED_MODULE_4__actions___["z" /* clearSelection */])());
            dispatch(Object(__WEBPACK_IMPORTED_MODULE_4__actions___["A" /* focusElement */])(previousType.id));
            dispatch(Object(__WEBPACK_IMPORTED_MODULE_4__actions___["G" /* selectPreviousType */])());
        };
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "doc-navigation" },
            selectedType && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "back", onClick: clickHandler }, previousType ? previousType.name : 'Type List') || __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "header" }, "Type List"),
            selectedType &&
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "active" },
                    selectedType.name,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__FocusTypeButton__["a" /* default */], { type: selectedType }))));
    };
    return DocNavigation;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps)(DocNavigation));


/***/ }),
/* 163 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tooltipFactory = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Tooltip = __webpack_require__(165);

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _theme = __webpack_require__(179);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var themedTooltipFactory = function themedTooltipFactory(options) {
  return (0, _Tooltip2.default)(_extends({}, options, { theme: _theme2.default }));
};
exports.default = (0, _Tooltip2.default)({ theme: _theme2.default });
exports.tooltipFactory = themedTooltipFactory;

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__(1);

var _classnames3 = _interopRequireDefault(_classnames2);

var _reactCssThemr = __webpack_require__(7);

var _Portal = __webpack_require__(66);

var _Portal2 = _interopRequireDefault(_Portal);

var _utils = __webpack_require__(166);

var _identifiers = __webpack_require__(8);

var _events = __webpack_require__(45);

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var POSITION = {
  BOTTOM: 'bottom',
  HORIZONTAL: 'horizontal',
  LEFT: 'left',
  RIGHT: 'right',
  TOP: 'top',
  VERTICAL: 'vertical'
};

var defaults = {
  className: '',
  delay: 0,
  hideOnClick: true,
  passthrough: true,
  showOnClick: false,
  position: POSITION.VERTICAL,
  theme: {}
};

var tooltipFactory = function tooltipFactory() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _defaults$options = _extends({}, defaults, options),
      defaultClassName = _defaults$options.className,
      defaultDelay = _defaults$options.delay,
      defaultHideOnClick = _defaults$options.hideOnClick,
      defaultShowOnClick = _defaults$options.showOnClick,
      defaultPassthrough = _defaults$options.passthrough,
      defaultPosition = _defaults$options.position,
      defaultTheme = _defaults$options.theme;

  return function (ComposedComponent) {
    var TooltippedComponent = function (_Component) {
      _inherits(TooltippedComponent, _Component);

      function TooltippedComponent() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, TooltippedComponent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TooltippedComponent.__proto__ || Object.getPrototypeOf(TooltippedComponent)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
          active: false,
          position: _this.props.tooltipPosition,
          visible: false
        }, _this.onTransformEnd = function (e) {
          if (e.propertyName === 'transform') {
            _events2.default.removeEventListenerOnTransitionEnded(_this.tooltipNode, _this.onTransformEnd);
            _this.setState({ visible: false });
          }
        }, _this.handleMouseEnter = function (event) {
          _this.activate(_this.calculatePosition(event.currentTarget));
          if (_this.props.onMouseEnter) _this.props.onMouseEnter(event);
        }, _this.handleMouseLeave = function (event) {
          _this.deactivate();
          if (_this.props.onMouseLeave) _this.props.onMouseLeave(event);
        }, _this.handleClick = function (event) {
          if (_this.props.tooltipHideOnClick && _this.state.active) {
            _this.deactivate();
          }

          if (_this.props.tooltipShowOnClick && !_this.state.active) {
            _this.activate(_this.calculatePosition(event.currentTarget));
          }

          if (_this.props.onClick) _this.props.onClick(event);
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }

      _createClass(TooltippedComponent, [{
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          if (this.tooltipNode) {
            _events2.default.removeEventListenerOnTransitionEnded(this.tooltipNode, this.onTransformEnd);
          }
          if (this.timeout) clearTimeout(this.timeout);
        }
      }, {
        key: 'getPosition',
        value: function getPosition(element) {
          var tooltipPosition = this.props.tooltipPosition;

          if (tooltipPosition === POSITION.HORIZONTAL) {
            var origin = element.getBoundingClientRect();

            var _getViewport = (0, _utils.getViewport)(),
                ww = _getViewport.width;

            var toRight = origin.left < ww / 2 - origin.width / 2;
            return toRight ? POSITION.RIGHT : POSITION.LEFT;
          } else if (tooltipPosition === POSITION.VERTICAL) {
            var _origin = element.getBoundingClientRect();

            var _getViewport2 = (0, _utils.getViewport)(),
                wh = _getViewport2.height;

            var toBottom = _origin.top < wh / 2 - _origin.height / 2;
            return toBottom ? POSITION.BOTTOM : POSITION.TOP;
          }
          return tooltipPosition;
        }
      }, {
        key: 'activate',
        value: function activate(_ref2) {
          var _this2 = this;

          var top = _ref2.top,
              left = _ref2.left,
              position = _ref2.position;

          if (this.timeout) clearTimeout(this.timeout);
          this.setState({ visible: true, position: position });
          this.timeout = setTimeout(function () {
            _this2.setState({ active: true, top: top, left: left });
          }, this.props.tooltipDelay);
        }
      }, {
        key: 'deactivate',
        value: function deactivate() {
          if (this.timeout) clearTimeout(this.timeout);
          if (this.state.active) {
            _events2.default.addEventListenerOnTransitionEnded(this.tooltipNode, this.onTransformEnd);
            this.setState({ active: false });
          } else if (this.state.visible) {
            this.setState({ visible: false });
          }
        }
      }, {
        key: 'calculatePosition',
        value: function calculatePosition(element) {
          var position = this.getPosition(element);

          var _element$getBoundingC = element.getBoundingClientRect(),
              top = _element$getBoundingC.top,
              left = _element$getBoundingC.left,
              height = _element$getBoundingC.height,
              width = _element$getBoundingC.width;

          var xOffset = window.scrollX || window.pageXOffset;
          var yOffset = window.scrollY || window.pageYOffset;
          if (position === POSITION.BOTTOM) {
            return {
              top: top + height + yOffset,
              left: left + width / 2 + xOffset,
              position: position
            };
          } else if (position === POSITION.TOP) {
            return {
              top: top + yOffset,
              left: left + width / 2 + xOffset,
              position: position
            };
          } else if (position === POSITION.LEFT) {
            return {
              top: top + height / 2 + yOffset,
              left: left + xOffset,
              position: position
            };
          } else if (position === POSITION.RIGHT) {
            return {
              top: top + height / 2 + yOffset,
              left: left + width + xOffset,
              position: position
            };
          }
          return undefined;
        }
      }, {
        key: 'render',
        value: function render() {
          var _classnames,
              _this3 = this;

          var _state = this.state,
              active = _state.active,
              left = _state.left,
              top = _state.top,
              position = _state.position,
              visible = _state.visible;

          var positionClass = 'tooltip' + (position.charAt(0).toUpperCase() + position.slice(1));

          var _props = this.props,
              children = _props.children,
              className = _props.className,
              theme = _props.theme,
              onClick = _props.onClick,
              onMouseEnter = _props.onMouseEnter,
              onMouseLeave = _props.onMouseLeave,
              tooltip = _props.tooltip,
              tooltipDelay = _props.tooltipDelay,
              tooltipHideOnClick = _props.tooltipHideOnClick,
              tooltipPosition = _props.tooltipPosition,
              tooltipShowOnClick = _props.tooltipShowOnClick,
              other = _objectWithoutProperties(_props, ['children', 'className', 'theme', 'onClick', 'onMouseEnter', 'onMouseLeave', 'tooltip', 'tooltipDelay', 'tooltipHideOnClick', 'tooltipPosition', 'tooltipShowOnClick']);

          var _className = (0, _classnames3.default)(theme.tooltip, (_classnames = {}, _defineProperty(_classnames, theme.tooltipActive, active), _defineProperty(_classnames, theme[positionClass], theme[positionClass]), _classnames));

          var childProps = _extends({}, other, {
            className: className,
            onClick: this.handleClick,
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave
          });

          var shouldPass = typeof ComposedComponent !== 'string' && defaultPassthrough;
          var finalProps = shouldPass ? _extends({}, childProps, { theme: theme }) : childProps;

          return _react2.default.createElement(ComposedComponent, finalProps, children, visible && _react2.default.createElement(
            _Portal2.default,
            null,
            _react2.default.createElement(
              'span',
              {
                ref: function ref(node) {
                  _this3.tooltipNode = node;
                },
                className: _className,
                'data-react-toolbox': 'tooltip',
                style: { top: top, left: left }
              },
              _react2.default.createElement(
                'span',
                { className: theme.tooltipInner },
                tooltip
              )
            )
          ));
        }
      }]);

      return TooltippedComponent;
    }(_react.Component);

    TooltippedComponent.propTypes = {
      children: _propTypes2.default.node,
      className: _propTypes2.default.string,
      onClick: _propTypes2.default.func,
      onMouseEnter: _propTypes2.default.func,
      onMouseLeave: _propTypes2.default.func,
      theme: _propTypes2.default.shape({
        tooltip: _propTypes2.default.string,
        tooltipActive: _propTypes2.default.string,
        tooltipWrapper: _propTypes2.default.string
      }),
      tooltip: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
      tooltipDelay: _propTypes2.default.number,
      tooltipHideOnClick: _propTypes2.default.bool,
      tooltipPosition: _propTypes2.default.oneOf(Object.keys(POSITION).map(function (key) {
        return POSITION[key];
      })),
      tooltipShowOnClick: _propTypes2.default.bool
    };
    TooltippedComponent.defaultProps = {
      className: defaultClassName,
      tooltipDelay: defaultDelay,
      tooltipHideOnClick: defaultHideOnClick,
      tooltipPosition: defaultPosition,
      tooltipShowOnClick: defaultShowOnClick
    };


    return (0, _reactCssThemr.themr)(_identifiers.TOOLTIP, defaultTheme)(TooltippedComponent);
  };
};

exports.default = tooltipFactory;

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAnimationModule = exports.removeNamespace = exports.transformKeys = exports.prepareValueForInput = exports.inputTypeForPrototype = exports.cloneObject = exports.getViewport = exports.round = exports.range = exports.angle360FromPositions = exports.angleFromPositions = undefined;

var _assoc = __webpack_require__(167);

var _assoc2 = _interopRequireDefault(_assoc);

var _compose = __webpack_require__(168);

var _compose2 = _interopRequireDefault(_compose);

var _keys = __webpack_require__(64);

var _keys2 = _interopRequireDefault(_keys);

var _reduce = __webpack_require__(73);

var _reduce2 = _interopRequireDefault(_reduce);

var _pickBy = __webpack_require__(178);

var _pickBy2 = _interopRequireDefault(_pickBy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var angleFromPositions = exports.angleFromPositions = function angleFromPositions(cx, cy, ex, ey) {
  var theta = Math.atan2(ey - cy, ex - cx) + Math.PI / 2;
  return theta * 180 / Math.PI;
};

var angle360FromPositions = exports.angle360FromPositions = function angle360FromPositions(cx, cy, ex, ey) {
  var angle = angleFromPositions(cx, cy, ex, ey);
  return angle < 0 ? 360 + angle : angle;
};

var range = exports.range = function range() {
  var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var stop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var _start = 0,
      _stop = start;

  if (stop !== null) {
    _start = start;
    _stop = stop;
  }
  var length = Math.max(Math.ceil((_stop - _start) / step), 0);
  var _range = Array(length);

  for (var idx = 0; idx < length; idx += 1, _start += step) {
    _range[idx] = _start;
  }

  return _range;
};

var round = exports.round = function round(number, decimals) {
  if (!isNaN(parseFloat(number)) && isFinite(number)) {
    var decimalPower = Math.pow(10, decimals);
    return Math.round(parseFloat(number) * decimalPower) / decimalPower;
  }
  return NaN;
};

var getViewport = exports.getViewport = function getViewport() {
  return {
    height: window.innerHeight || document.documentElement.offsetHeight,
    width: window.innerWidth || document.documentElement.offsetWidth
  };
};

var cloneObject = exports.cloneObject = function cloneObject(object) {
  return JSON.parse(JSON.stringify(object));
};

var inputTypeForPrototype = exports.inputTypeForPrototype = function inputTypeForPrototype(prototype) {
  if (prototype === Date) return 'date';
  if (prototype === Number) return 'number';
  if (prototype === Boolean) return 'checkbox';
  return 'text';
};

var prepareValueForInput = exports.prepareValueForInput = function prepareValueForInput(value, type) {
  if (type === 'date') return new Date(value).toISOString().slice(0, 10);
  if (type === 'checkbox') {
    return value ? 'on' : '';
  }
  return value;
};

var transformKeys = exports.transformKeys = function transformKeys(fn) {
  return function (obj) {
    var addTransformedKey = function addTransformedKey(result, key) {
      return (0, _assoc2.default)(fn(key), obj[key], result);
    };
    return (0, _reduce2.default)(addTransformedKey, {}, (0, _keys2.default)(obj));
  };
};

var removeNamespace = exports.removeNamespace = function removeNamespace(namespace) {
  return function (key) {
    var capitalized = key.substr(namespace.length);
    return capitalized.slice(0, 1).toLowerCase() + capitalized.slice(1);
  };
};

var getAnimationModule = exports.getAnimationModule = function getAnimationModule(animation, theme) {
  return (0, _compose2.default)(transformKeys(removeNamespace(animation)), (0, _pickBy2.default)(function (v, k) {
    return k.startsWith(animation);
  }))(theme);
};

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(50);


/**
 * Makes a shallow clone of an object, setting or overriding the specified
 * property with the given value. Note that this copies and flattens prototype
 * properties onto the new object as well. All non-primitive properties are
 * copied by reference.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @sig String -> a -> {k: v} -> {k: v}
 * @param {String} prop The property name to set
 * @param {*} val The new value
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original except for the changed property.
 * @see R.dissoc
 * @example
 *
 *      R.assoc('c', 3, {a: 1, b: 2}); //=> {a: 1, b: 2, c: 3}
 */
module.exports = _curry3(function assoc(prop, val, obj) {
  var result = {};
  for (var p in obj) {
    result[p] = obj[p];
  }
  result[prop] = val;
  return result;
});


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

var pipe = __webpack_require__(169);
var reverse = __webpack_require__(177);


/**
 * Performs right-to-left function composition. The rightmost function may have
 * any arity; the remaining functions must be unary.
 *
 * **Note:** The result of compose is not automatically curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig ((y -> z), (x -> y), ..., (o -> p), ((a, b, ..., n) -> o)) -> ((a, b, ..., n) -> z)
 * @param {...Function} ...functions The functions to compose
 * @return {Function}
 * @see R.pipe
 * @example
 *
 *      var classyGreeting = (firstName, lastName) => "The name's " + lastName + ", " + firstName + " " + lastName
 *      var yellGreeting = R.compose(R.toUpper, classyGreeting);
 *      yellGreeting('James', 'Bond'); //=> "THE NAME'S BOND, JAMES BOND"
 *
 *      R.compose(Math.abs, R.add(1), R.multiply(2))(-4) //=> 7
 *
 * @symb R.compose(f, g, h)(a, b) = f(g(h(a, b)))
 */
module.exports = function compose() {
  if (arguments.length === 0) {
    throw new Error('compose requires at least one argument');
  }
  return pipe.apply(this, reverse(arguments));
};


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

var _arity = __webpack_require__(72);
var _pipe = __webpack_require__(170);
var reduce = __webpack_require__(73);
var tail = __webpack_require__(175);


/**
 * Performs left-to-right function composition. The leftmost function may have
 * any arity; the remaining functions must be unary.
 *
 * In some libraries this function is named `sequence`.
 *
 * **Note:** The result of pipe is not automatically curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z)
 * @param {...Function} functions
 * @return {Function}
 * @see R.compose
 * @example
 *
 *      var f = R.pipe(Math.pow, R.negate, R.inc);
 *
 *      f(3, 4); // -(3^4) + 1
 * @symb R.pipe(f, g, h)(a, b) = h(g(f(a, b)))
 */
module.exports = function pipe() {
  if (arguments.length === 0) {
    throw new Error('pipe requires at least one argument');
  }
  return _arity(arguments[0].length,
                reduce(_pipe, arguments[0], tail(arguments)));
};


/***/ }),
/* 170 */
/***/ (function(module, exports) {

module.exports = function _pipe(f, g) {
  return function() {
    return g.call(this, f.apply(this, arguments));
  };
};


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

var _xwrap = __webpack_require__(172);
var bind = __webpack_require__(173);
var isArrayLike = __webpack_require__(174);


module.exports = (function() {
  function _arrayReduce(xf, acc, list) {
    var idx = 0;
    var len = list.length;
    while (idx < len) {
      acc = xf['@@transducer/step'](acc, list[idx]);
      if (acc && acc['@@transducer/reduced']) {
        acc = acc['@@transducer/value'];
        break;
      }
      idx += 1;
    }
    return xf['@@transducer/result'](acc);
  }

  function _iterableReduce(xf, acc, iter) {
    var step = iter.next();
    while (!step.done) {
      acc = xf['@@transducer/step'](acc, step.value);
      if (acc && acc['@@transducer/reduced']) {
        acc = acc['@@transducer/value'];
        break;
      }
      step = iter.next();
    }
    return xf['@@transducer/result'](acc);
  }

  function _methodReduce(xf, acc, obj) {
    return xf['@@transducer/result'](obj.reduce(bind(xf['@@transducer/step'], xf), acc));
  }

  var symIterator = (typeof Symbol !== 'undefined') ? Symbol.iterator : '@@iterator';
  return function _reduce(fn, acc, list) {
    if (typeof fn === 'function') {
      fn = _xwrap(fn);
    }
    if (isArrayLike(list)) {
      return _arrayReduce(fn, acc, list);
    }
    if (typeof list.reduce === 'function') {
      return _methodReduce(fn, acc, list);
    }
    if (list[symIterator] != null) {
      return _iterableReduce(fn, acc, list[symIterator]());
    }
    if (typeof list.next === 'function') {
      return _iterableReduce(fn, acc, list);
    }
    throw new TypeError('reduce: list must be array or iterable');
  };
}());


/***/ }),
/* 172 */
/***/ (function(module, exports) {

module.exports = (function() {
  function XWrap(fn) {
    this.f = fn;
  }
  XWrap.prototype['@@transducer/init'] = function() {
    throw new Error('init not implemented on XWrap');
  };
  XWrap.prototype['@@transducer/result'] = function(acc) { return acc; };
  XWrap.prototype['@@transducer/step'] = function(acc, x) {
    return this.f(acc, x);
  };

  return function _xwrap(fn) { return new XWrap(fn); };
}());


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

var _arity = __webpack_require__(72);
var _curry2 = __webpack_require__(30);


/**
 * Creates a function that is bound to a context.
 * Note: `R.bind` does not provide the additional argument-binding capabilities of
 * [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Function
 * @category Object
 * @sig (* -> *) -> {*} -> (* -> *)
 * @param {Function} fn The function to bind to context
 * @param {Object} thisObj The context to bind `fn` to
 * @return {Function} A function that will execute in the context of `thisObj`.
 * @see R.partial
 * @example
 *
 *      var log = R.bind(console.log, console);
 *      R.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({a: 1}); //=> {a: 3}
 *      // logs {a: 2}
 * @symb R.bind(f, o)(a, b) = f.call(o, a, b)
 */
module.exports = _curry2(function bind(fn, thisObj) {
  return _arity(fn.length, function() {
    return fn.apply(thisObj, arguments);
  });
});


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(17);
var _isArray = __webpack_require__(74);
var _isString = __webpack_require__(75);


/**
 * Tests whether or not an object is similar to an array.
 *
 * @func
 * @memberOf R
 * @since v0.5.0
 * @category Type
 * @category List
 * @sig * -> Boolean
 * @param {*} x The object to test.
 * @return {Boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.
 * @deprecated since v0.23.0
 * @example
 *
 *      R.isArrayLike([]); //=> true
 *      R.isArrayLike(true); //=> false
 *      R.isArrayLike({}); //=> false
 *      R.isArrayLike({length: 10}); //=> false
 *      R.isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true
 */
module.exports = _curry1(function isArrayLike(x) {
  if (_isArray(x)) { return true; }
  if (!x) { return false; }
  if (typeof x !== 'object') { return false; }
  if (_isString(x)) { return false; }
  if (x.nodeType === 1) { return !!x.length; }
  if (x.length === 0) { return true; }
  if (x.length > 0) {
    return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
  }
  return false;
});


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

var _checkForMethod = __webpack_require__(76);
var _curry1 = __webpack_require__(17);
var slice = __webpack_require__(176);


/**
 * Returns all but the first element of the given list or string (or object
 * with a `tail` method).
 *
 * Dispatches to the `slice` method of the first argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.head, R.init, R.last
 * @example
 *
 *      R.tail([1, 2, 3]);  //=> [2, 3]
 *      R.tail([1, 2]);     //=> [2]
 *      R.tail([1]);        //=> []
 *      R.tail([]);         //=> []
 *
 *      R.tail('abc');  //=> 'bc'
 *      R.tail('ab');   //=> 'b'
 *      R.tail('a');    //=> ''
 *      R.tail('');     //=> ''
 */
module.exports = _curry1(_checkForMethod('tail', slice(1, Infinity)));


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

var _checkForMethod = __webpack_require__(76);
var _curry3 = __webpack_require__(50);


/**
 * Returns the elements of the given list or string (or object with a `slice`
 * method) from `fromIndex` (inclusive) to `toIndex` (exclusive).
 *
 * Dispatches to the `slice` method of the third argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig Number -> Number -> [a] -> [a]
 * @sig Number -> Number -> String -> String
 * @param {Number} fromIndex The start index (inclusive).
 * @param {Number} toIndex The end index (exclusive).
 * @param {*} list
 * @return {*}
 * @example
 *
 *      R.slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']
 *      R.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']
 *      R.slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']
 *      R.slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']
 *      R.slice(0, 3, 'ramda');                     //=> 'ram'
 */
module.exports = _curry3(_checkForMethod('slice', function slice(fromIndex, toIndex, list) {
  return Array.prototype.slice.call(list, fromIndex, toIndex);
}));


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(17);
var _isString = __webpack_require__(75);


/**
 * Returns a new list or string with the elements or characters in reverse
 * order.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {Array|String} list
 * @return {Array|String}
 * @example
 *
 *      R.reverse([1, 2, 3]);  //=> [3, 2, 1]
 *      R.reverse([1, 2]);     //=> [2, 1]
 *      R.reverse([1]);        //=> [1]
 *      R.reverse([]);         //=> []
 *
 *      R.reverse('abc');      //=> 'cba'
 *      R.reverse('ab');       //=> 'ba'
 *      R.reverse('a');        //=> 'a'
 *      R.reverse('');         //=> ''
 */
module.exports = _curry1(function reverse(list) {
  return _isString(list) ? list.split('').reverse().join('') :
                           Array.prototype.slice.call(list, 0).reverse();
});


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(30);


/**
 * Returns a partial copy of an object containing only the keys that satisfy
 * the supplied predicate.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @sig (v, k -> Boolean) -> {k: v} -> {k: v}
 * @param {Function} pred A predicate to determine whether or not a key
 *        should be included on the output object.
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties that satisfy `pred`
 *         on it.
 * @see R.pick, R.filter
 * @example
 *
 *      var isUpperCase = (val, key) => key.toUpperCase() === key;
 *      R.pickBy(isUpperCase, {a: 1, b: 2, A: 3, B: 4}); //=> {A: 3, B: 4}
 */
module.exports = _curry2(function pickBy(test, obj) {
  var result = {};
  for (var prop in obj) {
    if (test(obj[prop], prop, obj)) {
      result[prop] = obj[prop];
    }
  }
  return result;
});


/***/ }),
/* 179 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"tooltip":"theme_tooltip-1v8bI","tooltipActive":"theme_tooltipActive-2xWjx","tooltipTop":"theme_tooltipTop-1PfOK","tooltipLeft":"theme_tooltipLeft-3uj3d","tooltipRight":"theme_tooltipRight-3UQWj","tooltipInner":"theme_tooltipInner-9q2WH"};

/***/ }),
/* 180 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TypeName_css__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TypeName_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__TypeName_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__introspection__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions___ = __webpack_require__(6);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var TypeName = /** @class */ (function (_super) {
    __extends(TypeName, _super);
    function TypeName() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TypeName.prototype.render = function () {
        var _this = this;
        var type = this.props.type;
        var className;
        if (Object(__WEBPACK_IMPORTED_MODULE_4__introspection__["d" /* isBuiltInScalarType */])(type))
            className = '-built-in';
        else if (Object(__WEBPACK_IMPORTED_MODULE_4__introspection__["f" /* isScalarType */])(type))
            className = '-scalar';
        else if (Object(__WEBPACK_IMPORTED_MODULE_4__introspection__["e" /* isInputObjectType */])(type))
            className = '-input-obj';
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: __WEBPACK_IMPORTED_MODULE_1_classnames__('type-name', className), onClick: function (event) {
                _this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actions___["x" /* changeSelectedTypeInfo */])(type));
                event.stopPropagation();
            } }, type.name));
    };
    return TypeName;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])()(TypeName));


/***/ }),
/* 182 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};



var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", _extends({ viewBox: "0 0 600 600" }, this.props), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("g", { fill: "#F26B00" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M142.536 198.858c0 26.36-21.368 47.72-47.72 47.72-26.36 0-47.722-21.36-47.722-47.72s21.36-47.72 47.72-47.72c26.355 0 47.722 21.36 47.722 47.72" }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M505.18 414.225H238.124c-35.25 0-63.926-28.674-63.926-63.923s28.678-63.926 63.926-63.926h120.78c20.816 0 37.753-16.938 37.753-37.756s-16.938-37.756-37.753-37.756H94.81c-7.227 0-13.086-5.86-13.086-13.085 0-7.227 5.86-13.086 13.085-13.086h264.093c35.25 0 63.923 28.678 63.923 63.926s-28.674 63.923-63.923 63.923h-120.78c-20.82 0-37.756 16.938-37.756 37.76 0 20.816 16.938 37.753 37.756 37.753H505.18c7.227 0 13.086 5.86 13.086 13.085 0 7.226-5.858 13.085-13.085 13.085z" }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M457.464 401.142c0-26.36 21.36-47.72 47.72-47.72s47.72 21.36 47.72 47.72-21.36 47.72-47.72 47.72-47.72-21.36-47.72-47.72" })));
    }
  }]);

  return SVG;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SVG);

/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Argument_css__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Argument_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Argument_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_Markdown__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__WrappedTypeName__ = __webpack_require__(49);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var Argument = /** @class */ (function (_super) {
    __extends(Argument, _super);
    function Argument() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Argument.prototype.render = function () {
        var _a = this.props, arg = _a.arg, expanded = _a.expanded;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: __WEBPACK_IMPORTED_MODULE_1_classnames__('arg-wrap', { '-expanded': expanded }) },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "arg" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "arg-name" }, arg.name),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__WrappedTypeName__["a" /* default */], { container: arg }),
                arg.defaultValue !== null &&
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null,
                        ' = ',
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "default-value" }, arg.defaultValue))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__utils_Markdown__["a" /* default */], { text: arg.description, className: "arg-description" })));
    };
    return Argument;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (Argument);


/***/ }),
/* 185 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TypeInfoPopover_css__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TypeInfoPopover_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__TypeInfoPopover_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__icons_close_black_svg__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_toolbox_lib_button__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_toolbox_lib_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_toolbox_lib_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__doc_explorer_TypeDetails__ = __webpack_require__(188);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();








function mapStateToProps(state) {
    return {
        type: state.selected.typeinfo
    };
}
var ScalarDetails = /** @class */ (function (_super) {
    __extends(ScalarDetails, _super);
    function ScalarDetails(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { localType: null };
        return _this;
    }
    ScalarDetails.prototype.close = function () {
        var _this = this;
        this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_6__actions__["x" /* changeSelectedTypeInfo */])(null));
        setTimeout(function () {
            _this.setState({ localType: null });
        }, 450);
    };
    ScalarDetails.prototype.render = function () {
        var _this = this;
        var type = this.props.type;
        //FIXME: implement animation correctly
        //https://facebook.github.io/react/docs/animation.html
        var localType = this.state.localType;
        if (type && (!localType || type.name !== localType.name)) {
            setTimeout(function () {
                _this.setState({ localType: type });
            });
        }
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_2_classnames__('type-info-popover', {
                '-opened': !!type
            }) },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_react_toolbox_lib_button__["IconButton"], { className: "closeButton", onClick: function () { return _this.close(); } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__icons_close_black_svg__["a" /* default */], null)),
            (type || localType) && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7__doc_explorer_TypeDetails__["a" /* default */], { type: type || localType })));
    };
    return ScalarDetails;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps)(ScalarDetails));


/***/ }),
/* 187 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_Markdown__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Description__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__WrappedTypeName__ = __webpack_require__(49);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var TypeDetails = /** @class */ (function (_super) {
    __extends(TypeDetails, _super);
    function TypeDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TypeDetails.prototype.renderFields = function (type) {
        if (__WEBPACK_IMPORTED_MODULE_0_lodash__["isEmpty"](type.inputFields))
            return null;
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: "doc-category" },
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: "title" }, 'fields'),
            __WEBPACK_IMPORTED_MODULE_0_lodash__["map"](type.inputFields, function (field) {
                return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { key: field.id, className: "item" },
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("a", { className: "field-name" }, field.name),
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__WrappedTypeName__["a" /* default */], { container: field }),
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__utils_Markdown__["a" /* default */], { text: field.description, className: "description-box -field" }));
            })));
    };
    TypeDetails.prototype.renderEnumValues = function (type) {
        if (__WEBPACK_IMPORTED_MODULE_0_lodash__["isEmpty"](type.enumValues))
            return null;
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: "doc-category" },
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: "title" }, 'values'),
            __WEBPACK_IMPORTED_MODULE_0_lodash__["map"](type.enumValues, function (value) {
                return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](EnumValue, { key: value.name, value: value });
            })));
    };
    TypeDetails.prototype.render = function () {
        var type = this.props.type;
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: "type-details" },
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("header", null,
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("h3", null, type.name),
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__Description__["a" /* default */], { className: "-doc-type", text: type.description })),
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: "doc-categories" },
                this.renderFields(type),
                this.renderEnumValues(type))));
    };
    return TypeDetails;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (TypeDetails);
var EnumValue = /** @class */ (function (_super) {
    __extends(EnumValue, _super);
    function EnumValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EnumValue.prototype.render = function () {
        var value = this.props.value;
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: "item" },
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: "enum-value" }, value.name),
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__utils_Markdown__["a" /* default */], { className: "description-box -enum-value", text: value.description }),
            value.deprecationReason &&
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__utils_Markdown__["a" /* default */], { className: "doc-deprecation", text: value.deprecationReason })));
    };
    return EnumValue;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));


/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_modal__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__SchemaModal_css__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__SchemaModal_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__SchemaModal_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__button_dark_theme_css__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__button_dark_theme_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__button_dark_theme_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__settings_dark_theme_css__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__settings_dark_theme_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__settings_dark_theme_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_toolbox_lib_button__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_toolbox_lib_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_toolbox_lib_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__icons_close_black_svg__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_clipboard_js__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_clipboard_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_clipboard_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_graphql_utilities__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_graphql_utilities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_graphql_utilities__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_graphql_request__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_graphql_request___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_graphql_request__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__actions___ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Settings__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__introspection__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__utils___ = __webpack_require__(46);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

















function mapStateToProps(state) {
    return {
        showSchemaModal: state.schemaModal.opened,
        notApplied: state.schemaModal.notApplied,
        schema: Object(__WEBPACK_IMPORTED_MODULE_15__introspection__["b" /* getNaSchemaSelector */])(state),
    };
}
var SchemaModal = /** @class */ (function (_super) {
    __extends(SchemaModal, _super);
    function SchemaModal(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { recentlyCopied: false };
        return _this;
    }
    SchemaModal.prototype.componentDidMount = function () {
        var _this = this;
        this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_13__actions___["H" /* showSchemaModal */])());
        var url = Object(__WEBPACK_IMPORTED_MODULE_16__utils___["b" /* getQueryParams */])()['url'];
        if (url) {
            this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_13__actions___["C" /* hideSchemaModal */])());
            Object(__WEBPACK_IMPORTED_MODULE_12_graphql_request__["request"])(url, __WEBPACK_IMPORTED_MODULE_11_graphql_utilities__["introspectionQuery"])
                .then(function (introspection) { return _this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_13__actions___["w" /* changeSchema */])({ data: introspection })); })
                .catch(function (err) {
                _this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_13__actions___["D" /* reportError */])(err.response.data || "Error loading: " + err.response.status));
            });
        }
        else if (false) {
            this.props.dispatch(hideSchemaModal());
            this.props.dispatch(changeActivePreset(DEBUG_INITIAL_PRESET));
            this.props.dispatch(changeSchema(this.props.presets[DEBUG_INITIAL_PRESET]));
        }
    };
    SchemaModal.prototype.handleTextChange = function (event) {
        var text = event.target.value;
        if (text === '')
            text = null;
        this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_13__actions___["u" /* changeNaActivePreset */])('custom', text));
    };
    SchemaModal.prototype.handlePresetChange = function (name) {
        this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_13__actions___["u" /* changeNaActivePreset */])(name, this.props.presets[name]));
    };
    SchemaModal.prototype.handleDisplayOptionsChange = function (options) {
        this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_13__actions___["v" /* changeNaDisplayOptions */])(options));
    };
    SchemaModal.prototype.handleChange = function () {
        var _a = this.props.notApplied, activePreset = _a.activePreset, displayOptions = _a.displayOptions, presetValue = _a.presetValue;
        var schema = activePreset === 'custom' ? JSON.parse(presetValue) : presetValue;
        this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_13__actions___["s" /* changeActivePreset */])(activePreset));
        this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_13__actions___["w" /* changeSchema */])(schema, displayOptions));
        this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_13__actions___["C" /* hideSchemaModal */])());
    };
    SchemaModal.prototype.close = function () {
        this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_13__actions___["C" /* hideSchemaModal */])());
    };
    SchemaModal.prototype.copy = function () {
        var _this = this;
        this.setState(__assign({}, this.state, { recentlyCopied: true }));
        setTimeout(function () {
            _this.setState(__assign({}, _this.state, { recentlyCopied: false }));
        }, 2000);
    };
    SchemaModal.prototype.appBar = function () {
        var _this = this;
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8_react_toolbox_lib_button__["IconButton"], { className: "close-icon", onClick: function () { return _this.close(); } },
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9__icons_close_black_svg__["a" /* default */], { color: "#ffffff" })));
    };
    SchemaModal.prototype.predefinedCards = function (presetNames, activePreset) {
        var _this = this;
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: "schema-presets" }, __WEBPACK_IMPORTED_MODULE_0_lodash__(presetNames).without('custom').map(function (name) {
            return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { key: name, className: __WEBPACK_IMPORTED_MODULE_4_classnames__('introspection-card', {
                    '-active': name === activePreset
                }), onClick: function () {
                    if (name !== activePreset)
                        _this.handlePresetChange(name);
                } },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("h2", null,
                    " ",
                    name,
                    " "));
        }).value()));
    };
    SchemaModal.prototype.customCard = function (isActive, customPresetText) {
        var _this = this;
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: "custom-schema-selector" },
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_4_classnames__('introspection-card', {
                    '-active': isActive
                }), onClick: function () { return isActive || _this.handlePresetChange('custom'); } },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: "card-header" },
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("h2", null, " Custom Schema ")),
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: "card-content" },
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("p", null, " Run the introspection query against a GraphQL endpoint. Paste the result into the textarea below to view the model relationships."),
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_10_react_clipboard_js__, { component: "a", "data-clipboard-text": __WEBPACK_IMPORTED_MODULE_11_graphql_utilities__["introspectionQuery"], className: __WEBPACK_IMPORTED_MODULE_4_classnames__({
                            'hint--top': this.state.recentlyCopied
                        }), "data-hint": 'Copied to clipboard', onClick: function () { return _this.copy(); } }, "Copy Introspection Query"),
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("textarea", { value: customPresetText || '', disabled: !isActive, onChange: this.handleTextChange.bind(this), placeholder: "Paste Introspection Here" })))));
    };
    SchemaModal.prototype.modalContent = function (presetNames, notApplied, schema) {
        var _this = this;
        if (notApplied === null)
            return null;
        var activePreset = notApplied.activePreset, displayOptions = notApplied.displayOptions, presetValue = notApplied.presetValue;
        var validSelected = !!(schema.schema);
        var errorMessage = schema.error;
        var infoMessage = null;
        var infoClass = null;
        if (errorMessage != null) {
            infoMessage = errorMessage;
            infoClass = '-error';
        }
        else if (activePreset == null) {
            infoMessage = 'Please select introspection';
            infoClass = '-select';
        }
        else if (activePreset === 'custom') {
            infoMessage = 'Please paste your introspection';
            infoClass = '-select';
        }
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: "schema-modal" },
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: "logo" },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("img", { src: "logo.png" })),
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: "modal-cards" },
                this.predefinedCards(presetNames, activePreset),
                this.customCard(activePreset === 'custom', presetValue)),
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_4_classnames__('modal-info-panel', {
                    '-message': !validSelected,
                    '-settings': validSelected
                }) },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_4_classnames__('modal-message', 'content', infoClass) }, infoMessage),
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_14__Settings__["a" /* Settings */], { theme: __WEBPACK_IMPORTED_MODULE_7__settings_dark_theme_css__, schema: schema.schema, options: displayOptions, onChange: function (options) { return _this.handleDisplayOptionsChange(options); } })),
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8_react_toolbox_lib_button__["Button"], { raised: true, label: "Change Schema", theme: __WEBPACK_IMPORTED_MODULE_6__button_dark_theme_css__, disabled: !validSelected, onClick: this.handleChange.bind(this) })));
    };
    SchemaModal.prototype.render = function () {
        var _this = this;
        var _a = this.props, showSchemaModal = _a.showSchemaModal, notApplied = _a.notApplied, schema = _a.schema, presets = _a.presets;
        if (!presets)
            throw new Error('To use schema modal pass "_schemaPresets" property to "<Voyager>"');
        var customStyle = {
            content: { maxHeight: '600px', maxWidth: '1000px' },
            overlay: { zIndex: 10, backgroundColor: 'rgba(0, 0, 0, 0.74902)' }
        };
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_modal___default.a, { isOpen: showSchemaModal, className: "modal-root", style: customStyle, contentLabel: "Select Introspection", onRequestClose: function () { return _this.close(); } },
            this.appBar(),
            this.modalContent(Object.keys(presets), notApplied, schema)));
    };
    return SchemaModal;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps)(SchemaModal));


/***/ }),
/* 190 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_190__;

/***/ }),
/* 191 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 192 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"button":"button-dark-theme_button-gi7mA","raised":"button-dark-theme_raised-fPRBY"};

/***/ }),
/* 193 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"dropdown":"settings-dark-theme_dropdown-pXB2v","templateValue":"settings-dark-theme_templateValue-3PFLP","values":"settings-dark-theme_values-15-zR","field":"settings-dark-theme_field-3i7UA","text":"settings-dark-theme_text-2JhlV","check":"settings-dark-theme_check-13rsP"};

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(0), __webpack_require__(3), __webpack_require__(195));
	else if(typeof define === 'function' && define.amd)
		define(["react", "prop-types", "clipboard"], factory);
	else if(typeof exports === 'object')
		exports["ReactClipboard"] = factory(require("react"), require("prop-types"), require("clipboard"));
	else
		root["ReactClipboard"] = factory(root["React"], root["PropTypes"], root["Clipboard"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_40__, __WEBPACK_EXTERNAL_MODULE_41__, __WEBPACK_EXTERNAL_MODULE_42__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(1)['default'];

	var _inherits = __webpack_require__(17)['default'];

	var _createClass = __webpack_require__(26)['default'];

	var _classCallCheck = __webpack_require__(29)['default'];

	var _extends = __webpack_require__(30)['default'];

	var _Object$keys = __webpack_require__(36)['default'];

	var _interopRequireDefault = __webpack_require__(39)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _react = __webpack_require__(40);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(41);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var ClipboardButton = (function (_React$Component) {
	  _inherits(ClipboardButton, _React$Component);

	  function ClipboardButton() {
	    _classCallCheck(this, ClipboardButton);

	    _get(Object.getPrototypeOf(ClipboardButton.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(ClipboardButton, [{
	    key: 'propsWith',

	    /* Returns a object with all props that fulfill a certain naming pattern
	     *
	     * @param {RegExp} regexp - Regular expression representing which pattern
	     *                          you'll be searching for.
	     * @param {Boolean} remove - Determines if the regular expression should be
	     *                           removed when transmitting the key from the props
	     *                           to the new object.
	     *
	     * e.g:
	     *
	     * // Considering:
	     * // this.props = {option-foo: 1, onBar: 2, data-foobar: 3 data-baz: 4};
	     *
	     * // *RegExps not using // so that this comment doesn't break up
	     * this.propsWith(option-*, true); // returns {foo: 1}
	     * this.propsWith(on*, true); // returns {Bar: 2}
	     * this.propsWith(data-*); // returns {data-foobar: 1, data-baz: 4}
	     */
	    value: function propsWith(regexp) {
	      var remove = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

	      var object = {};

	      _Object$keys(this.props).forEach(function (key) {
	        if (key.search(regexp) !== -1) {
	          var objectKey = remove ? key.replace(regexp, '') : key;
	          object[objectKey] = this.props[key];
	        }
	      }, this);

	      return object;
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.clipboard && this.clipboard.destroy();
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      // Support old API by trying to assign this.props.options first;
	      var options = this.props.options || this.propsWith(/^option-/, true);
	      var element = _react2['default'].version.match(/0\.13(.*)/) ? this.refs.element.getDOMNode() : this.refs.element;
	      var Clipboard = __webpack_require__(42);
	      this.clipboard = new Clipboard(element, options);

	      var callbacks = this.propsWith(/^on/, true);
	      _Object$keys(callbacks).forEach(function (callback) {
	        this.clipboard.on(callback.toLowerCase(), this.props['on' + callback]);
	      }, this);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var attributes = _extends({
	        type: this.getType(),
	        className: this.props.className || '',
	        style: this.props.style || {},
	        ref: 'element',
	        onClick: this.props.onClick
	      }, this.propsWith(/^data-/), this.propsWith(/^button-/, true));

	      return _react2['default'].createElement(this.getComponent(), attributes, this.props.children);
	    }
	  }, {
	    key: 'getType',
	    value: function getType() {
	      if (this.getComponent() === 'button' || this.getComponent() === 'input') {
	        return this.props.type || 'button';
	      } else {
	        return undefined;
	      }
	    }
	  }, {
	    key: 'getComponent',
	    value: function getComponent() {
	      return this.props.component || 'button';
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      options: _propTypes2['default'].object,
	      type: _propTypes2['default'].string,
	      className: _propTypes2['default'].string,
	      style: _propTypes2['default'].object,
	      component: _propTypes2['default'].string,
	      children: _propTypes2['default'].oneOfType([_propTypes2['default'].element, _propTypes2['default'].string, _propTypes2['default'].number, _propTypes2['default'].object])
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      onClick: function onClick() {}
	    },
	    enumerable: true
	  }]);

	  return ClipboardButton;
	})(_react2['default'].Component);

	exports['default'] = ClipboardButton;
	module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$getOwnPropertyDescriptor = __webpack_require__(2)["default"];

	exports["default"] = function get(_x, _x2, _x3) {
	  var _again = true;

	  _function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;
	    _again = false;
	    if (object === null) object = Function.prototype;

	    var desc = _Object$getOwnPropertyDescriptor(object, property);

	    if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);

	      if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;
	        _x2 = property;
	        _x3 = receiver;
	        _again = true;
	        desc = parent = undefined;
	        continue _function;
	      }
	    } else if ("value" in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;

	      if (getter === undefined) {
	        return undefined;
	      }

	      return getter.call(receiver);
	    }
	  }
	};

	exports.__esModule = true;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(3), __esModule: true };

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(4);
	__webpack_require__(5);
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $.getDesc(it, key);
	};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(6);

	__webpack_require__(10)('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(7)
	  , defined = __webpack_require__(9);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(8);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(11)
	  , core    = __webpack_require__(13)
	  , fails   = __webpack_require__(16);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(12)
	  , core      = __webpack_require__(13)
	  , ctx       = __webpack_require__(14)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(15);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$create = __webpack_require__(18)["default"];

	var _Object$setPrototypeOf = __webpack_require__(20)["default"];

	exports["default"] = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }

	  subClass.prototype = _Object$create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};

	exports.__esModule = true;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(19), __esModule: true };

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(4);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(21), __esModule: true };

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(22);
	module.exports = __webpack_require__(13).Object.setPrototypeOf;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(11);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(23).set});

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(4).getDesc
	  , isObject = __webpack_require__(24)
	  , anObject = __webpack_require__(25);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(14)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(24);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$defineProperty = __webpack_require__(27)["default"];

	exports["default"] = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;

	      _Object$defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();

	exports.__esModule = true;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(28), __esModule: true };

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(4);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	"use strict";

	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	exports.__esModule = true;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$assign = __webpack_require__(31)["default"];

	exports["default"] = _Object$assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

	exports.__esModule = true;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(32), __esModule: true };

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(33);
	module.exports = __webpack_require__(13).Object.assign;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(11);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(34)});

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(4)
	  , toObject = __webpack_require__(35)
	  , IObject  = __webpack_require__(7);

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(16)(function(){
	  var a = Object.assign
	    , A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , $$    = arguments
	    , $$len = $$.length
	    , index = 1
	    , getKeys    = $.getKeys
	    , getSymbols = $.getSymbols
	    , isEnum     = $.isEnum;
	  while($$len > index){
	    var S      = IObject($$[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  }
	  return T;
	} : Object.assign;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(9);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(37), __esModule: true };

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(38);
	module.exports = __webpack_require__(13).Object.keys;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(35);

	__webpack_require__(10)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ }),
/* 39 */
/***/ (function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ }),
/* 40 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_40__;

/***/ }),
/* 41 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_41__;

/***/ }),
/* 42 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_42__;

/***/ })
/******/ ])
});
;

/***/ }),
/* 195 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_195__;

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __webpack_require__(78);
var types_2 = __webpack_require__(78);
exports.ClientError = types_2.ClientError;
__webpack_require__(197);
function request(url, query, variables) {
    return __awaiter(this, void 0, void 0, function () {
        var client;
        return __generator(this, function (_a) {
            client = new GraphQLClient(url);
            return [2 /*return*/, client.request(query, variables)];
        });
    });
}
exports.request = request;
exports.default = request;
var GraphQLClient = /** @class */ (function () {
    function GraphQLClient(url, options) {
        this.url = url;
        this.options = options || {};
    }
    GraphQLClient.prototype.request = function (query, variables) {
        return __awaiter(this, void 0, void 0, function () {
            var body, response, result, errorResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body = JSON.stringify({
                            query: query,
                            variables: variables ? variables : undefined,
                        });
                        return [4 /*yield*/, fetch(this.url, __assign({ method: 'POST' }, this.options, { headers: Object.assign({ 'Content-Type': 'application/json' }, this.options.headers), body: body }))];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, getResult(response)];
                    case 2:
                        result = _a.sent();
                        if (response.ok && !result.errors && result.data) {
                            return [2 /*return*/, result.data];
                        }
                        else {
                            errorResult = typeof result === 'string' ? { error: result } : result;
                            throw new types_1.ClientError(__assign({}, errorResult, { status: response.status }), { query: query, variables: variables });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return GraphQLClient;
}());
exports.GraphQLClient = GraphQLClient;
function getResult(response) {
    return __awaiter(this, void 0, void 0, function () {
        var contentType;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    contentType = response.headers.get('Content-Type');
                    if (!(contentType && contentType.startsWith('application/json'))) return [3 /*break*/, 2];
                    return [4 /*yield*/, response.json()];
                case 1: return [2 /*return*/, _a.sent()];
                case 2: return [4 /*yield*/, response.text()];
                case 3: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
//# sourceMappingURL=index.js.map

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
__webpack_require__(198);
module.exports = self.fetch.bind(self);


/***/ }),
/* 198 */
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    rawHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = 'status' in options ? options.status : 200
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_toolbox_lib_checkbox__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_toolbox_lib_checkbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_toolbox_lib_checkbox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__RootSelector__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__introspection__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions___ = __webpack_require__(6);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};






function mapStateToProps(state) {
    var schema = Object(__WEBPACK_IMPORTED_MODULE_4__introspection__["c" /* getSchemaSelector */])(state);
    return {
        options: state.displayOptions,
        schema: schema,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onChange: function (options) {
            dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actions___["t" /* changeDisplayOptions */])(options));
        }
    };
}
var Settings = /** @class */ (function (_super) {
    __extends(Settings, _super);
    function Settings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Settings.prototype.render = function () {
        var _a = this.props, schema = _a.schema, options = _a.options, theme = _a.theme, onChange = _a.onChange;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "menu-content" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "setting-change-root" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", null, " Root Node "),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__RootSelector__["a" /* default */], { theme: theme, schema: schema, rootTypeId: options.rootTypeId, onChange: function (rootTypeId) { return onChange(__assign({}, options, { rootTypeId: rootTypeId })); } })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "setting-other-options" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", null, " Options "),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_toolbox_lib_checkbox___default.a, { label: "Sort by Alphabet", theme: theme, checked: !!options.sortByAlphabet, onChange: function (sortByAlphabet) { return onChange(__assign({}, options, { sortByAlphabet: sortByAlphabet })); } }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_toolbox_lib_checkbox___default.a, { label: "Skip Relay", theme: theme, checked: !!options.skipRelay, onChange: function (skipRelay) { return onChange(__assign({}, options, { skipRelay: skipRelay })); } }))));
    };
    return Settings;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(Settings));


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkbox = undefined;

var _reactCssThemr = __webpack_require__(7);

var _identifiers = __webpack_require__(8);

var _ripple = __webpack_require__(67);

var _ripple2 = _interopRequireDefault(_ripple);

var _Checkbox = __webpack_require__(201);

var _Check = __webpack_require__(80);

var _Check2 = _interopRequireDefault(_Check);

var _theme = __webpack_require__(203);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThemedCheck = (0, _Check2.default)((0, _ripple2.default)({ centered: true, spread: 2.6 }));
var ThemedCheckbox = (0, _reactCssThemr.themr)(_identifiers.CHECKBOX, _theme2.default)((0, _Checkbox.checkboxFactory)(ThemedCheck));

exports.default = ThemedCheckbox;
exports.Checkbox = ThemedCheckbox;

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkbox = exports.checkboxFactory = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__(1);

var _classnames3 = _interopRequireDefault(_classnames2);

var _reactStyleProptype = __webpack_require__(79);

var _reactStyleProptype2 = _interopRequireDefault(_reactStyleProptype);

var _reactCssThemr = __webpack_require__(7);

var _identifiers = __webpack_require__(8);

var _Ripple = __webpack_require__(26);

var _Ripple2 = _interopRequireDefault(_Ripple);

var _Check = __webpack_require__(80);

var _Check2 = _interopRequireDefault(_Check);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Check) {
  var Checkbox = function (_Component) {
    _inherits(Checkbox, _Component);

    function Checkbox() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Checkbox);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call.apply(_ref, [this].concat(args))), _this), _this.handleToggle = function (event) {
        if (event.pageX !== 0 && event.pageY !== 0) _this.blur();
        if (!_this.props.disabled && _this.props.onChange) {
          _this.props.onChange(!_this.props.checked, event);
        }
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Checkbox, [{
      key: 'blur',
      value: function blur() {
        if (this.inputNode) {
          this.inputNode.blur();
        }
      }
    }, {
      key: 'focus',
      value: function focus() {
        if (this.inputNode) {
          this.inputNode.focus();
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            checked = _props.checked,
            children = _props.children,
            disabled = _props.disabled,
            label = _props.label,
            name = _props.name,
            style = _props.style,
            onChange = _props.onChange,
            onMouseEnter = _props.onMouseEnter,
            onMouseLeave = _props.onMouseLeave,
            theme = _props.theme,
            others = _objectWithoutProperties(_props, ['checked', 'children', 'disabled', 'label', 'name', 'style', 'onChange', 'onMouseEnter', 'onMouseLeave', 'theme']);

        var className = (0, _classnames3.default)(theme.field, _defineProperty({}, theme.disabled, this.props.disabled), this.props.className);

        return _react2.default.createElement(
          'label',
          {
            'data-react-toolbox': 'checkbox',
            className: className,
            onMouseEnter: onMouseEnter,
            onMouseLeave: onMouseLeave
          },
          _react2.default.createElement('input', _extends({}, others, {
            checked: checked,
            className: theme.input,
            disabled: disabled,
            name: name,
            onChange: function onChange() {},
            onClick: this.handleToggle,
            ref: function ref(node) {
              _this2.inputNode = node;
            },
            type: 'checkbox'
          })),
          _react2.default.createElement(Check, {
            checked: checked,
            disabled: disabled,
            rippleClassName: theme.ripple,
            style: style,
            theme: theme
          }),
          label ? _react2.default.createElement(
            'span',
            { 'data-react-toolbox': 'label', className: theme.text },
            label
          ) : null,
          children
        );
      }
    }]);

    return Checkbox;
  }(_react.Component);

  Checkbox.propTypes = {
    checked: _propTypes2.default.bool,
    children: _propTypes2.default.node,
    className: _propTypes2.default.string,
    disabled: _propTypes2.default.bool,
    label: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
    name: _propTypes2.default.string,
    onChange: _propTypes2.default.func,
    onMouseEnter: _propTypes2.default.func,
    onMouseLeave: _propTypes2.default.func,
    style: _reactStyleProptype2.default,
    theme: _propTypes2.default.shape({
      disabled: _propTypes2.default.string,
      field: _propTypes2.default.string,
      input: _propTypes2.default.string,
      ripple: _propTypes2.default.string
    })
  };
  Checkbox.defaultProps = {
    checked: false,
    className: '',
    disabled: false
  };


  return Checkbox;
};

var Check = (0, _Check2.default)((0, _Ripple2.default)({ centered: true, spread: 2.6 }));
var Checkbox = factory(Check);
exports.default = (0, _reactCssThemr.themr)(_identifiers.CHECKBOX)(Checkbox);
exports.checkboxFactory = factory;
exports.Checkbox = Checkbox;

/***/ }),
/* 202 */
/***/ (function(module, exports) {

// GENERATED DO NOT EDIT
module.exports = [
  "alignContent",
  "MozAlignContent",
  "WebkitAlignContent",
  "MSAlignContent",
  "OAlignContent",
  "alignItems",
  "MozAlignItems",
  "WebkitAlignItems",
  "MSAlignItems",
  "OAlignItems",
  "alignSelf",
  "MozAlignSelf",
  "WebkitAlignSelf",
  "MSAlignSelf",
  "OAlignSelf",
  "all",
  "MozAll",
  "WebkitAll",
  "MSAll",
  "OAll",
  "animation",
  "MozAnimation",
  "WebkitAnimation",
  "MSAnimation",
  "OAnimation",
  "animationDelay",
  "MozAnimationDelay",
  "WebkitAnimationDelay",
  "MSAnimationDelay",
  "OAnimationDelay",
  "animationDirection",
  "MozAnimationDirection",
  "WebkitAnimationDirection",
  "MSAnimationDirection",
  "OAnimationDirection",
  "animationDuration",
  "MozAnimationDuration",
  "WebkitAnimationDuration",
  "MSAnimationDuration",
  "OAnimationDuration",
  "animationFillMode",
  "MozAnimationFillMode",
  "WebkitAnimationFillMode",
  "MSAnimationFillMode",
  "OAnimationFillMode",
  "animationIterationCount",
  "MozAnimationIterationCount",
  "WebkitAnimationIterationCount",
  "MSAnimationIterationCount",
  "OAnimationIterationCount",
  "animationName",
  "MozAnimationName",
  "WebkitAnimationName",
  "MSAnimationName",
  "OAnimationName",
  "animationPlayState",
  "MozAnimationPlayState",
  "WebkitAnimationPlayState",
  "MSAnimationPlayState",
  "OAnimationPlayState",
  "animationTimingFunction",
  "MozAnimationTimingFunction",
  "WebkitAnimationTimingFunction",
  "MSAnimationTimingFunction",
  "OAnimationTimingFunction",
  "backfaceVisibility",
  "MozBackfaceVisibility",
  "WebkitBackfaceVisibility",
  "MSBackfaceVisibility",
  "OBackfaceVisibility",
  "background",
  "MozBackground",
  "WebkitBackground",
  "MSBackground",
  "OBackground",
  "backgroundAttachment",
  "MozBackgroundAttachment",
  "WebkitBackgroundAttachment",
  "MSBackgroundAttachment",
  "OBackgroundAttachment",
  "backgroundBlendMode",
  "MozBackgroundBlendMode",
  "WebkitBackgroundBlendMode",
  "MSBackgroundBlendMode",
  "OBackgroundBlendMode",
  "backgroundClip",
  "MozBackgroundClip",
  "WebkitBackgroundClip",
  "MSBackgroundClip",
  "OBackgroundClip",
  "backgroundColor",
  "MozBackgroundColor",
  "WebkitBackgroundColor",
  "MSBackgroundColor",
  "OBackgroundColor",
  "backgroundImage",
  "MozBackgroundImage",
  "WebkitBackgroundImage",
  "MSBackgroundImage",
  "OBackgroundImage",
  "backgroundOrigin",
  "MozBackgroundOrigin",
  "WebkitBackgroundOrigin",
  "MSBackgroundOrigin",
  "OBackgroundOrigin",
  "backgroundPosition",
  "MozBackgroundPosition",
  "WebkitBackgroundPosition",
  "MSBackgroundPosition",
  "OBackgroundPosition",
  "backgroundRepeat",
  "MozBackgroundRepeat",
  "WebkitBackgroundRepeat",
  "MSBackgroundRepeat",
  "OBackgroundRepeat",
  "backgroundSize",
  "MozBackgroundSize",
  "WebkitBackgroundSize",
  "MSBackgroundSize",
  "OBackgroundSize",
  "blockSize",
  "MozBlockSize",
  "WebkitBlockSize",
  "MSBlockSize",
  "OBlockSize",
  "border",
  "MozBorder",
  "WebkitBorder",
  "MSBorder",
  "OBorder",
  "borderBlockEnd",
  "MozBorderBlockEnd",
  "WebkitBorderBlockEnd",
  "MSBorderBlockEnd",
  "OBorderBlockEnd",
  "borderBlockEndColor",
  "MozBorderBlockEndColor",
  "WebkitBorderBlockEndColor",
  "MSBorderBlockEndColor",
  "OBorderBlockEndColor",
  "borderBlockEndStyle",
  "MozBorderBlockEndStyle",
  "WebkitBorderBlockEndStyle",
  "MSBorderBlockEndStyle",
  "OBorderBlockEndStyle",
  "borderBlockEndWidth",
  "MozBorderBlockEndWidth",
  "WebkitBorderBlockEndWidth",
  "MSBorderBlockEndWidth",
  "OBorderBlockEndWidth",
  "borderBlockStart",
  "MozBorderBlockStart",
  "WebkitBorderBlockStart",
  "MSBorderBlockStart",
  "OBorderBlockStart",
  "borderBlockStartColor",
  "MozBorderBlockStartColor",
  "WebkitBorderBlockStartColor",
  "MSBorderBlockStartColor",
  "OBorderBlockStartColor",
  "borderBlockStartStyle",
  "MozBorderBlockStartStyle",
  "WebkitBorderBlockStartStyle",
  "MSBorderBlockStartStyle",
  "OBorderBlockStartStyle",
  "borderBlockStartWidth",
  "MozBorderBlockStartWidth",
  "WebkitBorderBlockStartWidth",
  "MSBorderBlockStartWidth",
  "OBorderBlockStartWidth",
  "borderBottom",
  "MozBorderBottom",
  "WebkitBorderBottom",
  "MSBorderBottom",
  "OBorderBottom",
  "borderBottomColor",
  "MozBorderBottomColor",
  "WebkitBorderBottomColor",
  "MSBorderBottomColor",
  "OBorderBottomColor",
  "borderBottomLeftRadius",
  "MozBorderBottomLeftRadius",
  "WebkitBorderBottomLeftRadius",
  "MSBorderBottomLeftRadius",
  "OBorderBottomLeftRadius",
  "borderBottomRightRadius",
  "MozBorderBottomRightRadius",
  "WebkitBorderBottomRightRadius",
  "MSBorderBottomRightRadius",
  "OBorderBottomRightRadius",
  "borderBottomStyle",
  "MozBorderBottomStyle",
  "WebkitBorderBottomStyle",
  "MSBorderBottomStyle",
  "OBorderBottomStyle",
  "borderBottomWidth",
  "MozBorderBottomWidth",
  "WebkitBorderBottomWidth",
  "MSBorderBottomWidth",
  "OBorderBottomWidth",
  "borderCollapse",
  "MozBorderCollapse",
  "WebkitBorderCollapse",
  "MSBorderCollapse",
  "OBorderCollapse",
  "borderColor",
  "MozBorderColor",
  "WebkitBorderColor",
  "MSBorderColor",
  "OBorderColor",
  "borderImage",
  "MozBorderImage",
  "WebkitBorderImage",
  "MSBorderImage",
  "OBorderImage",
  "borderImageOutset",
  "MozBorderImageOutset",
  "WebkitBorderImageOutset",
  "MSBorderImageOutset",
  "OBorderImageOutset",
  "borderImageRepeat",
  "MozBorderImageRepeat",
  "WebkitBorderImageRepeat",
  "MSBorderImageRepeat",
  "OBorderImageRepeat",
  "borderImageSlice",
  "MozBorderImageSlice",
  "WebkitBorderImageSlice",
  "MSBorderImageSlice",
  "OBorderImageSlice",
  "borderImageSource",
  "MozBorderImageSource",
  "WebkitBorderImageSource",
  "MSBorderImageSource",
  "OBorderImageSource",
  "borderImageWidth",
  "MozBorderImageWidth",
  "WebkitBorderImageWidth",
  "MSBorderImageWidth",
  "OBorderImageWidth",
  "borderInlineEnd",
  "MozBorderInlineEnd",
  "WebkitBorderInlineEnd",
  "MSBorderInlineEnd",
  "OBorderInlineEnd",
  "borderInlineEndColor",
  "MozBorderInlineEndColor",
  "WebkitBorderInlineEndColor",
  "MSBorderInlineEndColor",
  "OBorderInlineEndColor",
  "borderInlineEndStyle",
  "MozBorderInlineEndStyle",
  "WebkitBorderInlineEndStyle",
  "MSBorderInlineEndStyle",
  "OBorderInlineEndStyle",
  "borderInlineEndWidth",
  "MozBorderInlineEndWidth",
  "WebkitBorderInlineEndWidth",
  "MSBorderInlineEndWidth",
  "OBorderInlineEndWidth",
  "borderInlineStart",
  "MozBorderInlineStart",
  "WebkitBorderInlineStart",
  "MSBorderInlineStart",
  "OBorderInlineStart",
  "borderInlineStartColor",
  "MozBorderInlineStartColor",
  "WebkitBorderInlineStartColor",
  "MSBorderInlineStartColor",
  "OBorderInlineStartColor",
  "borderInlineStartStyle",
  "MozBorderInlineStartStyle",
  "WebkitBorderInlineStartStyle",
  "MSBorderInlineStartStyle",
  "OBorderInlineStartStyle",
  "borderInlineStartWidth",
  "MozBorderInlineStartWidth",
  "WebkitBorderInlineStartWidth",
  "MSBorderInlineStartWidth",
  "OBorderInlineStartWidth",
  "borderLeft",
  "MozBorderLeft",
  "WebkitBorderLeft",
  "MSBorderLeft",
  "OBorderLeft",
  "borderLeftColor",
  "MozBorderLeftColor",
  "WebkitBorderLeftColor",
  "MSBorderLeftColor",
  "OBorderLeftColor",
  "borderLeftStyle",
  "MozBorderLeftStyle",
  "WebkitBorderLeftStyle",
  "MSBorderLeftStyle",
  "OBorderLeftStyle",
  "borderLeftWidth",
  "MozBorderLeftWidth",
  "WebkitBorderLeftWidth",
  "MSBorderLeftWidth",
  "OBorderLeftWidth",
  "borderRadius",
  "MozBorderRadius",
  "WebkitBorderRadius",
  "MSBorderRadius",
  "OBorderRadius",
  "borderRight",
  "MozBorderRight",
  "WebkitBorderRight",
  "MSBorderRight",
  "OBorderRight",
  "borderRightColor",
  "MozBorderRightColor",
  "WebkitBorderRightColor",
  "MSBorderRightColor",
  "OBorderRightColor",
  "borderRightStyle",
  "MozBorderRightStyle",
  "WebkitBorderRightStyle",
  "MSBorderRightStyle",
  "OBorderRightStyle",
  "borderRightWidth",
  "MozBorderRightWidth",
  "WebkitBorderRightWidth",
  "MSBorderRightWidth",
  "OBorderRightWidth",
  "borderSpacing",
  "MozBorderSpacing",
  "WebkitBorderSpacing",
  "MSBorderSpacing",
  "OBorderSpacing",
  "borderStyle",
  "MozBorderStyle",
  "WebkitBorderStyle",
  "MSBorderStyle",
  "OBorderStyle",
  "borderTop",
  "MozBorderTop",
  "WebkitBorderTop",
  "MSBorderTop",
  "OBorderTop",
  "borderTopColor",
  "MozBorderTopColor",
  "WebkitBorderTopColor",
  "MSBorderTopColor",
  "OBorderTopColor",
  "borderTopLeftRadius",
  "MozBorderTopLeftRadius",
  "WebkitBorderTopLeftRadius",
  "MSBorderTopLeftRadius",
  "OBorderTopLeftRadius",
  "borderTopRightRadius",
  "MozBorderTopRightRadius",
  "WebkitBorderTopRightRadius",
  "MSBorderTopRightRadius",
  "OBorderTopRightRadius",
  "borderTopStyle",
  "MozBorderTopStyle",
  "WebkitBorderTopStyle",
  "MSBorderTopStyle",
  "OBorderTopStyle",
  "borderTopWidth",
  "MozBorderTopWidth",
  "WebkitBorderTopWidth",
  "MSBorderTopWidth",
  "OBorderTopWidth",
  "borderWidth",
  "MozBorderWidth",
  "WebkitBorderWidth",
  "MSBorderWidth",
  "OBorderWidth",
  "bottom",
  "MozBottom",
  "WebkitBottom",
  "MSBottom",
  "OBottom",
  "boxDecorationBreak",
  "MozBoxDecorationBreak",
  "WebkitBoxDecorationBreak",
  "MSBoxDecorationBreak",
  "OBoxDecorationBreak",
  "boxShadow",
  "MozBoxShadow",
  "WebkitBoxShadow",
  "MSBoxShadow",
  "OBoxShadow",
  "boxSizing",
  "MozBoxSizing",
  "WebkitBoxSizing",
  "MSBoxSizing",
  "OBoxSizing",
  "breakAfter",
  "MozBreakAfter",
  "WebkitBreakAfter",
  "MSBreakAfter",
  "OBreakAfter",
  "breakBefore",
  "MozBreakBefore",
  "WebkitBreakBefore",
  "MSBreakBefore",
  "OBreakBefore",
  "breakInside",
  "MozBreakInside",
  "WebkitBreakInside",
  "MSBreakInside",
  "OBreakInside",
  "captionSide",
  "MozCaptionSide",
  "WebkitCaptionSide",
  "MSCaptionSide",
  "OCaptionSide",
  "caretColor",
  "MozCaretColor",
  "WebkitCaretColor",
  "MSCaretColor",
  "OCaretColor",
  "ch",
  "MozCh",
  "WebkitCh",
  "MSCh",
  "OCh",
  "clear",
  "MozClear",
  "WebkitClear",
  "MSClear",
  "OClear",
  "clip",
  "MozClip",
  "WebkitClip",
  "MSClip",
  "OClip",
  "clipPath",
  "MozClipPath",
  "WebkitClipPath",
  "MSClipPath",
  "OClipPath",
  "cm",
  "MozCm",
  "WebkitCm",
  "MSCm",
  "OCm",
  "color",
  "MozColor",
  "WebkitColor",
  "MSColor",
  "OColor",
  "columnCount",
  "MozColumnCount",
  "WebkitColumnCount",
  "MSColumnCount",
  "OColumnCount",
  "columnFill",
  "MozColumnFill",
  "WebkitColumnFill",
  "MSColumnFill",
  "OColumnFill",
  "columnGap",
  "MozColumnGap",
  "WebkitColumnGap",
  "MSColumnGap",
  "OColumnGap",
  "columnRule",
  "MozColumnRule",
  "WebkitColumnRule",
  "MSColumnRule",
  "OColumnRule",
  "columnRuleColor",
  "MozColumnRuleColor",
  "WebkitColumnRuleColor",
  "MSColumnRuleColor",
  "OColumnRuleColor",
  "columnRuleStyle",
  "MozColumnRuleStyle",
  "WebkitColumnRuleStyle",
  "MSColumnRuleStyle",
  "OColumnRuleStyle",
  "columnRuleWidth",
  "MozColumnRuleWidth",
  "WebkitColumnRuleWidth",
  "MSColumnRuleWidth",
  "OColumnRuleWidth",
  "columnSpan",
  "MozColumnSpan",
  "WebkitColumnSpan",
  "MSColumnSpan",
  "OColumnSpan",
  "columnWidth",
  "MozColumnWidth",
  "WebkitColumnWidth",
  "MSColumnWidth",
  "OColumnWidth",
  "columns",
  "MozColumns",
  "WebkitColumns",
  "MSColumns",
  "OColumns",
  "content",
  "MozContent",
  "WebkitContent",
  "MSContent",
  "OContent",
  "counterIncrement",
  "MozCounterIncrement",
  "WebkitCounterIncrement",
  "MSCounterIncrement",
  "OCounterIncrement",
  "counterReset",
  "MozCounterReset",
  "WebkitCounterReset",
  "MSCounterReset",
  "OCounterReset",
  "cursor",
  "MozCursor",
  "WebkitCursor",
  "MSCursor",
  "OCursor",
  "deg",
  "MozDeg",
  "WebkitDeg",
  "MSDeg",
  "ODeg",
  "direction",
  "MozDirection",
  "WebkitDirection",
  "MSDirection",
  "ODirection",
  "display",
  "MozDisplay",
  "WebkitDisplay",
  "MSDisplay",
  "ODisplay",
  "dpcm",
  "MozDpcm",
  "WebkitDpcm",
  "MSDpcm",
  "ODpcm",
  "dpi",
  "MozDpi",
  "WebkitDpi",
  "MSDpi",
  "ODpi",
  "dppx",
  "MozDppx",
  "WebkitDppx",
  "MSDppx",
  "ODppx",
  "em",
  "MozEm",
  "WebkitEm",
  "MSEm",
  "OEm",
  "emptyCells",
  "MozEmptyCells",
  "WebkitEmptyCells",
  "MSEmptyCells",
  "OEmptyCells",
  "ex",
  "MozEx",
  "WebkitEx",
  "MSEx",
  "OEx",
  "filter",
  "MozFilter",
  "WebkitFilter",
  "MSFilter",
  "OFilter",
  "flexBasis",
  "MozFlexBasis",
  "WebkitFlexBasis",
  "MSFlexBasis",
  "OFlexBasis",
  "flexDirection",
  "MozFlexDirection",
  "WebkitFlexDirection",
  "MSFlexDirection",
  "OFlexDirection",
  "flexFlow",
  "MozFlexFlow",
  "WebkitFlexFlow",
  "MSFlexFlow",
  "OFlexFlow",
  "flexGrow",
  "MozFlexGrow",
  "WebkitFlexGrow",
  "MSFlexGrow",
  "OFlexGrow",
  "flexShrink",
  "MozFlexShrink",
  "WebkitFlexShrink",
  "MSFlexShrink",
  "OFlexShrink",
  "flexWrap",
  "MozFlexWrap",
  "WebkitFlexWrap",
  "MSFlexWrap",
  "OFlexWrap",
  "float",
  "MozFloat",
  "WebkitFloat",
  "MSFloat",
  "OFloat",
  "font",
  "MozFont",
  "WebkitFont",
  "MSFont",
  "OFont",
  "fontFamily",
  "MozFontFamily",
  "WebkitFontFamily",
  "MSFontFamily",
  "OFontFamily",
  "fontFeatureSettings",
  "MozFontFeatureSettings",
  "WebkitFontFeatureSettings",
  "MSFontFeatureSettings",
  "OFontFeatureSettings",
  "fontKerning",
  "MozFontKerning",
  "WebkitFontKerning",
  "MSFontKerning",
  "OFontKerning",
  "fontLanguageOverride",
  "MozFontLanguageOverride",
  "WebkitFontLanguageOverride",
  "MSFontLanguageOverride",
  "OFontLanguageOverride",
  "fontSize",
  "MozFontSize",
  "WebkitFontSize",
  "MSFontSize",
  "OFontSize",
  "fontSizeAdjust",
  "MozFontSizeAdjust",
  "WebkitFontSizeAdjust",
  "MSFontSizeAdjust",
  "OFontSizeAdjust",
  "fontStretch",
  "MozFontStretch",
  "WebkitFontStretch",
  "MSFontStretch",
  "OFontStretch",
  "fontStyle",
  "MozFontStyle",
  "WebkitFontStyle",
  "MSFontStyle",
  "OFontStyle",
  "fontSynthesis",
  "MozFontSynthesis",
  "WebkitFontSynthesis",
  "MSFontSynthesis",
  "OFontSynthesis",
  "fontVariant",
  "MozFontVariant",
  "WebkitFontVariant",
  "MSFontVariant",
  "OFontVariant",
  "fontVariantAlternates",
  "MozFontVariantAlternates",
  "WebkitFontVariantAlternates",
  "MSFontVariantAlternates",
  "OFontVariantAlternates",
  "fontVariantCaps",
  "MozFontVariantCaps",
  "WebkitFontVariantCaps",
  "MSFontVariantCaps",
  "OFontVariantCaps",
  "fontVariantEastAsian",
  "MozFontVariantEastAsian",
  "WebkitFontVariantEastAsian",
  "MSFontVariantEastAsian",
  "OFontVariantEastAsian",
  "fontVariantLigatures",
  "MozFontVariantLigatures",
  "WebkitFontVariantLigatures",
  "MSFontVariantLigatures",
  "OFontVariantLigatures",
  "fontVariantNumeric",
  "MozFontVariantNumeric",
  "WebkitFontVariantNumeric",
  "MSFontVariantNumeric",
  "OFontVariantNumeric",
  "fontVariantPosition",
  "MozFontVariantPosition",
  "WebkitFontVariantPosition",
  "MSFontVariantPosition",
  "OFontVariantPosition",
  "fontWeight",
  "MozFontWeight",
  "WebkitFontWeight",
  "MSFontWeight",
  "OFontWeight",
  "fr",
  "MozFr",
  "WebkitFr",
  "MSFr",
  "OFr",
  "grad",
  "MozGrad",
  "WebkitGrad",
  "MSGrad",
  "OGrad",
  "grid",
  "MozGrid",
  "WebkitGrid",
  "MSGrid",
  "OGrid",
  "gridArea",
  "MozGridArea",
  "WebkitGridArea",
  "MSGridArea",
  "OGridArea",
  "gridAutoColumns",
  "MozGridAutoColumns",
  "WebkitGridAutoColumns",
  "MSGridAutoColumns",
  "OGridAutoColumns",
  "gridAutoFlow",
  "MozGridAutoFlow",
  "WebkitGridAutoFlow",
  "MSGridAutoFlow",
  "OGridAutoFlow",
  "gridAutoRows",
  "MozGridAutoRows",
  "WebkitGridAutoRows",
  "MSGridAutoRows",
  "OGridAutoRows",
  "gridColumn",
  "MozGridColumn",
  "WebkitGridColumn",
  "MSGridColumn",
  "OGridColumn",
  "gridColumnEnd",
  "MozGridColumnEnd",
  "WebkitGridColumnEnd",
  "MSGridColumnEnd",
  "OGridColumnEnd",
  "gridColumnGap",
  "MozGridColumnGap",
  "WebkitGridColumnGap",
  "MSGridColumnGap",
  "OGridColumnGap",
  "gridColumnStart",
  "MozGridColumnStart",
  "WebkitGridColumnStart",
  "MSGridColumnStart",
  "OGridColumnStart",
  "gridGap",
  "MozGridGap",
  "WebkitGridGap",
  "MSGridGap",
  "OGridGap",
  "gridRow",
  "MozGridRow",
  "WebkitGridRow",
  "MSGridRow",
  "OGridRow",
  "gridRowEnd",
  "MozGridRowEnd",
  "WebkitGridRowEnd",
  "MSGridRowEnd",
  "OGridRowEnd",
  "gridRowGap",
  "MozGridRowGap",
  "WebkitGridRowGap",
  "MSGridRowGap",
  "OGridRowGap",
  "gridRowStart",
  "MozGridRowStart",
  "WebkitGridRowStart",
  "MSGridRowStart",
  "OGridRowStart",
  "gridTemplate",
  "MozGridTemplate",
  "WebkitGridTemplate",
  "MSGridTemplate",
  "OGridTemplate",
  "gridTemplateAreas",
  "MozGridTemplateAreas",
  "WebkitGridTemplateAreas",
  "MSGridTemplateAreas",
  "OGridTemplateAreas",
  "gridTemplateColumns",
  "MozGridTemplateColumns",
  "WebkitGridTemplateColumns",
  "MSGridTemplateColumns",
  "OGridTemplateColumns",
  "gridTemplateRows",
  "MozGridTemplateRows",
  "WebkitGridTemplateRows",
  "MSGridTemplateRows",
  "OGridTemplateRows",
  "height",
  "MozHeight",
  "WebkitHeight",
  "MSHeight",
  "OHeight",
  "hyphens",
  "MozHyphens",
  "WebkitHyphens",
  "MSHyphens",
  "OHyphens",
  "hz",
  "MozHz",
  "WebkitHz",
  "MSHz",
  "OHz",
  "imageOrientation",
  "MozImageOrientation",
  "WebkitImageOrientation",
  "MSImageOrientation",
  "OImageOrientation",
  "imageRendering",
  "MozImageRendering",
  "WebkitImageRendering",
  "MSImageRendering",
  "OImageRendering",
  "imageResolution",
  "MozImageResolution",
  "WebkitImageResolution",
  "MSImageResolution",
  "OImageResolution",
  "imeMode",
  "MozImeMode",
  "WebkitImeMode",
  "MSImeMode",
  "OImeMode",
  "in",
  "MozIn",
  "WebkitIn",
  "MSIn",
  "OIn",
  "inherit",
  "MozInherit",
  "WebkitInherit",
  "MSInherit",
  "OInherit",
  "initial",
  "MozInitial",
  "WebkitInitial",
  "MSInitial",
  "OInitial",
  "inlineSize",
  "MozInlineSize",
  "WebkitInlineSize",
  "MSInlineSize",
  "OInlineSize",
  "isolation",
  "MozIsolation",
  "WebkitIsolation",
  "MSIsolation",
  "OIsolation",
  "justifyContent",
  "MozJustifyContent",
  "WebkitJustifyContent",
  "MSJustifyContent",
  "OJustifyContent",
  "khz",
  "MozKhz",
  "WebkitKhz",
  "MSKhz",
  "OKhz",
  "left",
  "MozLeft",
  "WebkitLeft",
  "MSLeft",
  "OLeft",
  "letterSpacing",
  "MozLetterSpacing",
  "WebkitLetterSpacing",
  "MSLetterSpacing",
  "OLetterSpacing",
  "lineBreak",
  "MozLineBreak",
  "WebkitLineBreak",
  "MSLineBreak",
  "OLineBreak",
  "lineHeight",
  "MozLineHeight",
  "WebkitLineHeight",
  "MSLineHeight",
  "OLineHeight",
  "listStyle",
  "MozListStyle",
  "WebkitListStyle",
  "MSListStyle",
  "OListStyle",
  "listStyleImage",
  "MozListStyleImage",
  "WebkitListStyleImage",
  "MSListStyleImage",
  "OListStyleImage",
  "listStylePosition",
  "MozListStylePosition",
  "WebkitListStylePosition",
  "MSListStylePosition",
  "OListStylePosition",
  "listStyleType",
  "MozListStyleType",
  "WebkitListStyleType",
  "MSListStyleType",
  "OListStyleType",
  "margin",
  "MozMargin",
  "WebkitMargin",
  "MSMargin",
  "OMargin",
  "marginBlockEnd",
  "MozMarginBlockEnd",
  "WebkitMarginBlockEnd",
  "MSMarginBlockEnd",
  "OMarginBlockEnd",
  "marginBlockStart",
  "MozMarginBlockStart",
  "WebkitMarginBlockStart",
  "MSMarginBlockStart",
  "OMarginBlockStart",
  "marginBottom",
  "MozMarginBottom",
  "WebkitMarginBottom",
  "MSMarginBottom",
  "OMarginBottom",
  "marginInlineEnd",
  "MozMarginInlineEnd",
  "WebkitMarginInlineEnd",
  "MSMarginInlineEnd",
  "OMarginInlineEnd",
  "marginInlineStart",
  "MozMarginInlineStart",
  "WebkitMarginInlineStart",
  "MSMarginInlineStart",
  "OMarginInlineStart",
  "marginLeft",
  "MozMarginLeft",
  "WebkitMarginLeft",
  "MSMarginLeft",
  "OMarginLeft",
  "marginRight",
  "MozMarginRight",
  "WebkitMarginRight",
  "MSMarginRight",
  "OMarginRight",
  "marginTop",
  "MozMarginTop",
  "WebkitMarginTop",
  "MSMarginTop",
  "OMarginTop",
  "mask",
  "MozMask",
  "WebkitMask",
  "MSMask",
  "OMask",
  "maskClip",
  "MozMaskClip",
  "WebkitMaskClip",
  "MSMaskClip",
  "OMaskClip",
  "maskComposite",
  "MozMaskComposite",
  "WebkitMaskComposite",
  "MSMaskComposite",
  "OMaskComposite",
  "maskImage",
  "MozMaskImage",
  "WebkitMaskImage",
  "MSMaskImage",
  "OMaskImage",
  "maskMode",
  "MozMaskMode",
  "WebkitMaskMode",
  "MSMaskMode",
  "OMaskMode",
  "maskOrigin",
  "MozMaskOrigin",
  "WebkitMaskOrigin",
  "MSMaskOrigin",
  "OMaskOrigin",
  "maskPosition",
  "MozMaskPosition",
  "WebkitMaskPosition",
  "MSMaskPosition",
  "OMaskPosition",
  "maskRepeat",
  "MozMaskRepeat",
  "WebkitMaskRepeat",
  "MSMaskRepeat",
  "OMaskRepeat",
  "maskSize",
  "MozMaskSize",
  "WebkitMaskSize",
  "MSMaskSize",
  "OMaskSize",
  "maskType",
  "MozMaskType",
  "WebkitMaskType",
  "MSMaskType",
  "OMaskType",
  "maxHeight",
  "MozMaxHeight",
  "WebkitMaxHeight",
  "MSMaxHeight",
  "OMaxHeight",
  "maxWidth",
  "MozMaxWidth",
  "WebkitMaxWidth",
  "MSMaxWidth",
  "OMaxWidth",
  "minBlockSize",
  "MozMinBlockSize",
  "WebkitMinBlockSize",
  "MSMinBlockSize",
  "OMinBlockSize",
  "minHeight",
  "MozMinHeight",
  "WebkitMinHeight",
  "MSMinHeight",
  "OMinHeight",
  "minInlineSize",
  "MozMinInlineSize",
  "WebkitMinInlineSize",
  "MSMinInlineSize",
  "OMinInlineSize",
  "minWidth",
  "MozMinWidth",
  "WebkitMinWidth",
  "MSMinWidth",
  "OMinWidth",
  "mixBlendMode",
  "MozMixBlendMode",
  "WebkitMixBlendMode",
  "MSMixBlendMode",
  "OMixBlendMode",
  "mm",
  "MozMm",
  "WebkitMm",
  "MSMm",
  "OMm",
  "ms",
  "MozMs",
  "WebkitMs",
  "MSMs",
  "OMs",
  "objectFit",
  "MozObjectFit",
  "WebkitObjectFit",
  "MSObjectFit",
  "OObjectFit",
  "objectPosition",
  "MozObjectPosition",
  "WebkitObjectPosition",
  "MSObjectPosition",
  "OObjectPosition",
  "offsetBlockEnd",
  "MozOffsetBlockEnd",
  "WebkitOffsetBlockEnd",
  "MSOffsetBlockEnd",
  "OOffsetBlockEnd",
  "offsetBlockStart",
  "MozOffsetBlockStart",
  "WebkitOffsetBlockStart",
  "MSOffsetBlockStart",
  "OOffsetBlockStart",
  "offsetInlineEnd",
  "MozOffsetInlineEnd",
  "WebkitOffsetInlineEnd",
  "MSOffsetInlineEnd",
  "OOffsetInlineEnd",
  "offsetInlineStart",
  "MozOffsetInlineStart",
  "WebkitOffsetInlineStart",
  "MSOffsetInlineStart",
  "OOffsetInlineStart",
  "opacity",
  "MozOpacity",
  "WebkitOpacity",
  "MSOpacity",
  "OOpacity",
  "order",
  "MozOrder",
  "WebkitOrder",
  "MSOrder",
  "OOrder",
  "orphans",
  "MozOrphans",
  "WebkitOrphans",
  "MSOrphans",
  "OOrphans",
  "outline",
  "MozOutline",
  "WebkitOutline",
  "MSOutline",
  "OOutline",
  "outlineColor",
  "MozOutlineColor",
  "WebkitOutlineColor",
  "MSOutlineColor",
  "OOutlineColor",
  "outlineOffset",
  "MozOutlineOffset",
  "WebkitOutlineOffset",
  "MSOutlineOffset",
  "OOutlineOffset",
  "outlineStyle",
  "MozOutlineStyle",
  "WebkitOutlineStyle",
  "MSOutlineStyle",
  "OOutlineStyle",
  "outlineWidth",
  "MozOutlineWidth",
  "WebkitOutlineWidth",
  "MSOutlineWidth",
  "OOutlineWidth",
  "overflow",
  "MozOverflow",
  "WebkitOverflow",
  "MSOverflow",
  "OOverflow",
  "overflowWrap",
  "MozOverflowWrap",
  "WebkitOverflowWrap",
  "MSOverflowWrap",
  "OOverflowWrap",
  "overflowX",
  "MozOverflowX",
  "WebkitOverflowX",
  "MSOverflowX",
  "OOverflowX",
  "overflowY",
  "MozOverflowY",
  "WebkitOverflowY",
  "MSOverflowY",
  "OOverflowY",
  "padding",
  "MozPadding",
  "WebkitPadding",
  "MSPadding",
  "OPadding",
  "paddingBlockEnd",
  "MozPaddingBlockEnd",
  "WebkitPaddingBlockEnd",
  "MSPaddingBlockEnd",
  "OPaddingBlockEnd",
  "paddingBlockStart",
  "MozPaddingBlockStart",
  "WebkitPaddingBlockStart",
  "MSPaddingBlockStart",
  "OPaddingBlockStart",
  "paddingBottom",
  "MozPaddingBottom",
  "WebkitPaddingBottom",
  "MSPaddingBottom",
  "OPaddingBottom",
  "paddingInlineEnd",
  "MozPaddingInlineEnd",
  "WebkitPaddingInlineEnd",
  "MSPaddingInlineEnd",
  "OPaddingInlineEnd",
  "paddingInlineStart",
  "MozPaddingInlineStart",
  "WebkitPaddingInlineStart",
  "MSPaddingInlineStart",
  "OPaddingInlineStart",
  "paddingLeft",
  "MozPaddingLeft",
  "WebkitPaddingLeft",
  "MSPaddingLeft",
  "OPaddingLeft",
  "paddingRight",
  "MozPaddingRight",
  "WebkitPaddingRight",
  "MSPaddingRight",
  "OPaddingRight",
  "paddingTop",
  "MozPaddingTop",
  "WebkitPaddingTop",
  "MSPaddingTop",
  "OPaddingTop",
  "pageBreakAfter",
  "MozPageBreakAfter",
  "WebkitPageBreakAfter",
  "MSPageBreakAfter",
  "OPageBreakAfter",
  "pageBreakBefore",
  "MozPageBreakBefore",
  "WebkitPageBreakBefore",
  "MSPageBreakBefore",
  "OPageBreakBefore",
  "pageBreakInside",
  "MozPageBreakInside",
  "WebkitPageBreakInside",
  "MSPageBreakInside",
  "OPageBreakInside",
  "pc",
  "MozPc",
  "WebkitPc",
  "MSPc",
  "OPc",
  "perspective",
  "MozPerspective",
  "WebkitPerspective",
  "MSPerspective",
  "OPerspective",
  "perspectiveOrigin",
  "MozPerspectiveOrigin",
  "WebkitPerspectiveOrigin",
  "MSPerspectiveOrigin",
  "OPerspectiveOrigin",
  "pointerEvents",
  "MozPointerEvents",
  "WebkitPointerEvents",
  "MSPointerEvents",
  "OPointerEvents",
  "position",
  "MozPosition",
  "WebkitPosition",
  "MSPosition",
  "OPosition",
  "pt",
  "MozPt",
  "WebkitPt",
  "MSPt",
  "OPt",
  "px",
  "MozPx",
  "WebkitPx",
  "MSPx",
  "OPx",
  "q",
  "MozQ",
  "WebkitQ",
  "MSQ",
  "OQ",
  "quotes",
  "MozQuotes",
  "WebkitQuotes",
  "MSQuotes",
  "OQuotes",
  "rad",
  "MozRad",
  "WebkitRad",
  "MSRad",
  "ORad",
  "rem",
  "MozRem",
  "WebkitRem",
  "MSRem",
  "ORem",
  "resize",
  "MozResize",
  "WebkitResize",
  "MSResize",
  "OResize",
  "revert",
  "MozRevert",
  "WebkitRevert",
  "MSRevert",
  "ORevert",
  "right",
  "MozRight",
  "WebkitRight",
  "MSRight",
  "ORight",
  "rubyAlign",
  "MozRubyAlign",
  "WebkitRubyAlign",
  "MSRubyAlign",
  "ORubyAlign",
  "rubyMerge",
  "MozRubyMerge",
  "WebkitRubyMerge",
  "MSRubyMerge",
  "ORubyMerge",
  "rubyPosition",
  "MozRubyPosition",
  "WebkitRubyPosition",
  "MSRubyPosition",
  "ORubyPosition",
  "s",
  "MozS",
  "WebkitS",
  "MSS",
  "OS",
  "scrollBehavior",
  "MozScrollBehavior",
  "WebkitScrollBehavior",
  "MSScrollBehavior",
  "OScrollBehavior",
  "scrollSnapCoordinate",
  "MozScrollSnapCoordinate",
  "WebkitScrollSnapCoordinate",
  "MSScrollSnapCoordinate",
  "OScrollSnapCoordinate",
  "scrollSnapDestination",
  "MozScrollSnapDestination",
  "WebkitScrollSnapDestination",
  "MSScrollSnapDestination",
  "OScrollSnapDestination",
  "scrollSnapType",
  "MozScrollSnapType",
  "WebkitScrollSnapType",
  "MSScrollSnapType",
  "OScrollSnapType",
  "shapeImageThreshold",
  "MozShapeImageThreshold",
  "WebkitShapeImageThreshold",
  "MSShapeImageThreshold",
  "OShapeImageThreshold",
  "shapeMargin",
  "MozShapeMargin",
  "WebkitShapeMargin",
  "MSShapeMargin",
  "OShapeMargin",
  "shapeOutside",
  "MozShapeOutside",
  "WebkitShapeOutside",
  "MSShapeOutside",
  "OShapeOutside",
  "tabSize",
  "MozTabSize",
  "WebkitTabSize",
  "MSTabSize",
  "OTabSize",
  "tableLayout",
  "MozTableLayout",
  "WebkitTableLayout",
  "MSTableLayout",
  "OTableLayout",
  "textAlign",
  "MozTextAlign",
  "WebkitTextAlign",
  "MSTextAlign",
  "OTextAlign",
  "textAlignLast",
  "MozTextAlignLast",
  "WebkitTextAlignLast",
  "MSTextAlignLast",
  "OTextAlignLast",
  "textCombineUpright",
  "MozTextCombineUpright",
  "WebkitTextCombineUpright",
  "MSTextCombineUpright",
  "OTextCombineUpright",
  "textDecoration",
  "MozTextDecoration",
  "WebkitTextDecoration",
  "MSTextDecoration",
  "OTextDecoration",
  "textDecorationColor",
  "MozTextDecorationColor",
  "WebkitTextDecorationColor",
  "MSTextDecorationColor",
  "OTextDecorationColor",
  "textDecorationLine",
  "MozTextDecorationLine",
  "WebkitTextDecorationLine",
  "MSTextDecorationLine",
  "OTextDecorationLine",
  "textDecorationStyle",
  "MozTextDecorationStyle",
  "WebkitTextDecorationStyle",
  "MSTextDecorationStyle",
  "OTextDecorationStyle",
  "textEmphasis",
  "MozTextEmphasis",
  "WebkitTextEmphasis",
  "MSTextEmphasis",
  "OTextEmphasis",
  "textEmphasisColor",
  "MozTextEmphasisColor",
  "WebkitTextEmphasisColor",
  "MSTextEmphasisColor",
  "OTextEmphasisColor",
  "textEmphasisPosition",
  "MozTextEmphasisPosition",
  "WebkitTextEmphasisPosition",
  "MSTextEmphasisPosition",
  "OTextEmphasisPosition",
  "textEmphasisStyle",
  "MozTextEmphasisStyle",
  "WebkitTextEmphasisStyle",
  "MSTextEmphasisStyle",
  "OTextEmphasisStyle",
  "textIndent",
  "MozTextIndent",
  "WebkitTextIndent",
  "MSTextIndent",
  "OTextIndent",
  "textOrientation",
  "MozTextOrientation",
  "WebkitTextOrientation",
  "MSTextOrientation",
  "OTextOrientation",
  "textOverflow",
  "MozTextOverflow",
  "WebkitTextOverflow",
  "MSTextOverflow",
  "OTextOverflow",
  "textRendering",
  "MozTextRendering",
  "WebkitTextRendering",
  "MSTextRendering",
  "OTextRendering",
  "textShadow",
  "MozTextShadow",
  "WebkitTextShadow",
  "MSTextShadow",
  "OTextShadow",
  "textTransform",
  "MozTextTransform",
  "WebkitTextTransform",
  "MSTextTransform",
  "OTextTransform",
  "textUnderlinePosition",
  "MozTextUnderlinePosition",
  "WebkitTextUnderlinePosition",
  "MSTextUnderlinePosition",
  "OTextUnderlinePosition",
  "top",
  "MozTop",
  "WebkitTop",
  "MSTop",
  "OTop",
  "touchAction",
  "MozTouchAction",
  "WebkitTouchAction",
  "MSTouchAction",
  "OTouchAction",
  "transform",
  "MozTransform",
  "WebkitTransform",
  "msTransform",
  "OTransform",
  "transformBox",
  "MozTransformBox",
  "WebkitTransformBox",
  "MSTransformBox",
  "OTransformBox",
  "transformOrigin",
  "MozTransformOrigin",
  "WebkitTransformOrigin",
  "MSTransformOrigin",
  "OTransformOrigin",
  "transformStyle",
  "MozTransformStyle",
  "WebkitTransformStyle",
  "MSTransformStyle",
  "OTransformStyle",
  "transition",
  "MozTransition",
  "WebkitTransition",
  "MSTransition",
  "OTransition",
  "transitionDelay",
  "MozTransitionDelay",
  "WebkitTransitionDelay",
  "MSTransitionDelay",
  "OTransitionDelay",
  "transitionDuration",
  "MozTransitionDuration",
  "WebkitTransitionDuration",
  "MSTransitionDuration",
  "OTransitionDuration",
  "transitionProperty",
  "MozTransitionProperty",
  "WebkitTransitionProperty",
  "MSTransitionProperty",
  "OTransitionProperty",
  "transitionTimingFunction",
  "MozTransitionTimingFunction",
  "WebkitTransitionTimingFunction",
  "MSTransitionTimingFunction",
  "OTransitionTimingFunction",
  "turn",
  "MozTurn",
  "WebkitTurn",
  "MSTurn",
  "OTurn",
  "unicodeBidi",
  "MozUnicodeBidi",
  "WebkitUnicodeBidi",
  "MSUnicodeBidi",
  "OUnicodeBidi",
  "unset",
  "MozUnset",
  "WebkitUnset",
  "MSUnset",
  "OUnset",
  "verticalAlign",
  "MozVerticalAlign",
  "WebkitVerticalAlign",
  "MSVerticalAlign",
  "OVerticalAlign",
  "vh",
  "MozVh",
  "WebkitVh",
  "MSVh",
  "OVh",
  "visibility",
  "MozVisibility",
  "WebkitVisibility",
  "MSVisibility",
  "OVisibility",
  "vmax",
  "MozVmax",
  "WebkitVmax",
  "MSVmax",
  "OVmax",
  "vmin",
  "MozVmin",
  "WebkitVmin",
  "MSVmin",
  "OVmin",
  "vw",
  "MozVw",
  "WebkitVw",
  "MSVw",
  "OVw",
  "whiteSpace",
  "MozWhiteSpace",
  "WebkitWhiteSpace",
  "MSWhiteSpace",
  "OWhiteSpace",
  "widows",
  "MozWidows",
  "WebkitWidows",
  "MSWidows",
  "OWidows",
  "width",
  "MozWidth",
  "WebkitWidth",
  "MSWidth",
  "OWidth",
  "willChange",
  "MozWillChange",
  "WebkitWillChange",
  "MSWillChange",
  "OWillChange",
  "wordBreak",
  "MozWordBreak",
  "WebkitWordBreak",
  "MSWordBreak",
  "OWordBreak",
  "wordSpacing",
  "MozWordSpacing",
  "WebkitWordSpacing",
  "MSWordSpacing",
  "OWordSpacing",
  "wordWrap",
  "MozWordWrap",
  "WebkitWordWrap",
  "MSWordWrap",
  "OWordWrap",
  "writingMode",
  "MozWritingMode",
  "WebkitWritingMode",
  "MSWritingMode",
  "OWritingMode",
  "zIndex",
  "MozZIndex",
  "WebkitZIndex",
  "MSZIndex",
  "OZIndex",
  "fontSize",
  "MozFontSize",
  "WebkitFontSize",
  "MSFontSize",
  "OFontSize",
  "flex",
  "MozFlex",
  "WebkitFlex",
  "MSFlex",
  "OFlex",
  "fr",
  "MozFr",
  "WebkitFr",
  "MSFr",
  "OFr",
  "overflowScrolling",
  "MozOverflowScrolling",
  "WebkitOverflowScrolling",
  "MSOverflowScrolling",
  "OOverflowScrolling"
]


/***/ }),
/* 203 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"field":"theme_field-3Tq32","ripple":"theme_ripple-2NWrZ","text":"theme_text-dXU7C","input":"theme_input-271V1","check":"theme_check-1CXAo","checked":"theme_checked-nSz7s","checkmark-expand":"theme_checkmark-expand-3GU9D","disabled":"theme_disabled-2jVLS"};

/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__graph___ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_toolbox_lib_dropdown__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_toolbox_lib_dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_toolbox_lib_dropdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__RootSelector_css__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__RootSelector_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__RootSelector_css__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var RootSelector = /** @class */ (function (_super) {
    __extends(RootSelector, _super);
    function RootSelector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RootSelector.prototype.render = function () {
        var _a = this.props, rootTypeId = _a.rootTypeId, theme = _a.theme, schema = _a.schema, onChange = _a.onChange;
        if (schema === null)
            return null;
        rootTypeId = rootTypeId || Object(__WEBPACK_IMPORTED_MODULE_2__graph___["c" /* getDefaultRoot */])(schema);
        var types = schema.types, queryType = schema.queryType, mutationType = schema.mutationType, subscriptionType = schema.subscriptionType;
        types = __WEBPACK_IMPORTED_MODULE_0_lodash__["omit"](types, queryType.id);
        if (mutationType)
            types = __WEBPACK_IMPORTED_MODULE_0_lodash__["omit"](types, mutationType.id);
        if (subscriptionType)
            types = __WEBPACK_IMPORTED_MODULE_0_lodash__["omit"](types, subscriptionType.id);
        types = __WEBPACK_IMPORTED_MODULE_0_lodash__(types).values().filter(__WEBPACK_IMPORTED_MODULE_2__graph___["e" /* isNode */])
            .sortBy('name').value();
        var typesList = __WEBPACK_IMPORTED_MODULE_0_lodash__["compact"]([queryType, mutationType, subscriptionType]).map(function (type) { return ({
            value: type.id,
            label: type.name,
            bold: true
        }); });
        typesList = typesList.concat(types.map(function (type) { return ({ value: type.id, label: type.name }); }));
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_toolbox_lib_dropdown___default.a, { className: 'root-selector', theme: theme, source: typesList, onChange: function (value) {
                onChange(value);
            }, value: rootTypeId, template: function (item) { return item.bold ? __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("strong", null,
                " ",
                item.label,
                " ") : __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("span", null, item.label); } }));
    };
    return RootSelector;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (RootSelector);


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dropdown = undefined;

var _reactCssThemr = __webpack_require__(7);

var _identifiers = __webpack_require__(8);

var _Dropdown = __webpack_require__(206);

var _input = __webpack_require__(207);

var _theme = __webpack_require__(209);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dropdown = (0, _Dropdown.dropdownFactory)(_input.Input);
var ThemedDropdown = (0, _reactCssThemr.themr)(_identifiers.DROPDOWN, _theme2.default)(Dropdown);

exports.default = ThemedDropdown;
exports.Dropdown = ThemedDropdown;

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dropdown = exports.dropdownFactory = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(27);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames4 = __webpack_require__(1);

var _classnames5 = _interopRequireDefault(_classnames4);

var _reactCssThemr = __webpack_require__(7);

var _identifiers = __webpack_require__(8);

var _Input = __webpack_require__(81);

var _Input2 = _interopRequireDefault(_Input);

var _events = __webpack_require__(45);

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable */


var factory = function factory(Input) {
  var Dropdown = function (_Component) {
    _inherits(Dropdown, _Component);

    function Dropdown() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Dropdown);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        active: false,
        up: false
      }, _this.getDocumentEvents = function () {
        return {
          click: _this.handleDocumentClick,
          touchend: _this.handleDocumentClick
        };
      }, _this.getSelectedItem = function () {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = _this.props.source[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            if (item[_this.props.valueKey] === _this.props.value) return item;
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        return !_this.props.allowBlank ? _this.props.source[0] : undefined;
      }, _this.handleSelect = function (item, event) {
        if (_this.props.onBlur) _this.props.onBlur(event);
        if (!_this.props.disabled && _this.props.onChange) {
          if (_this.props.name) event.target.name = _this.props.name;
          _this.props.onChange(item, event);
          _this.close();
        }
      }, _this.handleClick = function (event) {
        _this.open(event);
        _events2.default.pauseEvent(event);
        if (_this.props.onClick) _this.props.onClick(event);
      }, _this.handleDocumentClick = function (event) {
        if (_this.state.active && !_events2.default.targetIsDescendant(event, _reactDom2.default.findDOMNode(_this))) {
          _this.setState({ active: false });
        }
      }, _this.close = function () {
        if (_this.state.active) {
          _this.setState({ active: false });
        }
      }, _this.open = function (event) {
        if (_this.state.active) return;
        var client = event.target.getBoundingClientRect();
        var screenHeight = window.innerHeight || document.documentElement.offsetHeight;
        var up = _this.props.auto ? client.top > screenHeight / 2 + client.height : false;
        if (_this.inputNode) _this.inputNode.blur();
        _this.setState({ active: true, up: up });
      }, _this.handleFocus = function (event) {
        event.stopPropagation();
        if (!_this.props.disabled) _this.open(event);
        if (_this.props.onFocus) _this.props.onFocus(event);
      }, _this.handleBlur = function (event) {
        event.stopPropagation();
        if (_this.state.active) _this.close();
        if (_this.props.onBlur) _this.props.onBlur(event);
      }, _this.renderValue = function (item, idx) {
        var _classnames;

        var _this$props = _this.props,
            labelKey = _this$props.labelKey,
            theme = _this$props.theme,
            valueKey = _this$props.valueKey;

        var className = (0, _classnames5.default)((_classnames = {}, _defineProperty(_classnames, theme.selected, item[valueKey] === _this.props.value), _defineProperty(_classnames, theme.disabled, item.disabled), _classnames));
        return _react2.default.createElement(
          'li',
          {
            key: idx,
            className: className,
            onClick: !item.disabled && _this.handleSelect.bind(_this, item[valueKey])
          },
          _this.props.template ? _this.props.template(item) : item[labelKey]
        );
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Dropdown, [{
      key: 'componentWillUpdate',
      value: function componentWillUpdate(nextProps, nextState) {
        if (!this.state.active && nextState.active) {
          _events2.default.addEventsToDocument(this.getDocumentEvents());
        }
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps, prevState) {
        if (prevState.active && !this.state.active) {
          _events2.default.removeEventsFromDocument(this.getDocumentEvents());
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.state.active) {
          _events2.default.removeEventsFromDocument(this.getDocumentEvents());
        }
      }
    }, {
      key: 'renderTemplateValue',
      value: function renderTemplateValue(selected) {
        var _classnames2;

        var theme = this.props.theme;

        var className = (0, _classnames5.default)(theme.field, (_classnames2 = {}, _defineProperty(_classnames2, theme.errored, this.props.error), _defineProperty(_classnames2, theme.disabled, this.props.disabled), _defineProperty(_classnames2, theme.required, this.props.required), _classnames2));

        return _react2.default.createElement(
          'div',
          { className: className, onClick: this.handleClick },
          _react2.default.createElement(
            'div',
            { className: theme.templateValue + ' ' + theme.value },
            this.props.template(selected)
          ),
          this.props.label ? _react2.default.createElement(
            'label',
            { className: theme.label },
            this.props.label,
            this.props.required ? _react2.default.createElement(
              'span',
              { className: theme.required },
              ' * '
            ) : null
          ) : null,
          this.props.error ? _react2.default.createElement(
            'span',
            { className: theme.error },
            this.props.error
          ) : null
        );
      }
    }, {
      key: 'render',
      value: function render() {
        var _classnames3,
            _this2 = this;

        var _props = this.props,
            allowBlank = _props.allowBlank,
            auto = _props.auto,
            labelKey = _props.labelKey,
            required = _props.required,
            onChange = _props.onChange,
            onFocus = _props.onFocus,
            onBlur = _props.onBlur,
            source = _props.source,
            template = _props.template,
            theme = _props.theme,
            valueKey = _props.valueKey,
            others = _objectWithoutProperties(_props, ['allowBlank', 'auto', 'labelKey', 'required', 'onChange', 'onFocus', 'onBlur', 'source', 'template', 'theme', 'valueKey']);

        var selected = this.getSelectedItem();
        var className = (0, _classnames5.default)(theme.dropdown, (_classnames3 = {}, _defineProperty(_classnames3, theme.up, this.state.up), _defineProperty(_classnames3, theme.active, this.state.active), _defineProperty(_classnames3, theme.disabled, this.props.disabled), _defineProperty(_classnames3, theme.required, this.props.required), _classnames3), this.props.className);

        return _react2.default.createElement(
          'div',
          {
            className: className,
            'data-react-toolbox': 'dropdown',
            onBlur: this.handleBlur,
            onFocus: this.handleFocus
          },
          _react2.default.createElement(Input, _extends({}, others, {
            tabIndex: '0',
            className: theme.value,
            onClick: this.handleClick,
            required: this.props.required,
            readOnly: true,
            innerRef: function innerRef(node) {
              _this2.inputNode = node;
            },
            type: template && selected ? 'hidden' : null,
            theme: theme,
            themeNamespace: 'input',
            value: selected && selected[labelKey] ? selected[labelKey] : ''
          })),
          template && selected ? this.renderTemplateValue(selected) : null,
          _react2.default.createElement(
            'ul',
            { className: theme.values },
            source.map(this.renderValue)
          )
        );
      }
    }]);

    return Dropdown;
  }(_react.Component);

  Dropdown.propTypes = {
    allowBlank: _propTypes2.default.bool,
    auto: _propTypes2.default.bool,
    className: _propTypes2.default.string,
    disabled: _propTypes2.default.bool,
    error: _propTypes2.default.string,
    label: _propTypes2.default.string,
    labelKey: _propTypes2.default.string,
    name: _propTypes2.default.string,
    onBlur: _propTypes2.default.func,
    onChange: _propTypes2.default.func,
    onClick: _propTypes2.default.func,
    onFocus: _propTypes2.default.func,
    required: _propTypes2.default.bool,
    source: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object])).isRequired,
    template: _propTypes2.default.func,
    theme: _propTypes2.default.shape({
      active: _propTypes2.default.string,
      disabled: _propTypes2.default.string,
      dropdown: _propTypes2.default.string,
      error: _propTypes2.default.string,
      errored: _propTypes2.default.string,
      field: _propTypes2.default.string,
      label: _propTypes2.default.string,
      required: _propTypes2.default.string,
      selected: _propTypes2.default.string,
      templateValue: _propTypes2.default.string,
      up: _propTypes2.default.string,
      value: _propTypes2.default.string,
      values: _propTypes2.default.string
    }),
    value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    valueKey: _propTypes2.default.string
  };
  Dropdown.defaultProps = {
    auto: true,
    className: '',
    allowBlank: true,
    disabled: false,
    labelKey: 'label',
    required: false,
    valueKey: 'value'
  };


  return Dropdown;
};

var Dropdown = factory(_Input2.default);
exports.default = (0, _reactCssThemr.themr)(_identifiers.DROPDOWN)(Dropdown);
exports.dropdownFactory = factory;
exports.Dropdown = Dropdown;

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = undefined;

var _reactCssThemr = __webpack_require__(7);

var _identifiers = __webpack_require__(8);

var _Input = __webpack_require__(81);

var _FontIcon = __webpack_require__(16);

var _theme = __webpack_require__(208);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = (0, _Input.inputFactory)(_FontIcon.FontIcon);
var ThemedInput = (0, _reactCssThemr.themr)(_identifiers.INPUT, _theme2.default)(Input);

exports.default = ThemedInput;
exports.Input = ThemedInput;

/***/ }),
/* 208 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"input":"theme_input-lFVgC","withIcon":"theme_withIcon-1nKdf","icon":"theme_icon-3ga1V","inputElement":"theme_inputElement-4bZUj","bar":"theme_bar-3FySS","label":"theme_label-34120","fixed":"theme_fixed-GRQEP","required":"theme_required-2G0aY","hint":"theme_hint-bMyi_","filled":"theme_filled-34NWn","error":"theme_error-2k5Jz","counter":"theme_counter-1oTuT","disabled":"theme_disabled-3ZfJq","errored":"theme_errored-2s74E","hidden":"theme_hidden-2gAMv"};

/***/ }),
/* 209 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"dropdown":"theme_dropdown-ZzBNK","active":"theme_active-1DQ-E","values":"theme_values-2767w","label":"theme_label-2KjGM","value":"theme_value-6c1D5","up":"theme_up-1OA-G","disabled":"theme_disabled-1skVH","field":"theme_field-d5bru","errored":"theme_errored-3dZUG","templateValue":"theme_templateValue-6dCtT","required":"theme_required-1j4LX","error":"theme_error-fySw3","selected":"theme_selected-3uiEo"};

/***/ }),
/* 210 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});
//# sourceMappingURL=voyager.lib.js.map