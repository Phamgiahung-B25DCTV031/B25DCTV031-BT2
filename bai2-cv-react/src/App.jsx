import Header from "./components/Header";
import Section from "./components/Section";
import SkillList from "./components/SkillList";
import ProjectList from "./components/ProjectList";

function App() {
  const personalInfo = {
    name: "Phạm Hưng",
    title: "Sinh viên Kỹ thuật Điện tử - Viễn thông",
    contact: {
      email: "pham.hung@example.com",
      phone: "09xx xxx xxx",
      address: "Hà Nội, Việt Nam"
    }
  };

  // Dữ liệu kỹ năng được đặt trong mảng và truyền qua props
  const skills = [
    { name: "HTML / CSS", level: 85 },
    { name: "JavaScript", level: 78 },
    { name: "React", level: 72 },
    { name: "Python", level: 80 }
  ];

  // Dữ liệu dự án được đặt trong mảng và truyền qua props
  const projects = [
    {
      name: "PostureGuard",
      description:
        "Website hỗ trợ phát hiện và cảnh báo tư thế ngồi học chưa đúng.",
      tech: ["React", "MediaPipe", "CSS"]
    },
    {
      name: "AIoT Voice Assistant",
      description:
        "Trợ lý giọng nói có khả năng nhận lệnh, chuyển giọng nói thành văn bản và phản hồi.",
      tech: ["Python", "STT", "TTS"]
    },
    {
      name: "Virtual Calculator",
      description:
        "Máy tính ảo xây dựng bằng React với state, props và các component tái sử dụng.",
      tech: ["React", "State", "Props"]
    }
  ];

  return (
    <main className="page">
      <div className="cv">
        <Header
          name={personalInfo.name}
          title={personalInfo.title}
          contact={personalInfo.contact}
        />

        <div className="cv-grid">
          <aside>
            <Section title="Giới thiệu">
              <p>
                Tôi là sinh viên yêu thích lập trình web và các ứng dụng AIoT.
                Mục tiêu của tôi là nâng cao kỹ năng React, JavaScript và Python
                thông qua các dự án thực tế.
              </p>
            </Section>

            <Section title="Kỹ năng">
              <SkillList skills={skills} />
            </Section>

            <Section title="Học vấn">
              <div className="timeline-item">
                <h3>PTIT</h3>
                <p>Kỹ thuật Điện tử - Viễn thông</p>
                <small>2025 - nay</small>
              </div>
            </Section>
          </aside>

          <div>
            <Section title="Dự án">
              <ProjectList projects={projects} />
            </Section>

            <Section title="Mục tiêu">
              <p>
                Trở thành lập trình viên có nền tảng tốt về frontend, hệ thống
                thông minh và Internet of Things; có khả năng tạo ra sản phẩm
                hoàn chỉnh từ ý tưởng đến triển khai.
              </p>
            </Section>

            <Section title="Sở thích">
              <div className="hobbies">
                <span>💻 Lập trình</span>
                <span>🤖 AI / IoT</span>
                <span>📚 Học công nghệ mới</span>
                <span>🎵 Âm nhạc</span>
              </div>
            </Section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
