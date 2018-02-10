
class IndexedGeometryMesh {
    public vertices: number[] = [];
    public indices: number[] = [];
    public surfaces: Surface[] = [];

    private _mtllib: string = "";
    private _mtl: string = "";
    private _vertex: Vertex = new Vertex();
    private _dirty: boolean = true;

    private _vbo: WebGLBuffer;
    private _ibo: WebGLBuffer;
    private _vboData: Float32Array = new Float32Array();
    private _iboData: Uint32Array = new Uint32Array();

    constructor(private _renderingContext: RenderingContext) {
        let gl = this._renderingContext.gl;
        let vbo = gl.createBuffer();
        let ibo = gl.createBuffer();
        if (!vbo || !ibo) throw "IndexedGeometryMesh::constructor() Unable to create buffer";
        this._vbo = vbo;
        this._ibo = ibo;
    }

    SetMtllib(mtllib: string): void {
        this._mtllib = mtllib;
    }
    SetMtl(mtl: string): void {
        this._mtl = mtl;
    }
    BeginSurface(mode: number) {
        if (this.surfaces.length == 0) {
            // if no surfaces exist, add one
            this.surfaces.push(new Surface(mode, this.indices.length, this._mtllib, this._mtl));
        }
        else if (this.currentIndexCount != 0) {
            // do not add a surface if the most recent one is empty
            this.surfaces.push(new Surface(mode, this.indices.length, this._mtllib, this._mtl));
        }
    }
    AddIndex(i: number): void {
        if (this.surfaces.length == 0) return;
        if (i < 0) {
            this.indices.push((this.vertices.length / 12) + i);
        } else {
            this.indices.push(i);
        }
        this.surfaces[this.surfaces.length - 1].Add();
        this._dirty = true;
    }
    get currentIndexCount(): number {
        if (this.surfaces.length == 0)
            return 0;
        return this.surfaces[this.surfaces.length - 1].count;
    }

    SetNormal(n: Vector3): void {
        this._vertex.normal.copy(n);
    }
    SetColor(c: Vector3): void {
        this._vertex.color.copy(c);
    }
    SetTexCoord(t: Vector3): void {
        this._vertex.texcoord.copy(t);
    }
    AddVertex(v: Vector3): void {
        this._vertex.position.copy(v);
        this.vertices.push(...this._vertex.asArray());
        this._vertex = new Vertex();
    }

    BuildBuffers(gl): void {
        // Building the VBO goes here
        if (!this._dirty) return;

        // TODO: Create and upload the vertex and element array buffers here

        const vertexBufferData = new Float32Array(this.vertices);
        gl.bindBuffer(gl.ARRAY_BUFFER, this._vbo);
        gl.bufferData(gl.ARRAY_BUFFER, vertexBufferData, gl.STATIC_DRAW);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);

        const elementBufferData = new Uint32Array(this.indices);

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this._ibo);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, elementBufferData, gl.STATIC_DRAW);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);

        console.log('elements added', elementBufferData);
        console.log('vertices added', vertexBufferData)

        this._dirty = false;
    }

    Render(rc: RenderConfig, sg: Scenegraph): void {
        // Rendering code goes here
        let gl = this._renderingContext.gl;
        this.BuildBuffers(gl);

        gl.bindBuffer(gl.ARRAY_BUFFER, this._vbo);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this._ibo);

        // Assume our vertex buffer is laid out as
        // V0 [ vx, vy, vz, nx, ny, nz, u, v, w, r, g, b ]
        const voffset = 0, vsize = 3;
        const noffset = 12, nsize = 3;
        const toffset = 24, tsize = 3;
        const coffset = 36, csize = 3;
        const stride = 48;

        const  positionName = 'aPosition';
        const  normalName = 'aNormal';
        const  texcoordName = 'aTexcoord';
        const  colorName = 'aColor';

        const vloc = rc.GetAttribLocation(positionName);
        const nloc = rc.GetAttribLocation(normalName);
        const tloc = rc.GetAttribLocation(texcoordName);
        const cloc = rc.GetAttribLocation(colorName);

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
        for (const surface of this.surfaces) {
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
    }
}
