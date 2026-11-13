import { ImageResponse } from "next/og";

export const alt = "Pedro Lucas Ferreira — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#f3f3ea",
          color: "#14150f",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, letterSpacing: 4, color: "#6b6c62" }}>
          PEDRO LUCAS FERREIRA · RIO DE JANEIRO, RJ
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 92, fontWeight: 800, letterSpacing: -2 }}>
            Full Stack Developer
          </div>
          <div style={{ display: "flex", marginTop: 20, fontSize: 36, color: "#1677ff" }}>
            Software Engineering · System Architecture · Cloud & DevOps
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#4a4b43" }}>
          Java · Spring Boot · Node.js · Go · Python · React · Next.js · RabbitMQ · PostgreSQL · Docker · AWS
        </div>
      </div>
    ),
    size
  );
}
