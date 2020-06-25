'use strict'

// map our roles to our capabilities

module.exports = {
  user: ['read'],
  admin: ['read', 'create', 'update', 'delete'],
  editor: ['read', 'update', 'delete'],
  write: ['read', 'create']
}