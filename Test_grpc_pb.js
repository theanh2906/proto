// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var proto_Test_pb = require('../proto/Test_pb.js');

function serialize_backend_HelloReply(arg) {
  if (!(arg instanceof proto_Test_pb.HelloReply)) {
    throw new Error('Expected argument of type backend.HelloReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_backend_HelloReply(buffer_arg) {
  return proto_Test_pb.HelloReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_backend_HelloRequest(arg) {
  if (!(arg instanceof proto_Test_pb.HelloRequest)) {
    throw new Error('Expected argument of type backend.HelloRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_backend_HelloRequest(buffer_arg) {
  return proto_Test_pb.HelloRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var GreeterServiceService = exports.GreeterServiceService = {
  // Sends a greeting
sayHello: {
    path: '/backend.GreeterService/SayHello',
    requestStream: false,
    responseStream: false,
    requestType: proto_Test_pb.HelloRequest,
    responseType: proto_Test_pb.HelloReply,
    requestSerialize: serialize_backend_HelloRequest,
    requestDeserialize: deserialize_backend_HelloRequest,
    responseSerialize: serialize_backend_HelloReply,
    responseDeserialize: deserialize_backend_HelloReply,
  },
};

exports.GreeterServiceClient = grpc.makeGenericClientConstructor(GreeterServiceService);
