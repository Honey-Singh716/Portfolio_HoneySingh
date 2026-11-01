# generate_pdf.py
import os

def create_resume_pdf(filename):
    objects = []
    
    def add_object(content_bytes):
        obj_num = len(objects) + 1
        objects.append(content_bytes)
        return obj_num

    # We will build the content stream with text commands
    stream_lines = []
    
    def draw_text(font, size, x, y, text):
        escaped = text.replace('\\', '\\\\').replace('(', '\\(').replace(')', '\\)')
        stream_lines.append(f"BT /{font} {size} Tf 1 0 0 1 {x} {y} Tm ({escaped}) Tj ET")

    def draw_line(x1, y1, x2, y2, r=0.2, g=0.2, b=0.3, width=0.75):
        stream_lines.append(f"{r} {g} {b} RG {width} w {x1} {y1} m {x2} {y2} l S")

    # Page Header
    draw_text("F2", 22, 50, 785, "HONEY SINGH")
    draw_text("F1", 10.5, 50, 768, "Software Engineer | Backend Development | AI & Machine Learning")
    draw_text("F1", 9, 50, 752, "India  |  honeysingh.dev@gmail.com  |  github.com/Honey-Singh716  |  linkedin.com/in/honey-singh-716")
    draw_line(50, 742, 545, 742, 0.3, 0.4, 0.6, 1.2)

    # Section: EDUCATION
    y = 722
    draw_text("F2", 12, 50, y, "EDUCATION")
    draw_line(50, y - 4, 545, y - 4, 0.7, 0.7, 0.8, 0.5)
    
    y -= 18
    draw_text("F2", 10.5, 50, y, "Bachelor of Technology (B.Tech) - Artificial Intelligence & Data Science")
    draw_text("F1", 9.5, 475, y, "Pursuing")
    y -= 14
    draw_text("F1", 9.5, 50, y, "Core Coursework: Data Structures, Algorithms, Operating Systems, Database Systems, Machine Learning")

    # Section: TECHNICAL SKILLS
    y -= 26
    draw_text("F2", 12, 50, y, "TECHNICAL SKILLS")
    draw_line(50, y - 4, 545, y - 4, 0.7, 0.7, 0.8, 0.5)

    y -= 18
    draw_text("F2", 9.5, 50, y, "Languages:")
    draw_text("F1", 9.5, 125, y, "C++, Java, Python, JavaScript, TypeScript, SQL")
    
    y -= 14
    draw_text("F2", 9.5, 50, y, "Backend:")
    draw_text("F1", 9.5, 125, y, "Node.js, Express.js, FastAPI, REST APIs, Authentication & RBAC, Microservices")
    
    y -= 14
    draw_text("F2", 9.5, 50, y, "Databases & Cache:")
    draw_text("F1", 9.5, 125, y, "PostgreSQL, Redis, Database Design, Schema Optimization")
    
    y -= 14
    draw_text("F2", 9.5, 50, y, "AI & Machine Learning:")
    draw_text("F1", 9.5, 125, y, "NLP, LLM Applications, RAG Architecture, Vector Embeddings, NumPy, Pandas")

    y -= 14
    draw_text("F2", 9.5, 50, y, "Concepts & Tools:")
    draw_text("F1", 9.5, 125, y, "OOP, System Design, Distributed Systems, Git, Docker, Linux, Huffman Coding")

    # Section: FEATURED PROJECTS
    y -= 26
    draw_text("F2", 12, 50, y, "SELECTED PROJECTS")
    draw_line(50, y - 4, 545, y - 4, 0.7, 0.7, 0.8, 0.5)

    # Project 1
    y -= 18
    draw_text("F2", 10.5, 50, y, "AI-Powered Resume Matching & Job Recommendation Platform")
    draw_text("F3", 9, 440, y, "FastAPI, PostgreSQL, Redis, RAG")
    y -= 14
    draw_text("F1", 9, 58, y, "* Developed an intelligent candidate-matching engine using semantic text embeddings and cosine similarity.")
    y -= 12
    draw_text("F1", 9, 58, y, "* Integrated RAG pipeline to extract contextual criteria from unstructured job postings.")
    y -= 12
    draw_text("F1", 9, 58, y, "* Utilized Redis caching to accelerate recommendation queries and PostgreSQL with pgvector for vector search.")

    # Project 2
    y -= 18
    draw_text("F2", 10.5, 50, y, "ResolveX - Multi-Tenant Issue Management Platform")
    draw_text("F3", 9, 440, y, "Node.js, Express, PostgreSQL, Redis")
    y -= 14
    draw_text("F1", 9, 58, y, "* Engineered a production-grade multi-tenant issue tracking platform with strict workspace and tenant isolation.")
    y -= 12
    draw_text("F1", 9, 58, y, "* Implemented JWT authentication, granular Role-Based Access Control (RBAC), and session revocation.")
    y -= 12
    draw_text("F1", 9, 58, y, "* Designed relational schemas with foreign key constraints, indexing, and high-concurrency ticket state machines.")

    # Project 3
    y -= 18
    draw_text("F2", 10.5, 50, y, "MiniRedis - In-Memory Key-Value Store")
    draw_text("F3", 9, 465, y, "C++, Networking, Sockets")
    y -= 14
    draw_text("F1", 9, 58, y, "* Built an in-memory key-value cache engine from scratch supporting GET, SET, DEL, EXPIRE, and TTL.")
    y -= 12
    draw_text("F1", 9, 58, y, "* Implemented custom RESP (Redis Serialization Protocol) parser and TCP socket event loops in C++.")

    # Project 4
    y -= 18
    draw_text("F2", 10.5, 50, y, "FileCompressor - Lossless Data Compression")
    draw_text("F3", 9, 465, y, "C++, Data Structures")
    y -= 14
    draw_text("F1", 9, 58, y, "* Implemented Huffman Coding algorithm for lossless binary file compression and decompression.")
    y -= 12
    draw_text("F1", 9, 58, y, "* Handled bitwise I/O streams and prefix-free variable-length binary encoding trees.")

    # Section: CODING & ACHIEVEMENTS
    y -= 26
    draw_text("F2", 12, 50, y, "PROBLEM SOLVING & PROFILES")
    draw_line(50, y - 4, 545, y - 4, 0.7, 0.7, 0.8, 0.5)

    y -= 18
    draw_text("F2", 9.5, 50, y, "LeetCode Profile:")
    draw_text("F1", 9.5, 145, y, "leetcode.com/u/honey-singh_12/ (Data Structures & Algorithm Practice in C++)")
    y -= 14
    draw_text("F2", 9.5, 50, y, "GitHub:")
    draw_text("F1", 9.5, 145, y, "github.com/Honey-Singh716 (Open-source projects, system utilities, and full-stack apps)")
    y -= 14
    draw_text("F2", 9.5, 50, y, "Kaggle:")
    draw_text("F1", 9.5, 145, y, "kaggle.com/honeysingh12coder (Exploratory Data Analysis and ML experiments)")

    content_stream = "\n".join(stream_lines).encode("latin1")
    stream_len = len(content_stream)

    # Build objects
    # 1: Catalog
    # 2: Pages
    # 3: Page
    # 4: Content Stream
    # 5: Font F1 (Helvetica)
    # 6: Font F2 (Helvetica-Bold)
    # 7: Font F3 (Helvetica-Oblique)
    
    obj1 = b"<< /Type /Catalog /Pages 2 0 R >>"
    obj2 = b"<< /Type /Pages /Kids [3 0 R] /Count 1 >>"
    obj3 = (
        b"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] "
        b"/Contents 4 0 R /Resources << /Font << "
        b"/F1 5 0 R /F2 6 0 R /F3 7 0 R "
        b">> >> >>"
    )
    obj4 = b"<< /Length " + str(stream_len).encode("latin1") + b" >>\nstream\n" + content_stream + b"\nendstream"
    obj5 = b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>"
    obj6 = b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>"
    obj7 = b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique /Encoding /WinAnsiEncoding >>"

    all_objs = [obj1, obj2, obj3, obj4, obj5, obj6, obj7]

    # Write PDF file with exact byte offsets
    with open(filename, "wb") as f:
        f.write(b"%PDF-1.4\n%\xe2\xe3\xcf\xd3\n")
        offsets = []
        for i, obj in enumerate(all_objs, start=1):
            offset = f.tell()
            offsets.append(offset)
            f.write(f"{i} 0 obj\n".encode("latin1"))
            f.write(obj)
            f.write(b"\nendobj\n")

        xref_pos = f.tell()
        f.write(f"xref\n0 {len(offsets) + 1}\n".encode("latin1"))
        f.write(b"0000000000 65535 f \n")
        for off in offsets:
            f.write(f"{off:010d} 00000 n \n".encode("latin1"))

        f.write(f"trailer\n<< /Size {len(offsets) + 1} /Root 1 0 R >>\n".encode("latin1"))
        f.write(f"startxref\n{xref_pos}\n%%EOF\n".encode("latin1"))

if __name__ == "__main__":
    create_resume_pdf("public/resume.pdf")
    create_resume_pdf("dist/resume.pdf")
    print("Successfully generated valid resume.pdf in public/ and dist/")
