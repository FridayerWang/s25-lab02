import { Shape } from './shapes/shape.js'
import { newRectangle } from './shapes/rectangle.js'
import { newSquare } from './shapes/square.js'
import { newCircle } from './shapes/circle.js'

import { newRenderer } from './renderer.js'

const shape1: Shape = newRectangle(2, 3)
const shape2: Shape = newSquare(4)
const shape3: Shape = newCircle(1)

const renderer1 = newRenderer(shape1)
const renderer2 = newRenderer(shape2)
const renderer3 = newRenderer(shape3)

renderer1.draw() // Rectangle
renderer2.draw() // Square
renderer3.draw() // Circle
