// source: ibc/applications/fee/v1/fee.proto
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

var cosmos_base_v1beta1_coin_pb = require('../../../../cosmos/base/v1beta1/coin_pb.js');
goog.object.extend(proto, cosmos_base_v1beta1_coin_pb);
var gogoproto_gogo_pb = require('../../../../gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
var ibc_core_channel_v1_channel_pb = require('../../../../ibc/core/channel/v1/channel_pb.js');
goog.object.extend(proto, ibc_core_channel_v1_channel_pb);
goog.exportSymbol('proto.ibc.applications.fee.v1.Fee', null, global);
goog.exportSymbol('proto.ibc.applications.fee.v1.IdentifiedPacketFees', null, global);
goog.exportSymbol('proto.ibc.applications.fee.v1.PacketFee', null, global);
goog.exportSymbol('proto.ibc.applications.fee.v1.PacketFees', null, global);
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
proto.ibc.applications.fee.v1.Fee = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ibc.applications.fee.v1.Fee.repeatedFields_, null);
};
goog.inherits(proto.ibc.applications.fee.v1.Fee, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ibc.applications.fee.v1.Fee.displayName = 'proto.ibc.applications.fee.v1.Fee';
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
proto.ibc.applications.fee.v1.PacketFee = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ibc.applications.fee.v1.PacketFee.repeatedFields_, null);
};
goog.inherits(proto.ibc.applications.fee.v1.PacketFee, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ibc.applications.fee.v1.PacketFee.displayName = 'proto.ibc.applications.fee.v1.PacketFee';
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
proto.ibc.applications.fee.v1.PacketFees = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ibc.applications.fee.v1.PacketFees.repeatedFields_, null);
};
goog.inherits(proto.ibc.applications.fee.v1.PacketFees, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ibc.applications.fee.v1.PacketFees.displayName = 'proto.ibc.applications.fee.v1.PacketFees';
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
proto.ibc.applications.fee.v1.IdentifiedPacketFees = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ibc.applications.fee.v1.IdentifiedPacketFees.repeatedFields_, null);
};
goog.inherits(proto.ibc.applications.fee.v1.IdentifiedPacketFees, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ibc.applications.fee.v1.IdentifiedPacketFees.displayName = 'proto.ibc.applications.fee.v1.IdentifiedPacketFees';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ibc.applications.fee.v1.Fee.repeatedFields_ = [1,2,3];



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
proto.ibc.applications.fee.v1.Fee.prototype.toObject = function(opt_includeInstance) {
  return proto.ibc.applications.fee.v1.Fee.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ibc.applications.fee.v1.Fee} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ibc.applications.fee.v1.Fee.toObject = function(includeInstance, msg) {
  var f, obj = {
    recvFeeList: jspb.Message.toObjectList(msg.getRecvFeeList(),
    cosmos_base_v1beta1_coin_pb.Coin.toObject, includeInstance),
    ackFeeList: jspb.Message.toObjectList(msg.getAckFeeList(),
    cosmos_base_v1beta1_coin_pb.Coin.toObject, includeInstance),
    timeoutFeeList: jspb.Message.toObjectList(msg.getTimeoutFeeList(),
    cosmos_base_v1beta1_coin_pb.Coin.toObject, includeInstance)
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
 * @return {!proto.ibc.applications.fee.v1.Fee}
 */
proto.ibc.applications.fee.v1.Fee.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ibc.applications.fee.v1.Fee;
  return proto.ibc.applications.fee.v1.Fee.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ibc.applications.fee.v1.Fee} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ibc.applications.fee.v1.Fee}
 */
proto.ibc.applications.fee.v1.Fee.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cosmos_base_v1beta1_coin_pb.Coin;
      reader.readMessage(value,cosmos_base_v1beta1_coin_pb.Coin.deserializeBinaryFromReader);
      msg.addRecvFee(value);
      break;
    case 2:
      var value = new cosmos_base_v1beta1_coin_pb.Coin;
      reader.readMessage(value,cosmos_base_v1beta1_coin_pb.Coin.deserializeBinaryFromReader);
      msg.addAckFee(value);
      break;
    case 3:
      var value = new cosmos_base_v1beta1_coin_pb.Coin;
      reader.readMessage(value,cosmos_base_v1beta1_coin_pb.Coin.deserializeBinaryFromReader);
      msg.addTimeoutFee(value);
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
proto.ibc.applications.fee.v1.Fee.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ibc.applications.fee.v1.Fee.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ibc.applications.fee.v1.Fee} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ibc.applications.fee.v1.Fee.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecvFeeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      cosmos_base_v1beta1_coin_pb.Coin.serializeBinaryToWriter
    );
  }
  f = message.getAckFeeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      cosmos_base_v1beta1_coin_pb.Coin.serializeBinaryToWriter
    );
  }
  f = message.getTimeoutFeeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      cosmos_base_v1beta1_coin_pb.Coin.serializeBinaryToWriter
    );
  }
};


/**
 * repeated cosmos.base.v1beta1.Coin recv_fee = 1;
 * @return {!Array<!proto.cosmos.base.v1beta1.Coin>}
 */
proto.ibc.applications.fee.v1.Fee.prototype.getRecvFeeList = function() {
  return /** @type{!Array<!proto.cosmos.base.v1beta1.Coin>} */ (
    jspb.Message.getRepeatedWrapperField(this, cosmos_base_v1beta1_coin_pb.Coin, 1));
};


/**
 * @param {!Array<!proto.cosmos.base.v1beta1.Coin>} value
 * @return {!proto.ibc.applications.fee.v1.Fee} returns this
*/
proto.ibc.applications.fee.v1.Fee.prototype.setRecvFeeList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.cosmos.base.v1beta1.Coin=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.base.v1beta1.Coin}
 */
proto.ibc.applications.fee.v1.Fee.prototype.addRecvFee = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.cosmos.base.v1beta1.Coin, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ibc.applications.fee.v1.Fee} returns this
 */
proto.ibc.applications.fee.v1.Fee.prototype.clearRecvFeeList = function() {
  return this.setRecvFeeList([]);
};


/**
 * repeated cosmos.base.v1beta1.Coin ack_fee = 2;
 * @return {!Array<!proto.cosmos.base.v1beta1.Coin>}
 */
proto.ibc.applications.fee.v1.Fee.prototype.getAckFeeList = function() {
  return /** @type{!Array<!proto.cosmos.base.v1beta1.Coin>} */ (
    jspb.Message.getRepeatedWrapperField(this, cosmos_base_v1beta1_coin_pb.Coin, 2));
};


/**
 * @param {!Array<!proto.cosmos.base.v1beta1.Coin>} value
 * @return {!proto.ibc.applications.fee.v1.Fee} returns this
*/
proto.ibc.applications.fee.v1.Fee.prototype.setAckFeeList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.cosmos.base.v1beta1.Coin=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.base.v1beta1.Coin}
 */
proto.ibc.applications.fee.v1.Fee.prototype.addAckFee = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.cosmos.base.v1beta1.Coin, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ibc.applications.fee.v1.Fee} returns this
 */
proto.ibc.applications.fee.v1.Fee.prototype.clearAckFeeList = function() {
  return this.setAckFeeList([]);
};


/**
 * repeated cosmos.base.v1beta1.Coin timeout_fee = 3;
 * @return {!Array<!proto.cosmos.base.v1beta1.Coin>}
 */
proto.ibc.applications.fee.v1.Fee.prototype.getTimeoutFeeList = function() {
  return /** @type{!Array<!proto.cosmos.base.v1beta1.Coin>} */ (
    jspb.Message.getRepeatedWrapperField(this, cosmos_base_v1beta1_coin_pb.Coin, 3));
};


/**
 * @param {!Array<!proto.cosmos.base.v1beta1.Coin>} value
 * @return {!proto.ibc.applications.fee.v1.Fee} returns this
*/
proto.ibc.applications.fee.v1.Fee.prototype.setTimeoutFeeList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.cosmos.base.v1beta1.Coin=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.base.v1beta1.Coin}
 */
proto.ibc.applications.fee.v1.Fee.prototype.addTimeoutFee = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.cosmos.base.v1beta1.Coin, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ibc.applications.fee.v1.Fee} returns this
 */
proto.ibc.applications.fee.v1.Fee.prototype.clearTimeoutFeeList = function() {
  return this.setTimeoutFeeList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ibc.applications.fee.v1.PacketFee.repeatedFields_ = [3];



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
proto.ibc.applications.fee.v1.PacketFee.prototype.toObject = function(opt_includeInstance) {
  return proto.ibc.applications.fee.v1.PacketFee.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ibc.applications.fee.v1.PacketFee} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ibc.applications.fee.v1.PacketFee.toObject = function(includeInstance, msg) {
  var f, obj = {
    fee: (f = msg.getFee()) && proto.ibc.applications.fee.v1.Fee.toObject(includeInstance, f),
    refundAddress: jspb.Message.getFieldWithDefault(msg, 2, ""),
    relayersList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.ibc.applications.fee.v1.PacketFee}
 */
proto.ibc.applications.fee.v1.PacketFee.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ibc.applications.fee.v1.PacketFee;
  return proto.ibc.applications.fee.v1.PacketFee.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ibc.applications.fee.v1.PacketFee} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ibc.applications.fee.v1.PacketFee}
 */
proto.ibc.applications.fee.v1.PacketFee.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ibc.applications.fee.v1.Fee;
      reader.readMessage(value,proto.ibc.applications.fee.v1.Fee.deserializeBinaryFromReader);
      msg.setFee(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefundAddress(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addRelayers(value);
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
proto.ibc.applications.fee.v1.PacketFee.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ibc.applications.fee.v1.PacketFee.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ibc.applications.fee.v1.PacketFee} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ibc.applications.fee.v1.PacketFee.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFee();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ibc.applications.fee.v1.Fee.serializeBinaryToWriter
    );
  }
  f = message.getRefundAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRelayersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional Fee fee = 1;
 * @return {?proto.ibc.applications.fee.v1.Fee}
 */
proto.ibc.applications.fee.v1.PacketFee.prototype.getFee = function() {
  return /** @type{?proto.ibc.applications.fee.v1.Fee} */ (
    jspb.Message.getWrapperField(this, proto.ibc.applications.fee.v1.Fee, 1));
};


/**
 * @param {?proto.ibc.applications.fee.v1.Fee|undefined} value
 * @return {!proto.ibc.applications.fee.v1.PacketFee} returns this
*/
proto.ibc.applications.fee.v1.PacketFee.prototype.setFee = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ibc.applications.fee.v1.PacketFee} returns this
 */
proto.ibc.applications.fee.v1.PacketFee.prototype.clearFee = function() {
  return this.setFee(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ibc.applications.fee.v1.PacketFee.prototype.hasFee = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string refund_address = 2;
 * @return {string}
 */
proto.ibc.applications.fee.v1.PacketFee.prototype.getRefundAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ibc.applications.fee.v1.PacketFee} returns this
 */
proto.ibc.applications.fee.v1.PacketFee.prototype.setRefundAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string relayers = 3;
 * @return {!Array<string>}
 */
proto.ibc.applications.fee.v1.PacketFee.prototype.getRelayersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ibc.applications.fee.v1.PacketFee} returns this
 */
proto.ibc.applications.fee.v1.PacketFee.prototype.setRelayersList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ibc.applications.fee.v1.PacketFee} returns this
 */
proto.ibc.applications.fee.v1.PacketFee.prototype.addRelayers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ibc.applications.fee.v1.PacketFee} returns this
 */
proto.ibc.applications.fee.v1.PacketFee.prototype.clearRelayersList = function() {
  return this.setRelayersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ibc.applications.fee.v1.PacketFees.repeatedFields_ = [1];



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
proto.ibc.applications.fee.v1.PacketFees.prototype.toObject = function(opt_includeInstance) {
  return proto.ibc.applications.fee.v1.PacketFees.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ibc.applications.fee.v1.PacketFees} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ibc.applications.fee.v1.PacketFees.toObject = function(includeInstance, msg) {
  var f, obj = {
    packetFeesList: jspb.Message.toObjectList(msg.getPacketFeesList(),
    proto.ibc.applications.fee.v1.PacketFee.toObject, includeInstance)
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
 * @return {!proto.ibc.applications.fee.v1.PacketFees}
 */
proto.ibc.applications.fee.v1.PacketFees.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ibc.applications.fee.v1.PacketFees;
  return proto.ibc.applications.fee.v1.PacketFees.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ibc.applications.fee.v1.PacketFees} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ibc.applications.fee.v1.PacketFees}
 */
proto.ibc.applications.fee.v1.PacketFees.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ibc.applications.fee.v1.PacketFee;
      reader.readMessage(value,proto.ibc.applications.fee.v1.PacketFee.deserializeBinaryFromReader);
      msg.addPacketFees(value);
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
proto.ibc.applications.fee.v1.PacketFees.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ibc.applications.fee.v1.PacketFees.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ibc.applications.fee.v1.PacketFees} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ibc.applications.fee.v1.PacketFees.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPacketFeesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ibc.applications.fee.v1.PacketFee.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PacketFee packet_fees = 1;
 * @return {!Array<!proto.ibc.applications.fee.v1.PacketFee>}
 */
proto.ibc.applications.fee.v1.PacketFees.prototype.getPacketFeesList = function() {
  return /** @type{!Array<!proto.ibc.applications.fee.v1.PacketFee>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ibc.applications.fee.v1.PacketFee, 1));
};


/**
 * @param {!Array<!proto.ibc.applications.fee.v1.PacketFee>} value
 * @return {!proto.ibc.applications.fee.v1.PacketFees} returns this
*/
proto.ibc.applications.fee.v1.PacketFees.prototype.setPacketFeesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ibc.applications.fee.v1.PacketFee=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ibc.applications.fee.v1.PacketFee}
 */
proto.ibc.applications.fee.v1.PacketFees.prototype.addPacketFees = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ibc.applications.fee.v1.PacketFee, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ibc.applications.fee.v1.PacketFees} returns this
 */
proto.ibc.applications.fee.v1.PacketFees.prototype.clearPacketFeesList = function() {
  return this.setPacketFeesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ibc.applications.fee.v1.IdentifiedPacketFees.repeatedFields_ = [2];



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
proto.ibc.applications.fee.v1.IdentifiedPacketFees.prototype.toObject = function(opt_includeInstance) {
  return proto.ibc.applications.fee.v1.IdentifiedPacketFees.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ibc.applications.fee.v1.IdentifiedPacketFees} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ibc.applications.fee.v1.IdentifiedPacketFees.toObject = function(includeInstance, msg) {
  var f, obj = {
    packetId: (f = msg.getPacketId()) && ibc_core_channel_v1_channel_pb.PacketId.toObject(includeInstance, f),
    packetFeesList: jspb.Message.toObjectList(msg.getPacketFeesList(),
    proto.ibc.applications.fee.v1.PacketFee.toObject, includeInstance)
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
 * @return {!proto.ibc.applications.fee.v1.IdentifiedPacketFees}
 */
proto.ibc.applications.fee.v1.IdentifiedPacketFees.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ibc.applications.fee.v1.IdentifiedPacketFees;
  return proto.ibc.applications.fee.v1.IdentifiedPacketFees.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ibc.applications.fee.v1.IdentifiedPacketFees} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ibc.applications.fee.v1.IdentifiedPacketFees}
 */
proto.ibc.applications.fee.v1.IdentifiedPacketFees.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new ibc_core_channel_v1_channel_pb.PacketId;
      reader.readMessage(value,ibc_core_channel_v1_channel_pb.PacketId.deserializeBinaryFromReader);
      msg.setPacketId(value);
      break;
    case 2:
      var value = new proto.ibc.applications.fee.v1.PacketFee;
      reader.readMessage(value,proto.ibc.applications.fee.v1.PacketFee.deserializeBinaryFromReader);
      msg.addPacketFees(value);
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
proto.ibc.applications.fee.v1.IdentifiedPacketFees.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ibc.applications.fee.v1.IdentifiedPacketFees.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ibc.applications.fee.v1.IdentifiedPacketFees} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ibc.applications.fee.v1.IdentifiedPacketFees.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPacketId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      ibc_core_channel_v1_channel_pb.PacketId.serializeBinaryToWriter
    );
  }
  f = message.getPacketFeesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.ibc.applications.fee.v1.PacketFee.serializeBinaryToWriter
    );
  }
};


/**
 * optional ibc.core.channel.v1.PacketId packet_id = 1;
 * @return {?proto.ibc.core.channel.v1.PacketId}
 */
proto.ibc.applications.fee.v1.IdentifiedPacketFees.prototype.getPacketId = function() {
  return /** @type{?proto.ibc.core.channel.v1.PacketId} */ (
    jspb.Message.getWrapperField(this, ibc_core_channel_v1_channel_pb.PacketId, 1));
};


/**
 * @param {?proto.ibc.core.channel.v1.PacketId|undefined} value
 * @return {!proto.ibc.applications.fee.v1.IdentifiedPacketFees} returns this
*/
proto.ibc.applications.fee.v1.IdentifiedPacketFees.prototype.setPacketId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ibc.applications.fee.v1.IdentifiedPacketFees} returns this
 */
proto.ibc.applications.fee.v1.IdentifiedPacketFees.prototype.clearPacketId = function() {
  return this.setPacketId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ibc.applications.fee.v1.IdentifiedPacketFees.prototype.hasPacketId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated PacketFee packet_fees = 2;
 * @return {!Array<!proto.ibc.applications.fee.v1.PacketFee>}
 */
proto.ibc.applications.fee.v1.IdentifiedPacketFees.prototype.getPacketFeesList = function() {
  return /** @type{!Array<!proto.ibc.applications.fee.v1.PacketFee>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ibc.applications.fee.v1.PacketFee, 2));
};


/**
 * @param {!Array<!proto.ibc.applications.fee.v1.PacketFee>} value
 * @return {!proto.ibc.applications.fee.v1.IdentifiedPacketFees} returns this
*/
proto.ibc.applications.fee.v1.IdentifiedPacketFees.prototype.setPacketFeesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.ibc.applications.fee.v1.PacketFee=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ibc.applications.fee.v1.PacketFee}
 */
proto.ibc.applications.fee.v1.IdentifiedPacketFees.prototype.addPacketFees = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.ibc.applications.fee.v1.PacketFee, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ibc.applications.fee.v1.IdentifiedPacketFees} returns this
 */
proto.ibc.applications.fee.v1.IdentifiedPacketFees.prototype.clearPacketFeesList = function() {
  return this.setPacketFeesList([]);
};


goog.object.extend(exports, proto.ibc.applications.fee.v1);
