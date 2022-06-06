// source: cosmos/auth/module/v1/module.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var cosmos_app_v1alpha1_module_pb = require('../../../../cosmos/app/v1alpha1/module_pb.js');
goog.object.extend(proto, cosmos_app_v1alpha1_module_pb);
goog.exportSymbol('proto.cosmos.auth.module.v1.Module', null, global);
goog.exportSymbol('proto.cosmos.auth.module.v1.ModuleAccountPermission', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cosmos.auth.module.v1.Module = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cosmos.auth.module.v1.Module.repeatedFields_, null);
};
goog.inherits(proto.cosmos.auth.module.v1.Module, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.auth.module.v1.Module.displayName = 'proto.cosmos.auth.module.v1.Module';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cosmos.auth.module.v1.ModuleAccountPermission = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cosmos.auth.module.v1.ModuleAccountPermission.repeatedFields_, null);
};
goog.inherits(proto.cosmos.auth.module.v1.ModuleAccountPermission, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.auth.module.v1.ModuleAccountPermission.displayName = 'proto.cosmos.auth.module.v1.ModuleAccountPermission';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cosmos.auth.module.v1.Module.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cosmos.auth.module.v1.Module.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.auth.module.v1.Module.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.auth.module.v1.Module} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.auth.module.v1.Module.toObject = function(includeInstance, msg) {
  var f, obj = {
    bech32Prefix: jspb.Message.getFieldWithDefault(msg, 1, ""),
    moduleAccountPermissionsList: jspb.Message.toObjectList(msg.getModuleAccountPermissionsList(),
    proto.cosmos.auth.module.v1.ModuleAccountPermission.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cosmos.auth.module.v1.Module}
 */
proto.cosmos.auth.module.v1.Module.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.auth.module.v1.Module;
  return proto.cosmos.auth.module.v1.Module.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.auth.module.v1.Module} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.auth.module.v1.Module}
 */
proto.cosmos.auth.module.v1.Module.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBech32Prefix(value);
      break;
    case 2:
      var value = new proto.cosmos.auth.module.v1.ModuleAccountPermission;
      reader.readMessage(value,proto.cosmos.auth.module.v1.ModuleAccountPermission.deserializeBinaryFromReader);
      msg.addModuleAccountPermissions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cosmos.auth.module.v1.Module.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.auth.module.v1.Module.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.auth.module.v1.Module} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.auth.module.v1.Module.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBech32Prefix();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getModuleAccountPermissionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.cosmos.auth.module.v1.ModuleAccountPermission.serializeBinaryToWriter
    );
  }
};


/**
 * optional string bech32_prefix = 1;
 * @return {string}
 */
proto.cosmos.auth.module.v1.Module.prototype.getBech32Prefix = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.auth.module.v1.Module} returns this
 */
proto.cosmos.auth.module.v1.Module.prototype.setBech32Prefix = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated ModuleAccountPermission module_account_permissions = 2;
 * @return {!Array<!proto.cosmos.auth.module.v1.ModuleAccountPermission>}
 */
proto.cosmos.auth.module.v1.Module.prototype.getModuleAccountPermissionsList = function() {
  return /** @type{!Array<!proto.cosmos.auth.module.v1.ModuleAccountPermission>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cosmos.auth.module.v1.ModuleAccountPermission, 2));
};


/**
 * @param {!Array<!proto.cosmos.auth.module.v1.ModuleAccountPermission>} value
 * @return {!proto.cosmos.auth.module.v1.Module} returns this
*/
proto.cosmos.auth.module.v1.Module.prototype.setModuleAccountPermissionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.cosmos.auth.module.v1.ModuleAccountPermission=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.auth.module.v1.ModuleAccountPermission}
 */
proto.cosmos.auth.module.v1.Module.prototype.addModuleAccountPermissions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.cosmos.auth.module.v1.ModuleAccountPermission, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cosmos.auth.module.v1.Module} returns this
 */
proto.cosmos.auth.module.v1.Module.prototype.clearModuleAccountPermissionsList = function() {
  return this.setModuleAccountPermissionsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cosmos.auth.module.v1.ModuleAccountPermission.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cosmos.auth.module.v1.ModuleAccountPermission.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.auth.module.v1.ModuleAccountPermission.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.auth.module.v1.ModuleAccountPermission} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.auth.module.v1.ModuleAccountPermission.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: jspb.Message.getFieldWithDefault(msg, 1, ""),
    permissionsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cosmos.auth.module.v1.ModuleAccountPermission}
 */
proto.cosmos.auth.module.v1.ModuleAccountPermission.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.auth.module.v1.ModuleAccountPermission;
  return proto.cosmos.auth.module.v1.ModuleAccountPermission.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.auth.module.v1.ModuleAccountPermission} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.auth.module.v1.ModuleAccountPermission}
 */
proto.cosmos.auth.module.v1.ModuleAccountPermission.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addPermissions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cosmos.auth.module.v1.ModuleAccountPermission.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.auth.module.v1.ModuleAccountPermission.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.auth.module.v1.ModuleAccountPermission} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.auth.module.v1.ModuleAccountPermission.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPermissionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string account = 1;
 * @return {string}
 */
proto.cosmos.auth.module.v1.ModuleAccountPermission.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.auth.module.v1.ModuleAccountPermission} returns this
 */
proto.cosmos.auth.module.v1.ModuleAccountPermission.prototype.setAccount = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string permissions = 2;
 * @return {!Array<string>}
 */
proto.cosmos.auth.module.v1.ModuleAccountPermission.prototype.getPermissionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.cosmos.auth.module.v1.ModuleAccountPermission} returns this
 */
proto.cosmos.auth.module.v1.ModuleAccountPermission.prototype.setPermissionsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.cosmos.auth.module.v1.ModuleAccountPermission} returns this
 */
proto.cosmos.auth.module.v1.ModuleAccountPermission.prototype.addPermissions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cosmos.auth.module.v1.ModuleAccountPermission} returns this
 */
proto.cosmos.auth.module.v1.ModuleAccountPermission.prototype.clearPermissionsList = function() {
  return this.setPermissionsList([]);
};


goog.object.extend(exports, proto.cosmos.auth.module.v1);
