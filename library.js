// Fluxions WebGL Library
// Copyright (c) 2017 - 2018 Jonathan Metzgar
// All Rights Reserved.
//
// MIT License
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
//
/// <reference path="GTE.ts" />
var Vector2 = /** @class */ (function () {
    function Vector2(x, y) {
        if (x === void 0) { x = 0.0; }
        if (y === void 0) { y = 0.0; }
        this.x = x;
        this.y = y;
    }
    Vector2.prototype.copy = function (v) {
        this.x = v.x;
        this.y = v.y;
        return this;
    };
    Vector2.prototype.reset = function (x, y) {
        this.x = x;
        this.y = y;
        return this;
    };
    Vector2.prototype.add = function (v) {
        return new Vector2(this.x + v.x, this.y + v.y);
    };
    Vector2.prototype.sub = function (v) {
        return new Vector2(this.x - v.x, this.y - v.y);
    };
    Vector2.prototype.mul = function (multiplicand) {
        return new Vector2(this.x * multiplicand, this.y * multiplicand);
    };
    // returns 0 if denominator is 0
    Vector2.prototype.div = function (divisor) {
        if (divisor == 0.0)
            return new Vector2();
        return new Vector2(this.x / divisor, this.y / divisor);
    };
    Vector2.prototype.toFloat32Array = function () {
        return new Float32Array([this.x, this.y]);
    };
    Vector2.prototype.toVector2 = function () {
        return new Vector2(this.x, this.y);
    };
    Vector2.prototype.toVector3 = function () {
        return new Vector3(this.x, this.y, 0.0);
    };
    Vector2.prototype.toVector4 = function () {
        return new Vector4(this.x, this.y, 0.0, 0.0);
    };
    Vector2.prototype.project = function () {
        return this.x / this.y;
    };
    Vector2.prototype.length = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    Vector2.prototype.lengthSquared = function () {
        return this.x * this.x + this.y * this.y;
    };
    Vector2.prototype.norm = function () {
        var len = this.lengthSquared();
        if (len == 0.0)
            return new Vector2();
        else
            len = Math.sqrt(len);
        return new Vector2(this.x / len, this.y / len);
    };
    Vector2.dot = function (v1, v2) {
        return v1.x * v2.x + v1.y * v2.y;
    };
    Vector2.cross = function (a, b) {
        return a.x * b.y - a.y * b.x;
    };
    Vector2.normalize = function (v) {
        var len = v.length();
        if (len == 0.0) {
            v.reset(0.0, 0.0);
        }
        else {
            v.x /= len;
            v.y /= len;
        }
        return v;
    };
    return Vector2;
}());
// Fluxions WebGL Library
// Copyright (c) 2017 - 2018 Jonathan Metzgar
// All Rights Reserved.
//
// MIT License
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
//
/// <reference path="./GTE.ts" />
var Vector3 = /** @class */ (function () {
    function Vector3(x, y, z) {
        if (x === void 0) { x = 0.0; }
        if (y === void 0) { y = 0.0; }
        if (z === void 0) { z = 0.0; }
        this.x = x;
        this.y = y;
        this.z = z;
    }
    Vector3.prototype.copy = function (v) {
        this.x = v.x;
        this.y = v.y;
        this.z = v.z;
        return this;
    };
    Vector3.prototype.reset = function (x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        return this;
    };
    Vector3.make = function (x, y, z) {
        return new Vector3(x, y, z);
    };
    Vector3.makeUnit = function (x, y, z) {
        return (new Vector3(x, y, z)).norm();
    };
    Vector3.prototype.add = function (v) {
        return new Vector3(this.x + v.x, this.y + v.y, this.z + v.z);
    };
    Vector3.prototype.sub = function (v) {
        return new Vector3(this.x - v.x, this.y - v.y, this.z - v.z);
    };
    Vector3.prototype.mul = function (multiplicand) {
        return new Vector3(this.x * multiplicand, this.y * multiplicand, this.z * multiplicand);
    };
    // returns 0 if denominator is 0
    Vector3.prototype.div = function (divisor) {
        if (divisor == 0.0)
            return new Vector3();
        return new Vector3(this.x / divisor, this.y / divisor, this.z / divisor);
    };
    Vector3.prototype.toArray = function () {
        return [this.x, this.y, this.z];
    };
    Vector3.prototype.toFloat32Array = function () {
        return new Float32Array([this.x, this.y, this.z]);
    };
    Vector3.prototype.toVector2 = function () {
        return new Vector2(this.x, this.y);
    };
    Vector3.prototype.toVector4 = function (w) {
        return new Vector4(this.x, this.y, this.z, w);
    };
    Vector3.prototype.project = function () {
        return new Vector2(this.x / this.z, this.y / this.z);
    };
    Vector3.prototype.length = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    };
    Vector3.prototype.lengthSquared = function () {
        return this.x * this.x + this.y * this.y + this.z * this.z;
    };
    Vector3.prototype.norm = function () {
        var len = this.lengthSquared();
        if (len == 0.0)
            return new Vector3();
        else
            len = Math.sqrt(len);
        return new Vector3(this.x / len, this.y / len, this.z / len);
    };
    Vector3.dot = function (v1, v2) {
        return v1.x * v2.x + v1.y * v2.y + v1.x * v2.y;
    };
    Vector3.cross = function (a, b) {
        return new Vector3(a.y * b.z - b.y * a.z, a.z * b.x - b.z * a.x, a.x * b.y - b.x * a.y);
    };
    Vector3.add = function (a, b) {
        return new Vector3(a.x + b.x, a.y + b.y, a.z + b.z);
    };
    Vector3.sub = function (a, b) {
        return new Vector3(a.x - b.x, a.y - b.y, a.z - b.z);
    };
    Vector3.mul = function (a, b) {
        return new Vector3(a.x * b.x, a.y * b.y, a.z * b.z);
    };
    Vector3.div = function (a, b) {
        return new Vector3(a.x / b.x, a.y / b.y, a.z / b.z);
    };
    return Vector3;
}());
// Fluxions WebGL Library
// Copyright (c) 2017 - 2018 Jonathan Metzgar
// All Rights Reserved.
//
// MIT License
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
//
/// <reference path="GTE.ts" />
var Vector4 = /** @class */ (function () {
    function Vector4(x, y, z, w) {
        if (x === void 0) { x = 0.0; }
        if (y === void 0) { y = 0.0; }
        if (z === void 0) { z = 0.0; }
        if (w === void 0) { w = 1.0; }
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }
    Vector4.prototype.copy = function (v) {
        this.x = v.x;
        this.y = v.y;
        this.z = v.z;
        this.w = v.w;
        return this;
    };
    Vector4.prototype.reset = function (x, y, z, w) {
        if (x === void 0) { x = 0.0; }
        if (y === void 0) { y = 0.0; }
        if (z === void 0) { z = 0.0; }
        if (w === void 0) { w = 1.0; }
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
        return this;
    };
    Vector4.prototype.add = function (v) {
        return new Vector4(this.x + v.x, this.y + v.y, this.z + v.z, this.w + v.w);
    };
    Vector4.prototype.sub = function (v) {
        return new Vector4(this.x - v.x, this.y - v.y, this.z - v.z, this.w - v.w);
    };
    Vector4.prototype.mul = function (multiplicand) {
        return new Vector4(this.x * multiplicand, this.y * multiplicand, this.z * multiplicand, this.w * multiplicand);
    };
    // returns 0 if denominator is 0
    Vector4.prototype.div = function (divisor) {
        if (divisor == 0.0)
            return new Vector4();
        return new Vector4(this.x / divisor, this.y / divisor, this.z / divisor, this.w / divisor);
    };
    Vector4.prototype.toFloat32Array = function () {
        return new Float32Array([this.x, this.y, this.z, this.w]);
    };
    Vector4.prototype.toArray = function () {
        return [this.x, this.y, this.z, this.w];
    };
    Vector4.prototype.toVector2 = function () {
        return new Vector2(this.x, this.y);
    };
    Vector4.prototype.toVector3 = function () {
        return new Vector3(this.x, this.y, this.z);
    };
    Vector4.prototype.project = function () {
        return new Vector3(this.x / this.w, this.y / this.w, this.z / this.w);
    };
    Vector4.prototype.length = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    };
    Vector4.prototype.lengthSquared = function () {
        return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
    };
    Vector4.prototype.norm = function () {
        var len = this.lengthSquared();
        if (len == 0.0)
            return new Vector4();
        else
            len = Math.sqrt(len);
        return new Vector4(this.x / len, this.y / len, this.z / len, this.w / len);
    };
    Vector4.dot = function (v1, v2) {
        return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z + v1.w * v2.w;
    };
    Vector4.normalize = function (v) {
        var len = v.length();
        if (len == 0.0) {
            v.reset(0.0, 0.0, 0.0, 0.0);
        }
        else {
            v.x /= len;
            v.y /= len;
            v.z /= len;
            v.w /= len;
        }
        return v;
    };
    return Vector4;
}());
// Fluxions WebGL Library
// Copyright (c) 2017 - 2018 Jonathan Metzgar
// All Rights Reserved.
//
// MIT License
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
//
/// <reference path="GTE.ts" />
var Matrix2 = /** @class */ (function () {
    function Matrix2(m11, m21, m12, m22) {
        this.m11 = m11;
        this.m21 = m21;
        this.m12 = m12;
        this.m22 = m22;
    }
    Matrix2.makeIdentity = function () {
        return new Matrix2(1, 0, 0, 1);
    };
    Matrix2.makeZero = function () {
        return new Matrix2(0, 0, 0, 0);
    };
    Matrix2.makeColMajor = function (m11, m21, m12, m22) {
        return new Matrix2(m11, m21, m12, m22);
    };
    Matrix2.makeRowMajor = function (m11, m12, m21, m22) {
        return new Matrix2(m11, m21, m12, m22);
    };
    Matrix2.fromRowMajorArray = function (v) {
        if (v.length >= 4)
            return new Matrix2(v[0], v[2], v[1], v[3]);
        return new Matrix2(0, 0, 0, 0);
    };
    Matrix2.fromColMajorArray = function (v) {
        if (v.length >= 4)
            return new Matrix2(v[0], v[1], v[2], v[3]);
        return new Matrix2(0, 0, 0, 0);
    };
    Matrix2.makeScale = function (x, y) {
        return Matrix2.makeRowMajor(x, 0, 0, y);
    };
    Matrix2.makeRotation = function (angleInDegrees, x, y, z) {
        var c = Math.cos(angleInDegrees * Math.PI / 180.0);
        var s = Math.sin(angleInDegrees * Math.PI / 180.0);
        return Matrix2.makeRowMajor(c, -s, s, c);
    };
    Matrix2.prototype.asColMajorArray = function () {
        return [
            this.m11, this.m21,
            this.m12, this.m22
        ];
    };
    Matrix2.prototype.asRowMajorArray = function () {
        return [
            this.m11, this.m12,
            this.m21, this.m22
        ];
    };
    Matrix2.multiply = function (m1, m2) {
        return new Matrix2(m1.m11 * m2.m11 + m1.m21 * m2.m12, m1.m11 * m2.m21 + m1.m21 * m2.m22, m1.m12 * m2.m11 + m1.m22 * m2.m12, m1.m12 * m2.m21 + m1.m22 * m2.m22);
    };
    Matrix2.prototype.copy = function (m) {
        this.m11 = m.m11;
        this.m21 = m.m21;
        this.m12 = m.m12;
        this.m22 = m.m22;
        return this;
    };
    Matrix2.prototype.concat = function (m) {
        this.copy(Matrix2.multiply(this, m));
        return this;
    };
    Matrix2.prototype.transform = function (v) {
        return new Vector2(this.m11 * v.x + this.m12 * v.y, this.m21 * v.x + this.m22 * v.y);
    };
    Matrix2.prototype.asInverse = function () {
        var tmpD = 1.0 / (this.m11 * this.m22 - this.m12 * this.m21);
        return Matrix2.makeRowMajor(this.m22 * tmpD, -this.m12 * tmpD, -this.m21 * tmpD, this.m11 * tmpD);
    };
    Matrix2.prototype.asTranspose = function () {
        return Matrix2.makeRowMajor(this.m11, this.m21, this.m12, this.m22);
    };
    return Matrix2;
}()); // class Matrix2
// Fluxions WebGL Library
// Copyright (c) 2017 - 2018 Jonathan Metzgar
// All Rights Reserved.
//
// MIT License
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
//
/// <reference path="GTE.ts"/>
var Matrix3 = /** @class */ (function () {
    function Matrix3(m11, m21, m31, m12, m22, m32, m13, m23, m33) {
        this.m11 = m11;
        this.m21 = m21;
        this.m31 = m31;
        this.m12 = m12;
        this.m22 = m22;
        this.m32 = m32;
        this.m13 = m13;
        this.m23 = m23;
        this.m33 = m33;
    }
    Matrix3.makeIdentity = function () {
        return new Matrix3(1, 0, 0, 0, 1, 0, 0, 0, 1);
    };
    Matrix3.makeZero = function () {
        return new Matrix3(0, 0, 0, 0, 0, 0, 0, 0, 0);
    };
    Matrix3.makeColMajor = function (m11, m21, m31, m12, m22, m32, m13, m23, m33) {
        return new Matrix3(m11, m21, m31, m12, m22, m32, m13, m23, m33);
    };
    Matrix3.makeRowMajor = function (m11, m12, m13, m21, m22, m23, m31, m32, m33) {
        return new Matrix3(m11, m21, m31, m12, m22, m32, m13, m23, m33);
    };
    Matrix3.fromRowMajorArray = function (v) {
        if (v.length >= 9)
            return new Matrix3(v[0], v[3], v[6], v[1], v[4], v[7], v[2], v[5], v[8]);
        return new Matrix3(0, 0, 0, 0, 0, 0, 0, 0, 0);
    };
    Matrix3.fromColMajorArray = function (v) {
        if (v.length >= 9)
            return new Matrix3(v[0], v[1], v[2], v[3], v[4], v[5], v[6], v[7], v[8]);
        return new Matrix3(0, 0, 0, 0, 0, 0, 0, 0, 0);
    };
    Matrix3.makeScale = function (x, y, z) {
        return Matrix3.makeRowMajor(x, 0, 0, 0, y, 0, 0, 0, z);
    };
    Matrix3.makeRotation = function (angleInDegrees, x, y, z) {
        var c = Math.cos(angleInDegrees * Math.PI / 180.0);
        var s = Math.sin(angleInDegrees * Math.PI / 180.0);
        var invLength = 1.0 / Math.sqrt(x * x + y * y + z * z);
        x *= invLength;
        y *= invLength;
        z *= invLength;
        return Matrix3.makeRowMajor(x * x * (1 - c) + c, x * y * (1 - c) - z * s, x * z * (1 - c) + y * s, y * x * (1 - c) + z * s, y * y * (1 - c) + c, y * z * (1 - c) - x * s, x * z * (1 - c) - y * s, y * z * (1 - c) + x * s, z * z * (1 - c) + c);
    };
    Matrix3.makeCubeFaceMatrix = function (face) {
        // +X
        if (face == 0)
            return Matrix3.makeRotation(90.0, 0.0, 1.0, 0.0);
        // -X
        if (face == 1)
            return Matrix3.makeRotation(270.0, 0.0, 1.0, 0.0);
        // +Y
        if (face == 2)
            return Matrix3.makeRotation(90.0, 1.0, 0.0, 0.0);
        // -Y
        if (face == 3)
            return Matrix3.makeRotation(270.0, 1.0, 0.0, 0.0);
        // +Z
        if (face == 4)
            return Matrix3.makeIdentity();
        // -Z
        if (face == 5)
            return Matrix3.makeRotation(180.0, 0.0, 1.0, 0.0);
        return new Matrix3(0, 0, 0, 0, 0, 0, 0, 0, 0);
    };
    Matrix3.prototype.asColMajorArray = function () {
        return [
            this.m11, this.m21, this.m31,
            this.m12, this.m22, this.m32,
            this.m13, this.m23, this.m33
        ];
    };
    Matrix3.prototype.asRowMajorArray = function () {
        return [
            this.m11, this.m12, this.m13,
            this.m21, this.m22, this.m23,
            this.m31, this.m32, this.m33
        ];
    };
    Matrix3.multiply = function (m1, m2) {
        return new Matrix3(m1.m11 * m2.m11 + m1.m21 * m2.m12 + m1.m31 * m2.m13, m1.m11 * m2.m21 + m1.m21 * m2.m22 + m1.m31 * m2.m23, m1.m11 * m2.m31 + m1.m21 * m2.m32 + m1.m31 * m2.m33, m1.m12 * m2.m11 + m1.m22 * m2.m12 + m1.m32 * m2.m13, m1.m12 * m2.m21 + m1.m22 * m2.m22 + m1.m32 * m2.m23, m1.m12 * m2.m31 + m1.m22 * m2.m32 + m1.m32 * m2.m33, m1.m13 * m2.m11 + m1.m23 * m2.m12 + m1.m33 * m2.m13, m1.m13 * m2.m21 + m1.m23 * m2.m22 + m1.m33 * m2.m23, m1.m13 * m2.m31 + m1.m23 * m2.m32 + m1.m33 * m2.m33);
    };
    Matrix3.prototype.copy = function (m) {
        this.m11 = m.m11;
        this.m21 = m.m21;
        this.m31 = m.m31;
        this.m12 = m.m12;
        this.m22 = m.m22;
        this.m32 = m.m32;
        this.m13 = m.m13;
        this.m23 = m.m23;
        this.m33 = m.m33;
        return this;
    };
    Matrix3.prototype.concat = function (m) {
        this.copy(Matrix3.multiply(this, m));
        return this;
    };
    Matrix3.prototype.transform = function (v) {
        return new Vector3(this.m11 * v.x + this.m12 * v.y + this.m13 * v.z, this.m21 * v.x + this.m22 * v.y + this.m23 * v.z, this.m31 * v.x + this.m32 * v.y + this.m33 * v.z);
    };
    Matrix3.prototype.asInverse = function () {
        var tmpA = this.m22 * this.m33 - this.m23 * this.m32;
        var tmpB = this.m21 * this.m32 - this.m22 * this.m31;
        var tmpC = this.m23 * this.m31 - this.m21 * this.m33;
        var tmpD = 1.0 / (this.m11 * tmpA + this.m12 * tmpC + this.m13 * tmpB);
        return new Matrix3(tmpA * tmpD, (this.m13 * this.m32 - this.m12 * this.m33) * tmpD, (this.m12 * this.m23 - this.m13 * this.m22) * tmpD, tmpC * tmpD, (this.m11 * this.m33 - this.m13 * this.m31) * tmpD, (this.m13 * this.m21 - this.m11 * this.m23) * tmpD, tmpB * tmpD, (this.m12 * this.m31 - this.m11 * this.m32) * tmpD, (this.m11 * this.m22 - this.m12 * this.m21) * tmpD);
    };
    Matrix3.prototype.asTranspose = function () {
        return new Matrix3(this.m11, this.m12, this.m13, this.m21, this.m22, this.m23, this.m31, this.m32, this.m33);
    };
    return Matrix3;
}()); // class Matrix3
// Fluxions WebGL Library
// Copyright (c) 2017 - 2018 Jonathan Metzgar
// All Rights Reserved.
//
// MIT License
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
//
///<reference path="GTE.ts"/>
var Matrix4 = /** @class */ (function () {
    function Matrix4(m11, m21, m31, m41, m12, m22, m32, m42, m13, m23, m33, m43, m14, m24, m34, m44) {
        this.m11 = m11;
        this.m21 = m21;
        this.m31 = m31;
        this.m41 = m41;
        this.m12 = m12;
        this.m22 = m22;
        this.m32 = m32;
        this.m42 = m42;
        this.m13 = m13;
        this.m23 = m23;
        this.m33 = m33;
        this.m43 = m43;
        this.m14 = m14;
        this.m24 = m24;
        this.m34 = m34;
        this.m44 = m44;
    }
    Matrix4.prototype.copy = function (m) {
        return this.LoadMatrix(m);
    };
    Matrix4.prototype.LoadRowMajor = function (m11, m12, m13, m14, m21, m22, m23, m24, m31, m32, m33, m34, m41, m42, m43, m44) {
        this.m11 = m11;
        this.m12 = m12;
        this.m13 = m13;
        this.m14 = m14;
        this.m21 = m21;
        this.m22 = m22;
        this.m23 = m23;
        this.m24 = m24;
        this.m31 = m31;
        this.m32 = m32;
        this.m33 = m33;
        this.m34 = m34;
        this.m41 = m41;
        this.m42 = m42;
        this.m43 = m43;
        this.m44 = m44;
        return this;
    };
    Matrix4.prototype.LoadColMajor = function (m11, m21, m31, m41, m12, m22, m32, m42, m13, m23, m33, m43, m14, m24, m34, m44) {
        this.m11 = m11;
        this.m12 = m12;
        this.m13 = m13;
        this.m14 = m14;
        this.m21 = m21;
        this.m22 = m22;
        this.m23 = m23;
        this.m24 = m24;
        this.m31 = m31;
        this.m32 = m32;
        this.m33 = m33;
        this.m34 = m34;
        this.m41 = m41;
        this.m42 = m42;
        this.m43 = m43;
        this.m44 = m44;
        return this;
    };
    Matrix4.prototype.LoadIdentity = function () {
        return this.LoadMatrix(Matrix4.makeIdentity());
    };
    Matrix4.prototype.Translate = function (x, y, z) {
        return this.MultMatrix(Matrix4.makeTranslation(x, y, z));
    };
    Matrix4.prototype.Rotate = function (angleInDegrees, x, y, z) {
        return this.MultMatrix(Matrix4.makeRotation(angleInDegrees, x, y, z));
    };
    Matrix4.prototype.Scale = function (sx, sy, sz) {
        return this.MultMatrix(Matrix4.makeScale(sx, sy, sz));
    };
    Matrix4.prototype.LookAt = function (eye, center, up) {
        return this.MultMatrix(Matrix4.makeLookAt(eye, center, up));
    };
    Matrix4.prototype.Frustum = function (left, right, bottom, top, near, far) {
        return this.MultMatrix(Matrix4.makeFrustum(left, right, bottom, top, near, far));
    };
    Matrix4.prototype.Ortho = function (left, right, bottom, top, near, far) {
        return this.MultMatrix(Matrix4.makeOrtho(left, right, bottom, top, near, far));
    };
    Matrix4.prototype.Ortho2D = function (left, right, bottom, top) {
        return this.MultMatrix(Matrix4.makeOrtho2D(left, right, bottom, top));
    };
    Matrix4.prototype.PerspectiveX = function (fovx, aspect, near, far) {
        return this.MultMatrix(Matrix4.makePerspectiveX(fovx, aspect, near, far));
    };
    Matrix4.prototype.PerspectiveY = function (fovy, aspect, near, far) {
        return this.MultMatrix(Matrix4.makePerspectiveY(fovy, aspect, near, far));
    };
    Matrix4.prototype.ShadowBias = function () {
        return this.MultMatrix(Matrix4.makeShadowBias());
    };
    Matrix4.prototype.CubeFaceMatrix = function (face) {
        return this.MultMatrix(Matrix4.makeCubeFaceMatrix(face));
    };
    Matrix4.makeIdentity = function () {
        return new Matrix4(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    };
    Matrix4.makeZero = function () {
        return new Matrix4(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    };
    Matrix4.makeColMajor = function (m11, m21, m31, m41, m12, m22, m32, m42, m13, m23, m33, m43, m14, m24, m34, m44) {
        return new Matrix4(m11, m21, m31, m41, m12, m22, m32, m42, m13, m23, m33, m43, m14, m24, m34, m44);
    };
    Matrix4.makeRowMajor = function (m11, m12, m13, m14, m21, m22, m23, m24, m31, m32, m33, m34, m41, m42, m43, m44) {
        return new Matrix4(m11, m21, m31, m41, m12, m22, m32, m42, m13, m23, m33, m43, m14, m24, m34, m44);
    };
    Matrix4.fromRowMajorArray = function (v) {
        if (v.length >= 16)
            return new Matrix4(v[0], v[4], v[8], v[12], v[1], v[5], v[9], v[13], v[2], v[6], v[10], v[14], v[3], v[7], v[11], v[15]);
        return new Matrix4(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    };
    Matrix4.fromColMajorArray = function (v) {
        if (v.length >= 16)
            return new Matrix4(v[0], v[1], v[2], v[3], v[4], v[5], v[6], v[7], v[8], v[9], v[10], v[11], v[12], v[13], v[14], v[15]);
        return new Matrix4(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    };
    Matrix4.makeTranslation = function (x, y, z) {
        return Matrix4.makeRowMajor(1, 0, 0, x, 0, 1, 0, y, 0, 0, 1, z, 0, 0, 0, 1);
    };
    Matrix4.makeScale = function (x, y, z) {
        return Matrix4.makeRowMajor(x, 0, 0, 0, 0, y, 0, 0, 0, 0, z, 0, 0, 0, 0, 1);
    };
    Matrix4.makeRotation = function (angleInDegrees, x, y, z) {
        var c = Math.cos(angleInDegrees * Math.PI / 180.0);
        var s = Math.sin(angleInDegrees * Math.PI / 180.0);
        var invLength = 1.0 / Math.sqrt(x * x + y * y + z * z);
        x *= invLength;
        y *= invLength;
        z *= invLength;
        return Matrix4.makeRowMajor(x * x * (1 - c) + c, x * y * (1 - c) - z * s, x * z * (1 - c) + y * s, 0.0, y * x * (1 - c) + z * s, y * y * (1 - c) + c, y * z * (1 - c) - x * s, 0.0, x * z * (1 - c) - y * s, y * z * (1 - c) + x * s, z * z * (1 - c) + c, 0.0, 0.0, 0.0, 0.0, 1.0);
    };
    Matrix4.makeOrtho = function (left, right, bottom, top, near, far) {
        var tx = -(right + left) / (right - left);
        var ty = -(top + bottom) / (top - bottom);
        var tz = -(far + near) / (far - near);
        return Matrix4.makeRowMajor(2 / (right - left), 0, 0, tx, 0, 2 / (top - bottom), 0, ty, 0, 0, -2 / (far - near), tz, 0, 0, 0, 1);
    };
    Matrix4.makeOrtho2D = function (left, right, bottom, top) {
        return Matrix4.makeOrtho(left, right, bottom, top, -1, 1);
    };
    Matrix4.makeFrustum = function (left, right, bottom, top, near, far) {
        var A = (right + left) / (right - left);
        var B = (top + bottom) / (top - bottom);
        var C = -(far + near) / (far - near);
        var D = -2 * far * near / (far - near);
        return Matrix4.makeRowMajor(2 * near / (right - left), 0, A, 0, 0, 2 * near / (top - bottom), B, 0, 0, 0, C, D, 0, 0, -1, 0);
    };
    Matrix4.makePerspectiveY = function (fovy, aspect, near, far) {
        var f = 1.0 / Math.tan(Math.PI * fovy / 360.0);
        return Matrix4.makeRowMajor(f / aspect, 0, 0, 0, 0, f, 0, 0, 0, 0, (far + near) / (near - far), 2 * far * near / (near - far), 0, 0, -1, 0);
    };
    Matrix4.makePerspectiveX = function (fovx, aspect, near, far) {
        var f = 1.0 / Math.tan(Math.PI * fovx / 360.0);
        return Matrix4.makeRowMajor(f, 0, 0, 0, 0, f * aspect, 0, 0, 0, 0, (far + near) / (near - far), 2 * far * near / (near - far), 0, 0, -1, 0);
    };
    Matrix4.makeLookAt = function (eye, center, up) {
        var F = Vector3.sub(center, eye).norm();
        var UP = up.norm();
        var S = Vector3.cross(F, UP).norm();
        var U = Vector3.cross(S, F).norm();
        return Matrix4.multiply(Matrix4.makeRowMajor(S.x, S.y, S.z, 0, U.x, U.y, U.z, 0, -F.x, -F.y, -F.z, 0, 0, 0, 0, 1), Matrix4.makeTranslation(-eye.x, -eye.y, -eye.z));
    };
    Matrix4.makeShadowBias = function () {
        return Matrix4.makeRowMajor(0.5, 0.0, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.0, 0.5, 0.5, 0.0, 0.0, 0.0, 1.0);
    };
    Matrix4.makeCubeFaceMatrix = function (face) {
        // +X
        if (face == 0)
            return Matrix4.makeRotation(90.0, 0.0, 1.0, 0.0);
        // -X
        if (face == 1)
            return Matrix4.makeRotation(270.0, 0.0, 1.0, 0.0);
        // +Y
        if (face == 2)
            return Matrix4.makeRotation(90.0, 1.0, 0.0, 0.0);
        // -Y
        if (face == 3)
            return Matrix4.makeRotation(270.0, 1.0, 0.0, 0.0);
        // +Z
        if (face == 4)
            return Matrix4.makeIdentity();
        // -Z
        if (face == 5)
            return Matrix4.makeRotation(180.0, 0.0, 1.0, 0.0);
        return new Matrix4(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    };
    Matrix4.prototype.toColMajorArray = function () {
        return [
            this.m11, this.m21, this.m31, this.m41,
            this.m12, this.m22, this.m32, this.m42,
            this.m13, this.m23, this.m33, this.m43,
            this.m14, this.m24, this.m34, this.m44
        ];
    };
    Matrix4.prototype.toRowMajorArray = function () {
        return [
            this.m11, this.m12, this.m13, this.m14,
            this.m21, this.m22, this.m23, this.m24,
            this.m31, this.m32, this.m33, this.m34,
            this.m41, this.m42, this.m43, this.m44
        ];
    };
    Matrix4.multiply = function (m1, m2) {
        return new Matrix4(m1.m11 * m2.m11 + m1.m21 * m2.m12 + m1.m31 * m2.m13 + m1.m41 * m2.m14, m1.m11 * m2.m21 + m1.m21 * m2.m22 + m1.m31 * m2.m23 + m1.m41 * m2.m24, m1.m11 * m2.m31 + m1.m21 * m2.m32 + m1.m31 * m2.m33 + m1.m41 * m2.m34, m1.m11 * m2.m41 + m1.m21 * m2.m42 + m1.m31 * m2.m43 + m1.m41 * m2.m44, m1.m12 * m2.m11 + m1.m22 * m2.m12 + m1.m32 * m2.m13 + m1.m42 * m2.m14, m1.m12 * m2.m21 + m1.m22 * m2.m22 + m1.m32 * m2.m23 + m1.m42 * m2.m24, m1.m12 * m2.m31 + m1.m22 * m2.m32 + m1.m32 * m2.m33 + m1.m42 * m2.m34, m1.m12 * m2.m41 + m1.m22 * m2.m42 + m1.m32 * m2.m43 + m1.m42 * m2.m44, m1.m13 * m2.m11 + m1.m23 * m2.m12 + m1.m33 * m2.m13 + m1.m43 * m2.m14, m1.m13 * m2.m21 + m1.m23 * m2.m22 + m1.m33 * m2.m23 + m1.m43 * m2.m24, m1.m13 * m2.m31 + m1.m23 * m2.m32 + m1.m33 * m2.m33 + m1.m43 * m2.m34, m1.m13 * m2.m41 + m1.m23 * m2.m42 + m1.m33 * m2.m43 + m1.m43 * m2.m44, m1.m14 * m2.m11 + m1.m24 * m2.m12 + m1.m34 * m2.m13 + m1.m44 * m2.m14, m1.m14 * m2.m21 + m1.m24 * m2.m22 + m1.m34 * m2.m23 + m1.m44 * m2.m24, m1.m14 * m2.m31 + m1.m24 * m2.m32 + m1.m34 * m2.m33 + m1.m44 * m2.m34, m1.m14 * m2.m41 + m1.m24 * m2.m42 + m1.m34 * m2.m43 + m1.m44 * m2.m44);
    };
    Matrix4.prototype.LoadMatrix = function (m) {
        this.m11 = m.m11;
        this.m21 = m.m21;
        this.m31 = m.m31;
        this.m41 = m.m41;
        this.m12 = m.m12;
        this.m22 = m.m22;
        this.m32 = m.m32;
        this.m42 = m.m42;
        this.m13 = m.m13;
        this.m23 = m.m23;
        this.m33 = m.m33;
        this.m43 = m.m43;
        this.m14 = m.m14;
        this.m24 = m.m24;
        this.m34 = m.m34;
        this.m44 = m.m44;
        return this;
    };
    Matrix4.prototype.MultMatrix = function (m) {
        this.LoadMatrix(Matrix4.multiply(this, m));
        return this;
    };
    Matrix4.prototype.transform = function (v) {
        return new Vector4(this.m11 * v.x + this.m12 * v.y + this.m13 * v.z + this.m14 * v.w, this.m21 * v.x + this.m22 * v.y + this.m23 * v.z + this.m24 * v.w, this.m31 * v.x + this.m32 * v.y + this.m33 * v.z + this.m34 * v.w, this.m41 * v.x + this.m42 * v.y + this.m43 * v.z + this.m44 * v.w);
    };
    Matrix4.prototype.asInverse = function () {
        var tmp1 = this.m32 * this.m43 - this.m33 * this.m42;
        var tmp2 = this.m32 * this.m44 - this.m34 * this.m42;
        var tmp3 = this.m33 * this.m44 - this.m34 * this.m43;
        var tmp4 = this.m22 * tmp3 - this.m23 * tmp2 + this.m24 * tmp1;
        var tmp5 = this.m31 * this.m42 - this.m32 * this.m41;
        var tmp6 = this.m31 * this.m43 - this.m33 * this.m41;
        var tmp7 = -this.m21 * tmp1 + this.m22 * tmp6 - this.m23 * tmp5;
        var tmp8 = this.m31 * this.m44 - this.m34 * this.m41;
        var tmp9 = this.m21 * tmp2 - this.m22 * tmp8 + this.m24 * tmp5;
        var tmp10 = -this.m21 * tmp3 + this.m23 * tmp8 - this.m24 * tmp6;
        var tmp11 = 1 / (this.m11 * tmp4 + this.m12 * tmp10 + this.m13 * tmp9 + this.m14 * tmp7);
        var tmp12 = this.m22 * this.m43 - this.m23 * this.m42;
        var tmp13 = this.m22 * this.m44 - this.m24 * this.m42;
        var tmp14 = this.m23 * this.m44 - this.m24 * this.m43;
        var tmp15 = this.m22 * this.m33 - this.m23 * this.m32;
        var tmp16 = this.m22 * this.m34 - this.m24 * this.m32;
        var tmp17 = this.m23 * this.m34 - this.m24 * this.m33;
        var tmp18 = this.m21 * this.m43 - this.m23 * this.m41;
        var tmp19 = this.m21 * this.m44 - this.m24 * this.m41;
        var tmp20 = this.m21 * this.m33 - this.m23 * this.m31;
        var tmp21 = this.m21 * this.m34 - this.m24 * this.m31;
        var tmp22 = this.m21 * this.m42 - this.m22 * this.m41;
        var tmp23 = this.m21 * this.m32 - this.m22 * this.m31;
        return new Matrix4(tmp4 * tmp11, (-this.m12 * tmp3 + this.m13 * tmp2 - this.m14 * tmp1) * tmp11, (this.m12 * tmp14 - this.m13 * tmp13 + this.m14 * tmp12) * tmp11, (-this.m12 * tmp17 + this.m13 * tmp16 - this.m14 * tmp15) * tmp11, tmp10 * tmp11, (this.m11 * tmp3 - this.m13 * tmp8 + this.m14 * tmp6) * tmp11, (-this.m11 * tmp14 + this.m13 * tmp19 - this.m14 * tmp18) * tmp11, (this.m11 * tmp17 - this.m13 * tmp21 + this.m14 * tmp20) * tmp11, tmp9 * tmp11, (-this.m11 * tmp2 + this.m12 * tmp8 - this.m14 * tmp5) * tmp11, (this.m11 * tmp13 - this.m12 * tmp19 + this.m14 * tmp22) * tmp11, (-this.m11 * tmp16 + this.m12 * tmp21 - this.m14 * tmp23) * tmp11, tmp7 * tmp11, (this.m11 * tmp1 - this.m12 * tmp6 + this.m13 * tmp5) * tmp11, (-this.m11 * tmp12 + this.m12 * tmp18 - this.m13 * tmp22) * tmp11, (this.m11 * tmp15 - this.m12 * tmp20 + this.m13 * tmp23) * tmp11);
    };
    Matrix4.prototype.asTranspose = function () {
        return new Matrix4(this.m11, this.m12, this.m13, this.m14, this.m21, this.m22, this.m23, this.m24, this.m31, this.m32, this.m33, this.m34, this.m41, this.m42, this.m43, this.m44);
    };
    return Matrix4;
}()); // class Matrix4
// Fluxions WebGL Library
// Copyright (c) 2017 - 2018 Jonathan Metzgar
// All Rights Reserved.
//
// MIT License
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
//
/// <reference path="./RenderingContext.ts"/>
var RenderConfig = /** @class */ (function () {
    function RenderConfig(_context, _vertShaderSource, _fragShaderSource) {
        this._context = _context;
        this._vertShaderSource = _vertShaderSource;
        this._fragShaderSource = _fragShaderSource;
        this._isCompiled = false;
        this._isLinked = false;
        this._vertShader = null;
        this._fragShader = null;
        this._program = null;
        this._vertShaderInfoLog = "";
        this._fragShaderInfoLog = "";
        this._vertShaderCompileStatus = false;
        this._fragShaderCompileStatus = false;
        this._programInfoLog = "";
        this._programLinkStatus = false;
        this.uniforms = new Map();
        this.uniformInfo = new Map();
        this.useDepthTest = true;
        this.depthTest = WebGLRenderingContext.LESS;
        this.depthMask = true;
        this.Reset(this._vertShaderSource, this._fragShaderSource);
    }
    Object.defineProperty(RenderConfig.prototype, "usable", {
        get: function () { return this.IsCompiledAndLinked(); },
        enumerable: true,
        configurable: true
    });
    RenderConfig.prototype.IsCompiledAndLinked = function () {
        return this._isCompiled && this._isLinked;
    };
    RenderConfig.prototype.Use = function () {
        var gl = this._context.gl;
        gl.useProgram(this._program);
        if (this.useDepthTest) {
            gl.enable(gl.DEPTH_TEST);
            gl.depthFunc(this.depthTest);
        }
        gl.depthMask(this.depthMask);
    };
    RenderConfig.prototype.Restore = function () {
        var gl = this._context.gl;
        gl.useProgram(null);
        if (this.useDepthTest) {
            gl.disable(gl.DEPTH_TEST);
            gl.depthFunc(gl.LESS);
        }
        gl.depthMask(true);
    };
    RenderConfig.prototype.SetMatrix4f = function (uniformName, m) {
        var gl = this._context.gl;
        var location = gl.getUniformLocation(this._program, uniformName);
        if (location != null) {
            gl.uniformMatrix4fv(location, false, m.toColMajorArray());
        }
    };
    RenderConfig.prototype.SetUniform1i = function (uniformName, x) {
        var gl = this._context.gl;
        var location = gl.getUniformLocation(this._program, uniformName);
        if (location != null) {
            gl.uniform1i(location, x);
        }
    };
    RenderConfig.prototype.SetUniform3f = function (uniformName, v) {
        var gl = this._context.gl;
        var location = gl.getUniformLocation(this._program, uniformName);
        if (location != null) {
            gl.uniform3fv(location, v.toFloat32Array());
        }
    };
    RenderConfig.prototype.SetUniform4f = function (uniformName, v) {
        var gl = this._context.gl;
        var location = gl.getUniformLocation(this._program, uniformName);
        if (location) {
            gl.uniform4fv(location, v.toFloat32Array());
        }
    };
    RenderConfig.prototype.GetAttribLocation = function (name) {
        var gl = this._context.gl;
        return gl.getAttribLocation(this._program, name);
    };
    RenderConfig.prototype.GetUniformLocation = function (name) {
        var gl = this._context.gl;
        var uloc = gl.getUniformLocation(this._program, name);
        if (!uloc)
            return -1;
        return uloc;
    };
    RenderConfig.prototype.Reset = function (vertShaderSource, fragShaderSource) {
        var gl = this._context.gl;
        var vertShader = gl.createShader(gl.VERTEX_SHADER);
        if (vertShader) {
            gl.shaderSource(vertShader, vertShaderSource);
            gl.compileShader(vertShader);
            var status_1 = gl.getShaderParameter(vertShader, gl.COMPILE_STATUS);
            var infoLog = null;
            if (!status_1) {
                infoLog = gl.getShaderInfoLog(vertShader);
                var errorElement = document.getElementById("errors");
                if (!errorElement && infoLog) {
                    var newDiv = document.createElement("div");
                    newDiv.appendChild(document.createTextNode("Vertex shader info log"));
                    newDiv.appendChild(document.createElement("br"));
                    newDiv.appendChild(document.createTextNode(infoLog));
                    var pre = document.createElement("pre");
                    pre.textContent = this._fragShaderSource;
                    newDiv.appendChild(pre);
                    document.body.appendChild(newDiv);
                }
            }
            if (status_1)
                this._vertShaderCompileStatus = true;
            if (infoLog)
                this._vertShaderInfoLog = infoLog;
            this._vertShader = vertShader;
        }
        else {
            return false;
        }
        var fragShader = gl.createShader(gl.FRAGMENT_SHADER);
        if (fragShader) {
            gl.shaderSource(fragShader, fragShaderSource);
            gl.compileShader(fragShader);
            var status_2 = gl.getShaderParameter(fragShader, gl.COMPILE_STATUS);
            var infoLog = null;
            if (!status_2) {
                infoLog = gl.getShaderInfoLog(fragShader);
                var errorElement = document.getElementById("errors");
                if (!errorElement && infoLog) {
                    var newDiv = document.createElement("div");
                    newDiv.appendChild(document.createTextNode("Fragment shader info log"));
                    newDiv.appendChild(document.createElement("br"));
                    newDiv.appendChild(document.createTextNode(infoLog));
                    var pre = document.createElement("pre");
                    pre.textContent = this._fragShaderSource;
                    newDiv.appendChild(pre);
                    document.body.appendChild(newDiv);
                }
            }
            if (status_2)
                this._fragShaderCompileStatus = true;
            if (infoLog)
                this._fragShaderInfoLog = infoLog;
            this._fragShader = fragShader;
        }
        else {
            return false;
        }
        if (this._vertShaderCompileStatus && this._fragShaderCompileStatus) {
            this._isCompiled = true;
            this._program = gl.createProgram();
            if (this._program) {
                gl.attachShader(this._program, this._vertShader);
                gl.attachShader(this._program, this._fragShader);
                gl.linkProgram(this._program);
                if (gl.getProgramParameter(this._program, gl.LINK_STATUS)) {
                    this._programLinkStatus = true;
                    this._isLinked = true;
                }
                else {
                    this._programLinkStatus = false;
                    var infoLog = gl.getProgramInfoLog(this._program);
                    if (infoLog) {
                        this._programInfoLog = infoLog;
                        var errorElement = document.getElementById("errors");
                        if (!errorElement && infoLog) {
                            var newDiv = document.createElement("div");
                            newDiv.appendChild(document.createTextNode("PROGRAM INFO LOG"));
                            newDiv.appendChild(document.createElement("br"));
                            newDiv.appendChild(document.createTextNode(infoLog));
                            document.body.appendChild(newDiv);
                        }
                    }
                }
            }
        }
        else {
            return false;
        }
        this.updateActiveUniforms();
        return true;
    };
    RenderConfig.prototype.updateActiveUniforms = function () {
        var gl = this._context.gl;
        var numUniforms = gl.getProgramParameter(this._program, gl.ACTIVE_UNIFORMS);
        this.uniforms.clear();
        this.uniformInfo.clear();
        for (var i = 0; i < numUniforms; i++) {
            var uniform = gl.getActiveUniform(this._program, i);
            if (!uniform)
                continue;
            this.uniformInfo.set(uniform.name, uniform);
            this.uniforms.set(uniform.name, gl.getUniformLocation(this._program, uniform.name));
        }
        return true;
    };
    return RenderConfig;
}());
// Fluxions WebGL Library
// Copyright (c) 2017 - 2018 Jonathan Metzgar
// All Rights Reserved.
//
// MIT License
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
//
/// <reference path="GTE.ts" />
/// <reference path="Utils.ts" />
/// <reference path="RenderConfig.ts" />
/// // <reference path="Scenegraph.ts" />
/// // <reference path="IndexedGeometryMesh.ts" />
/// // <reference path="Texture.ts" />
/// // <reference path="MaterialLibrary.ts" />
var RenderingContext = /** @class */ (function () {
    function RenderingContext(width, height) {
        if (width === void 0) { width = 512; }
        if (height === void 0) { height = 384; }
        this.width = width;
        this.height = height;
        this.enabledExtensions = [];
        this.divElement_ = null;
        this.canvasElement_ = null;
        this.aspectRatio = 1.0;
        this.divElement_ = document.createElement("div");
        this.canvasElement_ = document.createElement("canvas");
        this.canvasElement_.width = width;
        this.canvasElement_.height = height;
        if (this.canvasElement_) {
            var gl = this.canvasElement_.getContext("webgl");
            if (!gl) {
                gl = this.canvasElement_.getContext("experimental-webgl");
            }
            if (!gl) {
                this.divElement_.innerText = "WebGL not supported.";
                throw "Unable to create rendering context!";
            }
            else {
                this.gl = gl;
                this.divElement_.appendChild(this.canvasElement_);
                this.divElement_.align = "center";
                this.aspectRatio = width / height;
            }
        }
        else {
            throw "Unable to create canvas!";
        }
        document.body.appendChild(this.divElement_);
        this.EnableExtensions([
            "OES_standard_derivatives",
            "WEBGL_depth_texture",
            "OES_texture_float",
            "OES_element_index_uint"
        ]);
    }
    // ...
    RenderingContext.prototype.EnableExtensions = function (names) {
        var supportedExtensions = this.gl.getSupportedExtensions();
        if (!supportedExtensions)
            return false;
        var allFound = true;
        for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
            var name = names_1[_i];
            var found = false;
            for (var _a = 0, supportedExtensions_1 = supportedExtensions; _a < supportedExtensions_1.length; _a++) {
                var ext = supportedExtensions_1[_a];
                if (name == ext) {
                    this.enabledExtensions.push(this.gl.getExtension(name));
                    console.log("Extension " + name + " enabled");
                    found = true;
                    break;
                }
            }
            if (!found) {
                console.log("Extension " + name + " not enabled");
                allFound = false;
                break;
            }
        }
        return allFound;
    };
    return RenderingContext;
}());
// Fluxions WebGL Library
// Copyright (c) 2017 - 2018 Jonathan Metzgar
// All Rights Reserved.
//
// MIT License
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
//
/// <reference path="./RenderingContext.ts" />
/// <reference path="./RenderConfig.ts" />
var Utils;
(function (Utils) {
    // return last part of the url name ignoring possible ending slash
    function GetURLResource(url) {
        var parts = url.split('/');
        var lastSection = parts.pop() || parts.pop();
        if (lastSection) {
            return lastSection;
        }
        else {
            return "unknown";
        }
    }
    Utils.GetURLResource = GetURLResource;
    function GetURLPath(url) {
        var parts = url.split('/');
        if (!parts.pop())
            parts.pop();
        var path = parts.join("/") + "/";
        if (path) {
            return path;
        }
        else {
            return "";
        }
    }
    Utils.GetURLPath = GetURLPath;
    function IsExtension(sourceString, extensionWithDot) {
        var start = sourceString.length - extensionWithDot.length - 1;
        if (start >= 0 && sourceString.substr(start, extensionWithDot.length) == extensionWithDot) {
            return true;
        }
        return false;
    }
    Utils.IsExtension = IsExtension;
    function GetExtension(sourceString) {
        var position = sourceString.lastIndexOf(".");
        if (position >= 0) {
            return sourceString.substr(position + 1).toLowerCase();
        }
        return "";
    }
    Utils.GetExtension = GetExtension;
    var ShaderLoader = /** @class */ (function () {
        function ShaderLoader(vertShaderUrl, fragShaderUrl, callbackfn) {
            var _this = this;
            this.vertShaderUrl = vertShaderUrl;
            this.fragShaderUrl = fragShaderUrl;
            this.callbackfn = callbackfn;
            this.vertLoaded = false;
            this.fragLoaded = false;
            this.vertFailed = false;
            this.fragFailed = false;
            this.vertShaderSource = "";
            this.fragShaderSource = "";
            var self = this;
            var vertXHR = new XMLHttpRequest();
            vertXHR.addEventListener("load", function (e) {
                self.vertShaderSource = vertXHR.responseText;
                self.vertLoaded = true;
                if (_this.loaded) {
                    self.callbackfn(self.vertShaderSource, self.fragShaderSource);
                }
            });
            vertXHR.addEventListener("abort", function (e) {
                self.vertFailed = true;
                console.error("unable to GET " + vertShaderUrl);
            });
            vertXHR.addEventListener("error", function (e) {
                self.vertFailed = true;
                console.error("unable to GET " + vertShaderUrl);
            });
            vertXHR.open("GET", vertShaderUrl);
            vertXHR.send();
            var fragXHR = new XMLHttpRequest();
            fragXHR.addEventListener("load", function (e) {
                self.fragShaderSource = fragXHR.responseText;
                self.fragLoaded = true;
                if (_this.loaded) {
                    self.callbackfn(self.vertShaderSource, self.fragShaderSource);
                }
            });
            fragXHR.addEventListener("abort", function (e) {
                self.fragFailed = true;
                console.error("unable to GET " + fragShaderUrl);
            });
            fragXHR.addEventListener("error", function (e) {
                self.vertFailed = true;
                console.error("unable to GET " + fragShaderUrl);
            });
            fragXHR.open("GET", fragShaderUrl);
            fragXHR.send();
        }
        Object.defineProperty(ShaderLoader.prototype, "failed", {
            get: function () { return this.vertFailed || this.fragFailed; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ShaderLoader.prototype, "loaded", {
            get: function () { return this.vertLoaded && this.fragLoaded; },
            enumerable: true,
            configurable: true
        });
        return ShaderLoader;
    }());
    Utils.ShaderLoader = ShaderLoader;
    var TextFileLoader = /** @class */ (function () {
        function TextFileLoader(url, callbackfn, parameter) {
            if (parameter === void 0) { parameter = 0; }
            this.callbackfn = callbackfn;
            this._loaded = false;
            this._failed = false;
            this.data = "";
            this.name = GetURLResource(url);
            var self = this;
            var xhr = new XMLHttpRequest();
            xhr.addEventListener("load", function (e) {
                if (!xhr.responseText) {
                    self._failed = true;
                    self.data = "unknown";
                }
                else {
                    self.data = xhr.responseText;
                }
                self._loaded = true;
                callbackfn(self.data, self.name, parameter);
            });
            xhr.addEventListener("abort", function (e) {
                self._failed = true;
                console.error("unable to GET " + url);
            });
            xhr.addEventListener("error", function (e) {
                self._failed = true;
                console.error("unable to GET " + url);
            });
            xhr.open("GET", url);
            xhr.send();
        }
        Object.defineProperty(TextFileLoader.prototype, "loaded", {
            get: function () { return this._loaded; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextFileLoader.prototype, "failed", {
            get: function () { return this._failed; },
            enumerable: true,
            configurable: true
        });
        return TextFileLoader;
    }());
    Utils.TextFileLoader = TextFileLoader;
    var ImageFileLoader = /** @class */ (function () {
        function ImageFileLoader(url, callbackfn, parameter) {
            if (parameter === void 0) { parameter = 0; }
            var _this = this;
            this.callbackfn = callbackfn;
            this._loaded = false;
            this._failed = false;
            this.image = new Image();
            this.name = GetURLResource(url);
            var self = this;
            var ajax = new XMLHttpRequest();
            this.image.addEventListener("load", function (e) {
                self._loaded = true;
                callbackfn(self.image, _this.name, parameter);
            });
            this.image.addEventListener("error", function (e) {
                self._failed = true;
                console.error("unable to GET " + url);
            });
            this.image.addEventListener("abort", function (e) {
                self._failed = true;
                console.error("unable to GET " + url);
            });
            this.image.src = url;
        }
        Object.defineProperty(ImageFileLoader.prototype, "loaded", {
            get: function () { return this._loaded; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ImageFileLoader.prototype, "failed", {
            get: function () { return this._failed; },
            enumerable: true,
            configurable: true
        });
        return ImageFileLoader;
    }());
    Utils.ImageFileLoader = ImageFileLoader;
    function SeparateCubeMapImages(image, images) {
        if (image.width != 6 * image.height) {
            return;
        }
        // images are laid out: +X, -X, +Y, -Y, +Z, -Z
        var canvas = document.createElement("canvas");
        if (canvas) {
            canvas.width = image.width;
            canvas.height = image.height;
            var ctx = canvas.getContext("2d");
            if (ctx) {
                ctx.drawImage(image, 0, 0);
                for (var i = 0; i < 6; i++) {
                    images[i] = ctx.getImageData(i * image.height, 0, image.height, image.height);
                }
            }
        }
    }
    Utils.SeparateCubeMapImages = SeparateCubeMapImages;
    var GLTypeInfo = /** @class */ (function () {
        function GLTypeInfo(type, baseType, components, sizeOfType) {
            this.type = type;
            this.baseType = baseType;
            this.components = components;
            this.sizeOfType = sizeOfType;
        }
        GLTypeInfo.prototype.CreateArray = function (size) {
            switch (this.type) {
                case WebGLRenderingContext.FLOAT:
                case WebGLRenderingContext.FLOAT_VEC2:
                case WebGLRenderingContext.FLOAT_VEC3:
                case WebGLRenderingContext.FLOAT_VEC4:
                case WebGLRenderingContext.FLOAT_MAT2:
                case WebGLRenderingContext.FLOAT_MAT3:
                case WebGLRenderingContext.FLOAT_MAT4:
                    return new Float32Array(size);
                case WebGLRenderingContext.INT:
                case WebGLRenderingContext.INT_VEC2:
                case WebGLRenderingContext.INT_VEC3:
                case WebGLRenderingContext.INT_VEC4:
                    return new Int32Array(size);
                case WebGLRenderingContext.SHORT:
                    return new Int16Array(size);
                case WebGLRenderingContext.UNSIGNED_INT:
                    return new Uint32Array(size);
                case WebGLRenderingContext.UNSIGNED_SHORT:
                    return new Uint16Array(size);
                case WebGLRenderingContext.UNSIGNED_BYTE:
                    return new Uint8ClampedArray(size);
                case WebGLRenderingContext.BOOL:
                    return new Uint32Array(size);
            }
            return null;
        };
        return GLTypeInfo;
    }());
    Utils.WebGLTypeInfo = new Map([
        [WebGLRenderingContext.BYTE, new GLTypeInfo(WebGLRenderingContext.BYTE, WebGLRenderingContext.BYTE, 1, 1)],
        [WebGLRenderingContext.UNSIGNED_BYTE, new GLTypeInfo(WebGLRenderingContext.UNSIGNED_BYTE, WebGLRenderingContext.UNSIGNED_BYTE, 1, 1)],
        [WebGLRenderingContext.SHORT, new GLTypeInfo(WebGLRenderingContext.SHORT, WebGLRenderingContext.SHORT, 1, 2)],
        [WebGLRenderingContext.UNSIGNED_SHORT, new GLTypeInfo(WebGLRenderingContext.UNSIGNED_SHORT, WebGLRenderingContext.UNSIGNED_SHORT, 1, 2)],
        [WebGLRenderingContext.INT, new GLTypeInfo(WebGLRenderingContext.INT, WebGLRenderingContext.INT, 1, 4)],
        [WebGLRenderingContext.UNSIGNED_INT, new GLTypeInfo(WebGLRenderingContext.UNSIGNED_INT, WebGLRenderingContext.UNSIGNED_INT, 1, 4)],
        [WebGLRenderingContext.BOOL, new GLTypeInfo(WebGLRenderingContext.BOOL, WebGLRenderingContext.INT, 1, 4)],
        [WebGLRenderingContext.FLOAT, new GLTypeInfo(WebGLRenderingContext.FLOAT, WebGLRenderingContext.FLOAT, 1, 4)],
        [WebGLRenderingContext.FLOAT_VEC2, new GLTypeInfo(WebGLRenderingContext.FLOAT_VEC2, WebGLRenderingContext.FLOAT, 2, 4)],
        [WebGLRenderingContext.FLOAT_VEC3, new GLTypeInfo(WebGLRenderingContext.FLOAT_VEC3, WebGLRenderingContext.FLOAT, 3, 4)],
        [WebGLRenderingContext.FLOAT_VEC4, new GLTypeInfo(WebGLRenderingContext.FLOAT_VEC4, WebGLRenderingContext.FLOAT, 4, 4)],
        [WebGLRenderingContext.FLOAT_MAT2, new GLTypeInfo(WebGLRenderingContext.FLOAT_MAT2, WebGLRenderingContext.FLOAT, 4, 4)],
        [WebGLRenderingContext.FLOAT_MAT3, new GLTypeInfo(WebGLRenderingContext.FLOAT_MAT3, WebGLRenderingContext.FLOAT, 9, 4)],
        [WebGLRenderingContext.FLOAT_MAT4, new GLTypeInfo(WebGLRenderingContext.FLOAT_MAT4, WebGLRenderingContext.FLOAT, 16, 4)],
        // [WebGLRenderingContext.FLOAT_MAT2x3, new GLTypeInfo(WebGLRenderingContext.FLOAT_MAT2x3, WebGLRenderingContext.FLOAT, 6, 4)],
        // [WebGLRenderingContext.FLOAT_MAT2x4, new GLTypeInfo(WebGLRenderingContext.FLOAT_MAT2x4, WebGLRenderingContext.FLOAT, 8, 4)],
        // [WebGLRenderingContext.FLOAT_MAT3x2, new GLTypeInfo(WebGLRenderingContext.FLOAT_MAT3x2, WebGLRenderingContext.FLOAT, 6, 4)],
        // [WebGLRenderingContext.FLOAT_MAT3x4, new GLTypeInfo(WebGLRenderingContext.FLOAT_MAT3x4, WebGLRenderingContext.FLOAT, 12, 4)],
        // [WebGLRenderingContext.FLOAT_MAT4x2, new GLTypeInfo(WebGLRenderingContext.FLOAT_MAT4x2, WebGLRenderingContext.FLOAT, 8, 4)],
        // [WebGLRenderingContext.FLOAT_MAT4x3, new GLTypeInfo(WebGLRenderingContext.FLOAT_MAT4x3, WebGLRenderingContext.FLOAT, 12, 4)],
        // [WebGLRenderingContext.SAMPLER_1D, new GLTypeInfo(WebGLRenderingContext.SAMPLER_1D, WebGLRenderingContext.FLOAT, 1, 4)],
        [WebGLRenderingContext.SAMPLER_2D, new GLTypeInfo(WebGLRenderingContext.SAMPLER_2D, WebGLRenderingContext.FLOAT, 1, 4)],
        // [WebGLRenderingContext.SAMPLER_3D, new GLTypeInfo(WebGLRenderingContext.SAMPLER_3D, WebGLRenderingContext.FLOAT, 1, 4)],
        [WebGLRenderingContext.SAMPLER_CUBE, new GLTypeInfo(WebGLRenderingContext.SAMPLER_CUBE, WebGLRenderingContext.FLOAT, 1, 4)],
    ]);
})(Utils || (Utils = {}));
// Fluxions WebGL Library
// Copyright (c) 2017 - 2018 Jonathan Metzgar
// All Rights Reserved.
//
// MIT License
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
//
/// <reference path="./Vector2.ts" />
/// <reference path="./Vector3.ts" />
/// <reference path="./Vector4.ts" />
/// <reference path="./Matrix2.ts" />
/// <reference path="./Matrix3.ts" />
/// <reference path="./Matrix4.ts" />
/// <reference path="./Utils.ts" />
var GTE;
(function (GTE) {
    function clamp(x, a, b) {
        return x < a ? a : x > b ? b : x;
    }
    GTE.clamp = clamp;
    // 0 <= mix <= 1
    function lerp(a, b, mix) {
        return mix * a + (1 - mix) * b;
    }
    GTE.lerp = lerp;
    var WaveletNoiseCalculator = /** @class */ (function () {
        function WaveletNoiseCalculator(noiseTileSize) {
            if (noiseTileSize === void 0) { noiseTileSize = 128; }
            this.noiseTileSize = noiseTileSize;
            this.initialized = false;
            this.noiseTileData = new Float32Array(noiseTileSize * noiseTileSize * noiseTileSize);
            this.GenerateNoiseTile(noiseTileSize);
        }
        WaveletNoiseCalculator.prototype.Mod = function (x, n) {
            var m = x % n;
            return m < 0 ? m + n : m;
        };
        WaveletNoiseCalculator.prototype.Downsample = function (from, to, n, stride) {
            var ARAD = 16;
            var coefs = new Float32Array([
                0.000334, -0.001528, 0.000410, 0.003545, -0.000938, -0.008233, 0.002172, 0.019120,
                -0.005040, -0.044412, 0.011655, 0.103311, -0.025936, -0.243780, 0.033979, 0.655340,
                0.655340, 0.033979, -0.243780, -0.025936, 0.103311, 0.011655, -0.044412, -0.005040,
                0.019120, 0.002172, -0.008233, -0.000938, 0.003546, 0.000410, -0.001528, 0.000334,
                0
            ]);
            var a = coefs.subarray(ARAD);
            for (var i = 0; i < ((n / 2) | 0); i++) {
                to[i * stride] = 0;
                for (var k = 2 * i - ARAD; k <= 2 * i + ARAD; k++) {
                    var _a = coefs[ARAD + k - 2 * i];
                    to[i * stride] += _a * from[this.Mod(k, n) * stride];
                    if (!isFinite(to[i * stride])) {
                        console.error("non finite number produced");
                    }
                }
            }
        };
        WaveletNoiseCalculator.prototype.Upsample = function (from, to, n, stride) {
            var ARAD = 16;
            var pCoefs = new Float32Array([0.25, 0.75, 0.75, 0.25]);
            var p = pCoefs.subarray(2);
            for (var i = 0; i < n; i++) {
                to[i * stride] = 0;
                var k1 = (i / 2) | 0;
                var k2 = k1 + 1;
                for (var k = k1; k <= k2; k++) {
                    var _p = pCoefs[2 + i - 2 * k];
                    to[i * stride] += _p * from[this.Mod(k, n / 2) * stride];
                    if (!isFinite(to[i * stride])) {
                        console.error("non finite number produced");
                    }
                }
            }
        };
        WaveletNoiseCalculator.prototype.GenerateNoiseTile = function (n) {
            if (n % 2) {
                n++;
            }
            var ix = 0;
            var iy = 0;
            var iz = 0;
            var sz = n * n * n * 4;
            var temp1 = new Float32Array(n * n * n);
            var temp2 = new Float32Array(n * n * n);
            var noise = new Float32Array(n * n * n);
            for (var i = 0; i < n * n * n; i++) {
                // Wavelet noise paper says "GaussianNoise"
                noise[i] = Math.random() * 2 - 1;
            }
            // Downsample and upsample
            for (iy = 0; iy < n; iy++) {
                for (iz = 0; iz < n; iz++) {
                    var i = iy * n + iz * n * n;
                    this.Downsample(noise.subarray(i), temp1.subarray(i), n, 1);
                    this.Upsample(temp1.subarray(i), temp2.subarray(i), n, 1);
                }
            }
            for (ix = 0; ix < n; ix++) {
                for (iz = 0; iz < n; iz++) {
                    var i = ix + iz * n * n;
                    this.Downsample(temp2.subarray(i), temp1.subarray(i), n, n);
                    this.Upsample(temp1.subarray(i), temp2.subarray(i), n, n);
                }
            }
            for (ix = 0; ix < n; ix++) {
                for (iy = 0; iy < n; iy++) {
                    var i = ix + iy * n;
                    this.Downsample(temp2.subarray(i), temp1.subarray(i), n, n * n);
                    this.Upsample(temp1.subarray(i), temp2.subarray(i), n, n * n);
                }
            }
            for (var i = 0; i < n * n * n; i++) {
                noise[i] -= temp2[i];
            }
            var offset = n / 2;
            if (offset % 2) {
                offset++;
            }
            for (var i = 0, ix_1 = 0; ix_1 < n; ix_1++) {
                for (iy = 0; iy < n; iy++) {
                    for (iz = 0; iz < n; iz++) {
                        temp1[i++] = noise[this.Mod(ix_1 + offset, n) + this.Mod(iy + offset, n) * n + this.Mod(iz + offset, n) * n * n];
                    }
                }
            }
            for (var i = 0; i < n * n * n; i++) {
                noise[i] += temp1[i];
            }
            this.noiseTileData = noise;
            this.initialized = true;
        };
        WaveletNoiseCalculator.prototype.WaveletNoise = function (x, y, z, octave) {
            if (octave === void 0) { octave = 128; }
            var p = [octave * x, octave * y, octave * z];
            var i = 0;
            var f = [0, 0, 0];
            var c = [0, 0, 0];
            var n = this.noiseTileSize;
            var mid = [0, 0, 0];
            var w = [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
            ];
            var t = 0;
            var result = 0;
            // B-spline quadratic basis function
            for (i = 0; i < 3; i++) {
                mid[i] = Math.ceil(p[i] - 0.5);
                t = mid[i] - (p[i] - 0.5);
                w[i][0] = t * t / 2;
                w[i][2] = (1 - t) * (1 - t) / 2;
                w[i][1] = 1 - w[i][0] - w[i][2];
            }
            for (f[2] = -1; f[2] <= 1; f[2]++) {
                for (f[1] = -1; f[1] <= 1; f[1]++) {
                    for (f[0] = -1; f[0] <= 1; f[0]++) {
                        var weight = 1;
                        for (i = 0; i < 3; i++) {
                            c[i] = this.Mod(mid[i] + f[i], n);
                            weight *= w[i][f[i] + 1];
                            result += weight * this.noiseTileData[c[2] * n * n + c[1] * n + c[0]];
                        }
                    }
                }
            }
            return result;
        };
        return WaveletNoiseCalculator;
    }());
    GTE.WaveletNoiseCalculator = WaveletNoiseCalculator;
    GTE.WaveletNoise = new WaveletNoiseCalculator(64);
})(GTE || (GTE = {}));
// Fluxions WebGL Library
// Copyright (c) 2017 - 2018 Jonathan Metzgar
// All Rights Reserved.
//
// MIT License
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
//
/// <reference path="GTE.ts" />
var Colors;
(function (Colors) {
    var DarkIntensity = 30;
    var LightIntensity = 210;
    var MediumIntensity = GTE.lerp(DarkIntensity, LightIntensity, 0.5);
    var GrayIntensity33 = GTE.lerp(DarkIntensity, LightIntensity, 0.66);
    var GrayIntensity66 = GTE.lerp(DarkIntensity, LightIntensity, 0.33);
    var Gr33Intensity = GTE.lerp(DarkIntensity, LightIntensity, 0.66);
    var Gr66Intensity = GTE.lerp(DarkIntensity, LightIntensity, 0.33);
    Colors.Black = [30, 30, 30, 255];
    Colors.White = [210, 210, 210, 255];
    Colors.Gray66 = [150, 150, 150, 255];
    Colors.Gray33 = [91, 91, 91, 255];
    Colors.Red = [210, 30, 30, 255];
    Colors.Orange = [210, 150, 30, 255];
    Colors.Yellow = [210, 210, 30, 255];
    Colors.Green = [30, 210, 30, 255];
    Colors.Cyan = [30, 210, 210, 255];
    Colors.Blue = [30, 30, 210, 255];
    Colors.Indigo = [91, 30, 210, 255];
    Colors.Violet = [150, 30, 150, 255];
    Colors.Magenta = [210, 30, 210, 255];
    // export const DarkGreen: number[] = [30, 91, 30, 255];
    Colors.Brown = [150, 91, 30, 255];
    Colors.SkyBlue = [30, 150, 210, 255];
    Colors.DarkRed = [120, 30, 30, 255];
    Colors.DarkCyan = [30, 120, 120, 255];
    Colors.DarkGreen = [30, 120, 30, 255];
    Colors.DarkMagenta = [120, 30, 120, 255];
    Colors.DarkBlue = [30, 30, 120, 255];
    Colors.DarkYellow = [120, 120, 30, 255];
    Colors.LightRed = [210, 120, 120, 255];
    Colors.LightCyan = [120, 210, 210, 255];
    Colors.LightGreen = [120, 210, 120, 255];
    Colors.LightMagenta = [210, 120, 210, 255];
    Colors.LightBlue = [120, 120, 210, 255];
    Colors.LightYellow = [210, 210, 120, 255];
    Colors.ArneOrange = [235, 137, 49, 255];
    Colors.ArneYellow = [247, 226, 107, 255];
    Colors.ArneDarkGreen = [47, 72, 78, 255];
    Colors.ArneGreen = [68, 137, 26, 255];
    Colors.ArneSlimeGreen = [163, 206, 39, 255];
    Colors.ArneNightBlue = [27, 38, 50, 255];
    Colors.ArneSeaBlue = [0, 87, 132, 255];
    Colors.ArneSkyBlue = [49, 162, 242, 255];
    Colors.ArneCloudBlue = [178, 220, 239, 255];
    Colors.ArneDarkBlue = [52, 42, 151, 255];
    Colors.ArneDarkGray = [101, 109, 113, 255];
    Colors.ArneLightGray = [204, 204, 204, 255];
    Colors.ArneDarkRed = [115, 41, 48, 255];
    Colors.ArneRose = [203, 67, 167, 255];
    Colors.ArneTaupe = [82, 79, 64, 255];
    Colors.ArneGold = [173, 157, 51, 255];
    Colors.ArneTangerine = [236, 71, 0, 255];
    Colors.ArneHoney = [250, 180, 11, 255];
    Colors.ArneMossyGreen = [17, 94, 51, 255];
    Colors.ArneDarkCyan = [20, 128, 126, 255];
    Colors.ArneCyan = [21, 194, 165, 255];
    Colors.ArneBlue = [34, 90, 246, 255];
    Colors.ArneIndigo = [153, 100, 249, 255];
    Colors.ArnePink = [247, 142, 214, 255];
    Colors.ArneSkin = [244, 185, 144, 255];
    Colors.ArneBlack = [30, 30, 30, 255];
})(Colors || (Colors = {}));
var HW0ShaderProgram = /** @class */ (function () {
    function HW0ShaderProgram(gl, vertShaderSource, fragShaderSource) {
        this.gl = gl;
        this.vertShaderSource = vertShaderSource;
        this.fragShaderSource = fragShaderSource;
        this.program_ = null;
        var vshader = this.createShader(gl.VERTEX_SHADER, vertShaderSource);
        var fshader = this.createShader(gl.FRAGMENT_SHADER, fragShaderSource);
        if (!vshader || !fshader)
            return;
        this.program_ = gl.createProgram();
        if (!this.program_)
            return;
        gl.attachShader(this.program_, vshader);
        gl.attachShader(this.program_, fshader);
        gl.linkProgram(this.program_);
        if (!gl.getProgramParameter(this.program_, gl.LINK_STATUS)) {
            console.error("Program Link Error");
            console.error(this.gl.getProgramInfoLog(this.program_));
            gl.deleteShader(vshader);
            gl.deleteShader(fshader);
            gl.deleteProgram(this.program_);
            this.program_ = null;
            return;
        }
    }
    HW0ShaderProgram.prototype.Use = function () {
        if (!this.program_)
            return;
        this.gl.useProgram(this.program_);
    };
    HW0ShaderProgram.prototype.GetVertexPosition = function (vertexName) {
        return this.gl.getAttribLocation(this.program_, vertexName);
    };
    HW0ShaderProgram.prototype.createShader = function (type, sourceCode) {
        var shader = this.gl.createShader(type);
        if (!shader)
            return null;
        this.gl.shaderSource(shader, sourceCode);
        this.gl.compileShader(shader);
        var status = this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS);
        if (!status) {
            if (type == this.gl.VERTEX_SHADER)
                console.error("Vertex shader compile error");
            if (type == this.gl.FRAGMENT_SHADER)
                console.error("Fragment shader compile error");
            console.error(this.gl.getShaderInfoLog(shader));
            return null;
        }
        return shader;
    };
    return HW0ShaderProgram;
}());
var HW0StaticVertexBufferObject = /** @class */ (function () {
    function HW0StaticVertexBufferObject(gl, drawArraysMode, vertexData) {
        this.drawArraysMode = drawArraysMode;
        this.buffer = null;
        this.gl = null;
        this.bufferLength = 0;
        this.count = 0;
        this.buffer = gl.createBuffer();
        if (!this.buffer)
            return;
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
        gl.bufferData(gl.ARRAY_BUFFER, vertexData, gl.STATIC_DRAW);
        this.bufferLength = vertexData.length * 3;
        this.count = vertexData.length / 3;
        this.gl = gl;
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
    }
    HW0StaticVertexBufferObject.prototype.Render = function (vertexLoc) {
        if (!this.buffer || !this.gl || vertexLoc < 0)
            return;
        var gl = this.gl;
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
        gl.vertexAttribPointer(vertexLoc, 3, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(vertexLoc);
        gl.drawArrays(this.drawArraysMode, 0, this.count);
        gl.disableVertexAttribArray(vertexLoc);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
    };
    return HW0StaticVertexBufferObject;
}());
var IndexedGeometryMesh = /** @class */ (function () {
    function IndexedGeometryMesh(_renderingContext) {
        this._renderingContext = _renderingContext;
        this.vertices = [];
        this.indices = [];
        this.surfaces = [];
        this._mtllib = "";
        this._mtl = "";
        this._vertex = new Vertex();
        this._dirty = true;
        this._vboData = new Float32Array();
        this._iboData = new Uint32Array();
        var gl = this._renderingContext.gl;
        var vbo = gl.createBuffer();
        var ibo = gl.createBuffer();
        if (!vbo || !ibo)
            throw "IndexedGeometryMesh::constructor() Unable to create buffer";
        this._vbo = vbo;
        this._ibo = ibo;
    }
    IndexedGeometryMesh.prototype.SetMtllib = function (mtllib) {
        this._mtllib = mtllib;
    };
    IndexedGeometryMesh.prototype.SetMtl = function (mtl) {
        this._mtl = mtl;
    };
    IndexedGeometryMesh.prototype.BeginSurface = function (mode) {
        if (this.surfaces.length == 0) {
            // if no surfaces exist, add one
            this.surfaces.push(new Surface(mode, this.indices.length, this._mtllib, this._mtl));
        }
        else if (this.currentIndexCount != 0) {
            // do not add a surface if the most recent one is empty
            this.surfaces.push(new Surface(mode, this.indices.length, this._mtllib, this._mtl));
        }
    };
    IndexedGeometryMesh.prototype.AddIndex = function (i) {
        if (this.surfaces.length == 0)
            return;
        if (i < 0) {
            this.indices.push((this.vertices.length / 12) + i);
        }
        else {
            this.indices.push(i);
        }
        this.surfaces[this.surfaces.length - 1].Add();
        this._dirty = true;
    };
    Object.defineProperty(IndexedGeometryMesh.prototype, "currentIndexCount", {
        get: function () {
            if (this.surfaces.length == 0)
                return 0;
            return this.surfaces[this.surfaces.length - 1].count;
        },
        enumerable: true,
        configurable: true
    });
    IndexedGeometryMesh.prototype.SetNormal = function (n) {
        this._vertex.normal.copy(n);
    };
    IndexedGeometryMesh.prototype.SetColor = function (c) {
        this._vertex.color.copy(c);
    };
    IndexedGeometryMesh.prototype.SetTexCoord = function (t) {
        this._vertex.texcoord.copy(t);
    };
    IndexedGeometryMesh.prototype.AddVertex = function (v) {
        this._vertex.position.copy(v);
        (_a = this.vertices).push.apply(_a, this._vertex.asArray());
        this._vertex = new Vertex();
        var _a;
    };
    IndexedGeometryMesh.prototype.BuildBuffers = function (gl) {
        // Building the VBO goes here
        if (!this._dirty)
            return;
        // TODO: Create and upload the vertex and element array buffers here
        var vertexBufferData = new Float32Array(this.vertices);
        gl.bindBuffer(gl.ARRAY_BUFFER, this._vbo);
        gl.bufferData(gl.ARRAY_BUFFER, vertexBufferData, gl.STATIC_DRAW);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        var elementBufferData = new Uint32Array(this.indices);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this._ibo);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, elementBufferData, gl.STATIC_DRAW);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
        console.log('elements added', elementBufferData);
        console.log('vertices added', vertexBufferData);
        this._dirty = false;
    };
    IndexedGeometryMesh.prototype.Render = function (rc, sg) {
        // Rendering code goes here
        var gl = this._renderingContext.gl;
        this.BuildBuffers(gl);
        gl.bindBuffer(gl.ARRAY_BUFFER, this._vbo);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this._ibo);
        // Assume our vertex buffer is laid out as
        // V0 [ vx, vy, vz, nx, ny, nz, u, v, w, r, g, b ]
        var voffset = 0, vsize = 3;
        var noffset = 12, nsize = 3;
        var toffset = 24, tsize = 3;
        var coffset = 36, csize = 3;
        var stride = 48;
        var positionName = 'aPosition';
        var normalName = 'aNormal';
        var texcoordName = 'aTexcoord';
        var colorName = 'aColor';
        var vloc = rc.GetAttribLocation(positionName);
        var nloc = rc.GetAttribLocation(normalName);
        var tloc = rc.GetAttribLocation(texcoordName);
        var cloc = rc.GetAttribLocation(colorName);
        // quit if no positions!
        if (vloc < 0) {
            return;
        }
        if (vloc >= 0) {
            gl.vertexAttribPointer(vloc, vsize, gl.FLOAT, false, stride, voffset);
            gl.enableVertexAttribArray(vloc);
        }
        if (nloc >= 0) {
            gl.vertexAttribPointer(nloc, nsize, gl.FLOAT, false, stride, noffset);
            gl.enableVertexAttribArray(nloc);
        }
        if (tloc >= 0) {
            gl.vertexAttribPointer(tloc, tsize, gl.FLOAT, false, stride, toffset);
            gl.enableVertexAttribArray(tloc);
        }
        if (cloc >= 0) {
            gl.vertexAttribPointer(cloc, csize, gl.FLOAT, false, stride, coffset);
            gl.enableVertexAttribArray(cloc);
        }
        // Use drawArrays if not using elements
        for (var _i = 0, _a = this.surfaces; _i < _a.length; _i++) {
            var surface = _a[_i];
            gl.drawElements(surface.mode, surface.count, gl.UNSIGNED_INT, 0);
        }
        if (vloc >= 0) {
            gl.disableVertexAttribArray(vloc);
        }
        if (nloc >= 0) {
            gl.disableVertexAttribArray(nloc);
        }
        if (tloc >= 0) {
            gl.disableVertexAttribArray(tloc);
        }
        if (cloc >= 0) {
            gl.disableVertexAttribArray(cloc);
        }
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
    };
    return IndexedGeometryMesh;
}());
var OldWebGLAppHW0 = /** @class */ (function () {
    function OldWebGLAppHW0(width, height) {
        if (width === void 0) { width = 512; }
        if (height === void 0) { height = 384; }
        this.width = width;
        this.height = height;
        this.divElement_ = null;
        this.canvasElement_ = null;
        this.gl = null;
        this.vbo = null;
        this.program = null;
        this.divElement_ = document.createElement("div");
        this.canvasElement_ = document.createElement("canvas");
        if (this.canvasElement_) {
            this.gl = this.canvasElement_.getContext("webgl");
            if (!this.gl) {
                this.gl = this.canvasElement_.getContext("experimental-webgl");
            }
            if (!this.gl) {
                this.canvasElement_ = null;
                this.divElement_.innerText = "WebGL not supported.";
            }
            else {
                this.divElement_.appendChild(this.canvasElement_);
                this.divElement_.align = "center";
            }
        }
        document.body.appendChild(this.divElement_);
    }
    OldWebGLAppHW0.prototype.run = function () {
        if (!this.gl)
            return;
        this.init(this.gl);
        this.mainloop(0);
    };
    OldWebGLAppHW0.prototype.mainloop = function (timestamp) {
        var self = this;
        this.display(timestamp / 1000.0);
        window.requestAnimationFrame(function (t) {
            self.mainloop(t);
        });
    };
    OldWebGLAppHW0.prototype.init = function (gl) {
        this.vbo = new HW0StaticVertexBufferObject(gl, gl.TRIANGLES, new Float32Array([
            -1, -1, 0, 1,
            1, -1, 0, 1,
            0, 1, 0, 1
        ]));
        this.program = new HW0ShaderProgram(gl, "attribute vec4 position; void main(){ gl_Position = position; }", "void main() { gl_FragColor = vec4(0.4, 0.3, 0.2, 1.0); }");
    };
    OldWebGLAppHW0.prototype.display = function (t) {
        if (!this.gl || !this.canvasElement_)
            return;
        var gl = this.gl;
        gl.clearColor(0.2, 0.15 * Math.sin(t) + 0.15, 0.4, 1.0);
        gl.clear(this.gl.COLOR_BUFFER_BIT);
        gl.viewport(0, 0, this.canvasElement_.width, this.canvasElement_.height);
        if (this.vbo && this.program) {
            this.program.Use();
            this.vbo.Render(this.program.GetVertexPosition("position"));
        }
        gl.useProgram(null);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
    };
    return OldWebGLAppHW0;
}());
var SGAssetType;
(function (SGAssetType) {
    SGAssetType[SGAssetType["Scene"] = 0] = "Scene";
    SGAssetType[SGAssetType["GeometryGroup"] = 1] = "GeometryGroup";
    SGAssetType[SGAssetType["MaterialLibrary"] = 2] = "MaterialLibrary";
    SGAssetType[SGAssetType["ShaderProgram"] = 3] = "ShaderProgram";
    SGAssetType[SGAssetType["Image"] = 4] = "Image";
})(SGAssetType || (SGAssetType = {}));
;
var ScenegraphNode = /** @class */ (function () {
    function ScenegraphNode(name, parent) {
        if (name === void 0) { name = "unknown"; }
        if (parent === void 0) { parent = "unknown"; }
        this.name = name;
        this.parent = parent;
        this.geometryGroup = "";
        this.transform = Matrix4.makeIdentity();
    }
    return ScenegraphNode;
}());
var Texture = /** @class */ (function () {
    function Texture(_renderingContext, name, url, target, texture) {
        this._renderingContext = _renderingContext;
        this.name = name;
        this.url = url;
        this.target = target;
        this.texture = texture;
        this.id = "";
    }
    return Texture;
}());
var Scenegraph = /** @class */ (function () {
    function Scenegraph(_renderingContext) {
        this._renderingContext = _renderingContext;
        this.textfiles = [];
        this.imagefiles = [];
        this.shaderSrcFiles = [];
        this._renderConfigs = new Map();
        //private _cubeTextures: Map<string, WebGLTexture> = new Map<string, WebGLTexture>();
        this._textures = new Map();
        this._sceneResources = new Map();
        this._nodes = [];
        this._meshes = new Map();
        this._tempNode = new ScenegraphNode("", "");
        this._defaultRenderConfig = new RenderConfig(this._renderingContext, "attribute vec4 aPosition;\n             void main() {\n                 gl_Position = aPosition;\n            }", "void main() {\n                gl_FragColor = vec4(0.4, 0.3, 0.2, 1.0);\n            }");
    }
    Object.defineProperty(Scenegraph.prototype, "loaded", {
        get: function () {
            for (var _i = 0, _a = this.textfiles; _i < _a.length; _i++) {
                var t = _a[_i];
                if (!t.loaded)
                    return false;
            }
            for (var _b = 0, _c = this.imagefiles; _b < _c.length; _b++) {
                var i = _c[_b];
                if (!i.loaded)
                    return false;
            }
            for (var _d = 0, _e = this.shaderSrcFiles; _d < _e.length; _d++) {
                var s = _e[_d];
                if (!s.loaded)
                    return false;
            }
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Scenegraph.prototype, "failed", {
        get: function () {
            for (var _i = 0, _a = this.textfiles; _i < _a.length; _i++) {
                var t = _a[_i];
                if (t.failed)
                    return true;
            }
            for (var _b = 0, _c = this.imagefiles; _b < _c.length; _b++) {
                var i = _c[_b];
                if (i.failed)
                    return true;
            }
            for (var _d = 0, _e = this.shaderSrcFiles; _d < _e.length; _d++) {
                var s = _e[_d];
                if (s.failed)
                    return true;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Scenegraph.prototype, "percentLoaded", {
        get: function () {
            var a = 0;
            for (var _i = 0, _a = this.textfiles; _i < _a.length; _i++) {
                var t = _a[_i];
                if (t.loaded)
                    a++;
            }
            for (var _b = 0, _c = this.imagefiles; _b < _c.length; _b++) {
                var i = _c[_b];
                if (i.loaded)
                    a++;
            }
            for (var _d = 0, _e = this.shaderSrcFiles; _d < _e.length; _d++) {
                var s = _e[_d];
                if (s.loaded)
                    a++;
            }
            return 100.0 * a / (this.textfiles.length + this.imagefiles.length + this.shaderSrcFiles.length);
        },
        enumerable: true,
        configurable: true
    });
    Scenegraph.prototype.Load = function (url) {
        var name = Utils.GetURLResource(url);
        var self = this;
        var assetType;
        var ext = Utils.GetExtension(name);
        var path = Utils.GetURLPath(url);
        if (ext == "scn")
            assetType = SGAssetType.Scene;
        else if (ext == "obj")
            assetType = SGAssetType.GeometryGroup;
        else if (ext == "mtl")
            assetType = SGAssetType.MaterialLibrary;
        else if (ext == "png")
            assetType = SGAssetType.Image;
        else if (ext == "jpg")
            assetType = SGAssetType.Image;
        else
            return;
        console.log("Scenegraph::Load() => Requesting " + url);
        if (assetType == SGAssetType.Image) {
            if (this._textures.has(name))
                return;
            this.imagefiles.push(new Utils.ImageFileLoader(url, function (data, name, assetType) {
                self.processTextureMap(data, name, assetType);
                console.log("Scenegraph::Load() => loaded " + self.percentLoaded + "% " + name);
                var log = document.getElementById("log");
                if (log) {
                    log.innerText = "Loaded " + self.percentLoaded + "% " + name;
                }
            }));
        }
        else {
            this.textfiles.push(new Utils.TextFileLoader(url, function (data, name, assetType) {
                self.processTextFile(data, name, path, assetType);
                console.log("Scenegraph::Load() => loaded " + self.percentLoaded + "% " + name);
                var log = document.getElementById("log");
                if (log) {
                    log.innerText = "Loaded " + self.percentLoaded + "% " + name;
                }
            }, assetType));
        }
    };
    Scenegraph.prototype.AddRenderConfig = function (name, vertshaderUrl, fragshaderUrl) {
        var _this = this;
        var self = this;
        this.shaderSrcFiles.push(new Utils.ShaderLoader(vertshaderUrl, fragshaderUrl, function (vertShaderSource, fragShaderSource) {
            _this._renderConfigs.set(name, new RenderConfig(_this._renderingContext, vertShaderSource, fragShaderSource));
            console.log("Scenegraph::Load() => loaded " + vertshaderUrl);
            console.log("Scenegraph::Load() => loaded " + fragshaderUrl);
            console.log("Scenegraph::Load() => loaded " + self.percentLoaded + "% " + name);
            var log = document.getElementById("log");
            if (log) {
                log.innerText = "Loaded " + self.percentLoaded + "% " + name;
            }
        }));
    };
    Scenegraph.prototype.UseRenderConfig = function (name) {
        var rc = this._renderConfigs.get(name);
        if (rc) {
            rc.Use();
            return rc;
        }
        return this._defaultRenderConfig;
    };
    Scenegraph.prototype.UseMaterial = function (rc, mtllib, mtl) {
    };
    Scenegraph.prototype.RenderMesh = function (name, rc) {
        if (name.length == 0) {
            for (var _i = 0, _a = this._meshes; _i < _a.length; _i++) {
                var mesh_1 = _a[_i];
                mesh_1["1"].Render(rc, this);
            }
            return;
        }
        var mesh = this._meshes.get(name);
        if (mesh) {
            mesh.Render(rc, this);
        }
    };
    Scenegraph.prototype.UseTexture = function (textureName, unit, enable) {
        if (enable === void 0) { enable = true; }
        var texunit = unit | 0;
        var gl = this._renderingContext.gl;
        var t = this._textures.get(textureName);
        if (!t) {
            var alias = this._sceneResources.get(textureName);
            if (alias) {
                t = this._textures.get(alias);
            }
        }
        if (t) {
            if (unit <= 31) {
                unit += gl.TEXTURE0;
            }
            gl.activeTexture(unit);
            if (enable) {
                gl.bindTexture(t.target, t.texture);
            }
            else {
                gl.bindTexture(t.target, null);
            }
        }
        if (!t) {
            gl.bindTexture(gl.TEXTURE_2D, null);
            gl.bindTexture(gl.TEXTURE_CUBE_MAP, null);
        }
        gl.activeTexture(gl.TEXTURE0);
    };
    Scenegraph.prototype.RenderScene = function (shaderName, sceneName) {
        var rc = this.UseRenderConfig(shaderName);
        if (!rc) {
            console.error("Scenegraph::RenderScene(): \"" + shaderName + "\" is not a render config");
            return;
        }
        for (var _i = 0, _a = this._nodes; _i < _a.length; _i++) {
            var node = _a[_i];
            if (sceneName.length > 0 && node.parent != sceneName) {
                continue;
            }
            var mesh = this._meshes.get(node.name);
            if (mesh) {
                mesh.Render(rc, this);
            }
        }
        rc.Restore();
    };
    Scenegraph.prototype.processTextFile = function (data, name, path, assetType) {
        var textParser = new TextParser(data);
        switch (assetType) {
            // ".SCN"
            case SGAssetType.Scene:
                this.loadScene(textParser.lines, name, path);
                break;
            // ".OBJ"
            case SGAssetType.GeometryGroup:
                this.loadOBJ(textParser.lines, name, path);
                break;
            // ".MTL"
            case SGAssetType.MaterialLibrary:
                this.loadMTL(textParser.lines, name, path);
                break;
        }
    };
    Scenegraph.prototype.processTextureMap = function (image, name, assetType) {
        var gl = this._renderingContext.gl;
        if (image.width == 6 * image.height) {
            var images = new Array(6);
            Utils.SeparateCubeMapImages(image, images);
            var texture = gl.createTexture();
            if (texture) {
                gl.bindTexture(gl.TEXTURE_CUBE_MAP, texture);
                for (var i = 0; i < 6; i++) {
                    if (!images[i]) {
                        continue;
                    }
                    else {
                        console.log("image " + i + " w:" + images[i].width + "/h:" + images[i].height);
                    }
                    gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, images[i]);
                }
                gl.generateMipmap(gl.TEXTURE_CUBE_MAP);
                var t = new Texture(this._renderingContext, name, name, gl.TEXTURE_CUBE_MAP, texture);
                this._textures.set(name, t);
            }
        }
        else {
            var texture = gl.createTexture();
            if (texture) {
                gl.bindTexture(gl.TEXTURE_2D, texture);
                gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
                gl.generateMipmap(gl.TEXTURE_2D);
                var t = new Texture(this._renderingContext, name, name, gl.TEXTURE_2D, texture);
                this._textures.set(name, t);
            }
        }
    };
    Scenegraph.prototype.loadScene = function (lines, name, path) {
        // sundir <direction: Vector3>
        // camera <eye: Vector3> <center: Vector3> <up: Vector3>
        // transform <worldMatrix: Matrix4>
        // geometryGroup <objUrl: string>
        for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
            var tokens = lines_1[_i];
            if (tokens[0] == "enviroCube") {
                this._sceneResources.set("enviroCube", Utils.GetURLResource(tokens[1]));
                this.Load(path + tokens[1]);
            }
            else if (tokens[0] == "transform") {
                this._tempNode.transform = TextParser.ParseMatrix(tokens);
            }
            else if (tokens[0] == "geometryGroup") {
                this._tempNode.parent = name;
                this._tempNode.name = tokens[1];
                this._tempNode.geometryGroup = TextParser.ParseIdentifier(tokens);
                this.Load(path + tokens[1]);
                this._nodes.push(this._tempNode);
                this._tempNode = new ScenegraphNode();
            }
        }
    };
    Scenegraph.prototype.loadOBJ = function (lines, name, path) {
        // mtllib <mtlUrl: string>
        // usemtl <name: string>
        // v <position: Vector3>
        // vn <normal: Vector3>
        // vt <texcoord: Vector2|Vector3>
        // vc <color: Vector4>
        // f <v1: number> <v2: number> <v3: number>
        // f <v1: number>/<vt1:number> <v2: number>/<vt2:number> <v2: number>/<vt2:number>
        // f <v1: number>//<vt1:number> <v2: number>//<vt2:number> <v2: number>//<vt2:number>
        // f <v1: number>/<vn1:number>/<vt1:number> <v2: number>/<vn2:number>/<vt2:number> <v2: number>/<vn3:number>/<vt2:number>
        // o <objectName: string>
        // g <newSmoothingGroup: string>
        // s <newSmoothingGroup: string>
        var gl = this._renderingContext.gl;
        var mesh = new IndexedGeometryMesh(this._renderingContext);
        var positions = [];
        var normals = [];
        var texcoords = [];
        var indices = [];
        mesh.BeginSurface(gl.TRIANGLES);
        for (var _i = 0, lines_2 = lines; _i < lines_2.length; _i++) {
            var tokens = lines_2[_i];
            if (tokens.length >= 2) {
                if (tokens[0] === 'usemtl') {
                    mesh.BeginSurface(gl.TRIANGLES);
                    var name_1 = TextParser.ParseIdentifier(tokens);
                    mesh.SetMtl(name_1);
                }
                else if (tokens[0] === 'mtllib') {
                    var name_2 = tokens[1];
                    // We want to also load this up asynchronously later
                    mesh.SetMtllib(name_2);
                }
                else if (tokens[0] === 'g') {
                    mesh.BeginSurface(gl.TRIANGLES);
                }
                else if (tokens[0] === 'o') {
                    mesh.BeginSurface(gl.TRIANGLES);
                }
                else if (tokens[0] === 's') {
                    mesh.BeginSurface(gl.TRIANGLES);
                }
            }
            if (tokens.length >= 4) {
                //console.log(tokens);
                if (tokens[0] === 'v') {
                    var v = TextParser.ParseVector(tokens);
                    positions.push(v);
                }
                else if (tokens[0] === 'vn') {
                    var vn = TextParser.ParseVector(tokens);
                    normals.push(vn);
                }
                else if (tokens[0] === 'vt') {
                    var vt = TextParser.ParseVector(tokens);
                    texcoords.push(vt);
                }
                else if (tokens[0] === 'f') {
                    if (mesh.surfaces.length === 0) {
                        mesh.BeginSurface(gl.TRIANGLES);
                    }
                    var faceIndices = TextParser.ParseFace(tokens);
                    for (var i = 0; i < 3; ++i) {
                        if (faceIndices[i * 3 + 2] && faceIndices[i * 3 + 2] >= 0) {
                            var normIndex = faceIndices[i * 3 + 2];
                            var normVal = normals[normIndex];
                            mesh.SetNormal(normVal);
                        }
                        if (faceIndices[i * 3 + 1] && faceIndices[i * 3 + 1] >= 0) {
                            mesh.SetTexCoord(texcoords[faceIndices[i * 3 + 1]]);
                        }
                        mesh.AddVertex(positions[faceIndices[i * 3 + 0]]);
                        mesh.AddIndex(-1);
                    }
                }
            }
        }
        mesh.BuildBuffers(gl);
        this._meshes.set(name, mesh);
    };
    Scenegraph.prototype.loadMTL = function (lines, name, path) {
        // newmtl <name: string>
        // Kd <color: Vector3>
        // Ks <color: Vector3>
        // map_Kd <url: string>
        // map_Ks <url: string>
        // map_normal <url: string>
        for (var _i = 0, lines_3 = lines; _i < lines_3.length; _i++) {
            var tokens = lines_3[_i];
            if (tokens[0] == "map_Kd") {
                this.Load(path + tokens[1]);
            }
            else if (tokens[0] == "map_Ks") {
                this.Load(path + tokens[1]);
            }
            else if (tokens[0] == "map_normal") {
                this.Load(path + tokens[1]);
            }
            else {
                // console.log("MTLLIB: Ignoring");
                // for (let t of tokens) {
                //     console.log("\"" + t + "\"");
                // }
            }
        }
    };
    return Scenegraph;
}());
var Surface = /** @class */ (function () {
    function Surface(mode, offset, mtllib, mtl) {
        this.mode = mode;
        this.offset = offset;
        this.mtllib = mtllib;
        this.mtl = mtl;
        this.count = 0;
    }
    Surface.prototype.Add = function () {
        this.count++;
    };
    return Surface;
}());
var TextParser = /** @class */ (function () {
    function TextParser(data) {
        this.lines = [];
        // split using regex any sequence of 1 or more newlines or carriage returns
        var lines = data.split(/[\n\r]+/);
        for (var _i = 0, lines_4 = lines; _i < lines_4.length; _i++) {
            var line = lines_4[_i];
            var unfilteredTokens = line.split(/\s+/);
            var tokens = [];
            for (var _a = 0, unfilteredTokens_1 = unfilteredTokens; _a < unfilteredTokens_1.length; _a++) {
                var t = unfilteredTokens_1[_a];
                if (t.length > 0) {
                    if (t[0] != '#') {
                        tokens.push(t);
                    }
                }
            }
            if (tokens.length == 0) {
                continue;
            }
            this.lines.push(tokens);
        }
    }
    TextParser.ParseIdentifier = function (tokens) {
        if (tokens.length >= 2)
            return tokens[1].replace(/[^\w]+/, "_");
        return "unknown";
    };
    TextParser.ParseVector = function (tokens) {
        var x = (tokens.length >= 2) ? parseFloat(tokens[1]) : 0.0;
        var y = (tokens.length >= 3) ? parseFloat(tokens[2]) : 0.0;
        var z = (tokens.length >= 4) ? parseFloat(tokens[3]) : 0.0;
        return new Vector3(x, y, z);
    };
    TextParser.ParseMatrix = function (tokens) {
        if (tokens.length > 16 && tokens[0] == "transform") {
            var m = new Matrix4(parseFloat(tokens[1]), parseFloat(tokens[2]), parseFloat(tokens[3]), parseFloat(tokens[4]), parseFloat(tokens[5]), parseFloat(tokens[6]), parseFloat(tokens[7]), parseFloat(tokens[8]), parseFloat(tokens[9]), parseFloat(tokens[10]), parseFloat(tokens[11]), parseFloat(tokens[12]), parseFloat(tokens[13]), parseFloat(tokens[14]), parseFloat(tokens[15]), parseFloat(tokens[16]));
            return m;
        }
        return Matrix4.makeZero();
    };
    TextParser.ParseFaceIndices = function (token) {
        var indices = [0, 0, 0];
        if (token.search("//"))
            token = token.replace("//", "/0/");
        var tokens = token.split("/");
        // console.log(tokens);
        if (tokens.length >= 1) {
            indices[0] = parseInt(tokens[0]) - 1;
        }
        if (tokens.length == 2) {
            indices[2] = parseInt(tokens[2]) - 1;
        }
        else if (tokens.length == 3) {
            indices[1] = parseInt(tokens[1]) - 1;
            indices[2] = parseInt(tokens[2]) - 1;
        }
        // console.log(indices);
        return indices;
    };
    TextParser.ParseFace = function (tokens) {
        var indices = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        if (tokens.length < 4) {
            return indices;
        }
        var v1 = TextParser.ParseFaceIndices(tokens[1]);
        var v2 = TextParser.ParseFaceIndices(tokens[2]);
        var v3 = TextParser.ParseFaceIndices(tokens[3]);
        return v1.concat(v2, v3);
    };
    return TextParser;
}());
var Vertex = /** @class */ (function () {
    function Vertex(position, normal, color, texcoord) {
        if (position === void 0) { position = new Vector3(0, 0, 0); }
        if (normal === void 0) { normal = new Vector3(0, 0, 1); }
        if (color === void 0) { color = new Vector3(1, 1, 1); }
        if (texcoord === void 0) { texcoord = new Vector3(0, 0, 0); }
        this.position = position;
        this.normal = normal;
        this.color = color;
        this.texcoord = texcoord;
    }
    Vertex.prototype.asFloat32Array = function () {
        return new Float32Array([
            this.position.x, this.position.y, this.position.z,
            this.normal.x, this.normal.y, this.normal.z,
            this.color.x, this.color.y, this.color.z,
            this.texcoord.x, this.texcoord.y, this.texcoord.z
        ]);
    };
    Vertex.prototype.asArray = function () {
        return [
            this.position.x, this.position.y, this.position.z,
            this.normal.x, this.normal.y, this.normal.z,
            this.color.x, this.color.y, this.color.z,
            this.texcoord.x, this.texcoord.y, this.texcoord.z
        ];
    };
    return Vertex;
}());
;
var WebGLAppHW0 = /** @class */ (function () {
    function WebGLAppHW0(width, height) {
        if (width === void 0) { width = 512; }
        if (height === void 0) { height = 384; }
        this.width = width;
        this.height = height;
        this.vbo = null;
        this.aspectRatio = 1.0;
        this.t0 = 0;
        this.t1 = 0;
        this.dt = 0;
        this.renderingContext = new RenderingContext(width, height);
        if (!this.renderingContext)
            throw "Unable to create rendering context!";
        this.scenegraph = new Scenegraph(this.renderingContext);
    }
    WebGLAppHW0.prototype.run = function () {
        this.init();
        this.mainloop(0);
    };
    WebGLAppHW0.prototype.init = function () {
        var gl = this.renderingContext.gl;
        this.vbo = new HW0StaticVertexBufferObject(gl, gl.TRIANGLES, new Float32Array([
            -1, -1, 0,
            1, -1, 0,
            0, 1, 0
        ]));
        this.scenegraph.AddRenderConfig("default", "shaders/rtr-homework0.vert", "shaders/rtr-homework0.frag");
    };
    WebGLAppHW0.prototype.mainloop = function (timestamp) {
        var self = this;
        this.t0 = this.t1;
        this.t1 = timestamp / 1000.0;
        this.dt = this.t1 - this.t0;
        this.update();
        this.display();
        window.requestAnimationFrame(function (t) {
            self.mainloop(t);
        });
    };
    WebGLAppHW0.prototype.update = function () {
        // update sim/game loop code here
        // this.t1 = elapsed time of program
        // this.dt = elapsed time between frames
    };
    WebGLAppHW0.prototype.display = function () {
        if (!this.renderingContext)
            return;
        var gl = this.renderingContext.gl;
        gl.clearColor(0.2, 0.2 + 0.2 * Math.sin(this.t1), 0.2, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT || gl.DEPTH_BUFFER_BIT);
        gl.viewport(0, 0, this.renderingContext.width, this.renderingContext.height);
        var rc = this.scenegraph.UseRenderConfig("default");
        if (rc.usable && this.vbo) {
            rc.Use();
            rc.SetUniform3f("SunDirTo", Vector3.makeUnit(0.25, 0.5, Math.sin(this.t1)));
            rc.SetUniform3f("SunE0", Vector3.make(1.0, 1.0, 1.0).mul(Math.sin(this.t1)));
            rc.SetMatrix4f("ProjectionMatrix", Matrix4.makePerspectiveX(45.0, this.renderingContext.aspectRatio, 0.1, 100.0));
            rc.SetMatrix4f("CameraMatrix", Matrix4.makeTranslation(0.0, 0.0, -5.0));
            rc.SetMatrix4f("WorldMatrix", Matrix4.makeRotation(10 * this.t1, 0.0, 1.0, 0.0));
            this.vbo.Render(rc.GetAttribLocation("aPosition"));
            rc.Restore();
        }
        gl.useProgram(null);
    };
    return WebGLAppHW0;
}());
var WebGLAppHW1 = /** @class */ (function () {
    function WebGLAppHW1(width, height) {
        if (width === void 0) { width = 512; }
        if (height === void 0) { height = 384; }
        this.width = width;
        this.height = height;
        this.aspectRatio = 1.0;
        this.t0 = 0;
        this.t1 = 0;
        this.dt = 0;
        this.renderingContext = new RenderingContext(width, height);
        if (!this.renderingContext)
            throw "Unable to create rendering context!";
        console.log('hello');
        this.scenegraph = new Scenegraph(this.renderingContext);
    }
    WebGLAppHW1.prototype.run = function () {
        this.init();
        this.mainloop(0);
    };
    WebGLAppHW1.prototype.init = function () {
        this.scenegraph.AddRenderConfig("default", "shaders/rtr-homework1.vert", "shaders/rtr-homework1.frag");
        this.scenegraph.Load("../assets/test_scene.scn");
    };
    WebGLAppHW1.prototype.mainloop = function (timestamp) {
        var self = this;
        this.t0 = this.t1;
        this.t1 = timestamp / 1000.0;
        this.dt = this.t1 - this.t0;
        this.update();
        this.display();
        window.requestAnimationFrame(function (t) {
            self.mainloop(t);
        });
    };
    WebGLAppHW1.prototype.update = function () {
        // update sim/game loop code here
        // this.t1 = elapsed time of program
        // this.dt = elapsed time between frames
    };
    WebGLAppHW1.prototype.display = function () {
        if (!this.renderingContext)
            return;
        var gl = this.renderingContext.gl;
        gl.clearColor(0.2, 0.15 * Math.sin(this.t1) + 0.15, 0.4, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT || gl.DEPTH_BUFFER_BIT);
        gl.viewport(0, 0, this.renderingContext.width, this.renderingContext.height);
        var rc = this.scenegraph.UseRenderConfig("default");
        if (rc) {
            rc.Use();
            rc.SetUniform3f("SunDirTo", Vector3.makeUnit(0.25, 0.5, Math.sin(this.t1)));
            rc.SetUniform3f("SunE0", Vector3.make(1.0, 1.0, 1.0).mul(Math.sin(this.t1)));
            rc.SetMatrix4f("ProjectionMatrix", Matrix4.makePerspectiveX(45.0, this.renderingContext.aspectRatio, 0.1, 100.0));
            rc.SetMatrix4f("CameraMatrix", Matrix4.makeTranslation(0.0, 0.0, -1.5));
            var m = Matrix4.makeRotation(5 * Math.sin(10 * this.t1), 1.0, 0.0, 0.0);
            m.Rotate(10.0 * this.t1, 0.0, 1.0, 0.0);
            rc.SetMatrix4f("WorldMatrix", m); //Matrix4.makeRotation(10 * this.t1, 0.0, 1.0, 0.0));
            // rc.SetMatrix4f("ProjectionMatrix", Matrix4.makeIdentity());
            // rc.SetMatrix4f("CameraMatrix", Matrix4.makeIdentity());
            // rc.SetMatrix4f("WorldMatrix", Matrix4.makeIdentity());
            // "" renders everything
            this.scenegraph.RenderMesh("dragon.obj", rc);
            rc.Restore();
        }
        gl.useProgram(null);
    };
    return WebGLAppHW1;
}());
