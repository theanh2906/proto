// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var proto_Monitor_pb = require('../proto/Monitor_pb.js');

function serialize_backend_MonitorRequest(arg) {
  if (!(arg instanceof proto_Monitor_pb.MonitorRequest)) {
    throw new Error('Expected argument of type backend.MonitorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_backend_MonitorRequest(buffer_arg) {
  return proto_Monitor_pb.MonitorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_backend_MonitorResponse(arg) {
  if (!(arg instanceof proto_Monitor_pb.MonitorResponse)) {
    throw new Error('Expected argument of type backend.MonitorResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_backend_MonitorResponse(buffer_arg) {
  return proto_Monitor_pb.MonitorResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var MonitorServiceService = exports.MonitorServiceService = {
  getSystemInfo: {
    path: '/backend.MonitorService/GetSystemInfo',
    requestStream: false,
    responseStream: false,
    requestType: proto_Monitor_pb.MonitorRequest,
    responseType: proto_Monitor_pb.MonitorResponse,
    requestSerialize: serialize_backend_MonitorRequest,
    requestDeserialize: deserialize_backend_MonitorRequest,
    responseSerialize: serialize_backend_MonitorResponse,
    responseDeserialize: deserialize_backend_MonitorResponse,
  },
};

exports.MonitorServiceClient = grpc.makeGenericClientConstructor(MonitorServiceService);
