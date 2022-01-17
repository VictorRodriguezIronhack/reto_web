const { gql } = require("apollo-server");

// Schema
const typeDefs = gql`
  type Usuario {
    id: ID
    nombre: String
    apellido: String
    email: String
    creado: String
  }

  type Token {
    token: String
  }

  type Producto {
    id: ID
    name: String
    manufacturer: String
    description: String
    color: String
    price: Float
    imageFileName: String
    screen: String
    processor: String
    ram: Int
  }
  type Pedido {
    id: ID
    producto:ID!
    quantity: Int!
    user: ID!
  }
  input PedidoInput {
    producto:ID!
    quantity: Int!
    user:ID!
  }
  input UsuarioInput {
    nombre: String!
    apellido: String!
    email: String!
    password: String!
  }

  input AutenticarInput {
    email: String!
    password: String!
  }

  input ProductoInput {
    name: String!
    manufacturer: String!
    description: String!
    color: String!
    price: Float!
    imageFileName: String!
    screen: String!
    processor: String!
    ram: Int!
  }

  type Query {
    #Usuarios
    obtenerUsuario: Usuario

    # Productos
    obtenerProductos: [Producto]
    obtenerProducto(id: ID!): Producto

    # Busquedas Avanzadas
    buscarProducto(texto: String!): [Producto]

    #Pedidos 
    obtenerPedidosDeUsuario (id:ID) : [Pedido]
  }

  type Mutation {
    # Usuarios
    nuevoUsuario(input: UsuarioInput): Usuario
    autenticarUsuario(input: AutenticarInput): Token

    # Productos
    nuevoProducto(input: ProductoInput): Producto
    actualizarProducto(id: ID!, input: ProductoInput): Producto
    eliminarProducto(id: ID!): String

    #Pedidos 
    nuevoPedido (input : PedidoInput) : Pedido
    actualizarPedido (id:ID!, input: PedidoInput) : Pedido
  }
`;

module.exports = typeDefs;
