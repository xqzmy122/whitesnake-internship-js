class Cuboid {
  constructor(length, width, height) {
    this.length = length
    this.width = width
    this.height = height
  }

  getSurfaceArea() {
    return this.length * this.width
  }

  getVolume() {
    return this.getSurfaceArea() * this.height
  }
}

class Cube extends Cuboid{
  constructor(length) {
    super(length, length, length)
  }
}