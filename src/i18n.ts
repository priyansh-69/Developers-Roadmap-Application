// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector) // Automatically detect user language
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    fallbackLng: 'en',
    debug: false,
    interpolation: { escapeValue: false },
    resources: {
      en: {
        translation: {
          appName: "Developer Roadmap",
          searchPlaceholder: "Search roadmap topics...",
          roadmap: {
            frontend: {
              title: "Frontend Development",
              description: "Master modern frontend development with React, TypeScript, and essential web technologies.",
              steps: {
                htmlCss: {
                  title: "HTML & CSS Fundamentals",
                  description: "Learn the building blocks of web development with semantic HTML and modern CSS techniques."
                },
                jsTs: {
                  title: "JavaScript & TypeScript",
                  description: "Understand the core of programming with JavaScript and leverage TypeScript for type safety."
                },
                react: {
                  title: "React & Modern Frontend Frameworks",
                  description: "Build dynamic UIs with React and learn state management, hooks, and component design."
                },
                accessibility: {
                  title: "Web Accessibility & Performance",
                  description: "Ensure your applications are accessible and performant across devices using best practices."
                }
              }
            },
            backend: {
              title: "Backend Development",
              description: "Build scalable server-side applications and APIs using modern frameworks and databases.",
              steps: {
                nodeExpress: {
                  title: "Node.js & Express",
                  description: "Create server-side applications with Node.js and the Express framework."
                },
                databases: {
                  title: "Databases",
                  description: "Learn both SQL and NoSQL databases for effective data storage and retrieval."
                },
                apiDev: {
                  title: "API Development & REST",
                  description: "Design and build robust RESTful APIs to enable communication between services."
                },
                authSecurity: {
                  title: "Authentication & Security",
                  description: "Implement secure authentication and authorization, and protect against common vulnerabilities."
                }
              }
            },
            devops: {
              title: "DevOps & Cloud",
              description: "Learn how to deploy, manage, and scale applications using modern DevOps practices and cloud services.",
              steps: {
                gitGithub: {
                  title: "Git & GitHub",
                  description: "Master version control and collaborative development using Git and GitHub."
                },
                dockerKubernetes: {
                  title: "Docker & Kubernetes",
                  description: "Containerize your applications with Docker and manage clusters using Kubernetes."
                },
                ciCd: {
                  title: "CI/CD & Automation",
                  description: "Automate your deployment pipelines with continuous integration and delivery tools."
                },
                cloudProviders: {
                  title: "Cloud Providers",
                  description: "Explore cloud platforms and deploy scalable applications on AWS, GCP, or Azure."
                }
              }
            }
          },
          badgeMessages: {
            justBeginning: "Just Beginning",
            gettingStarted: "Getting Started",
            halfwayThere: "Halfway There!",
            almostThere: "Almost There!",
            master: "Roadmap Master"
          }
        }
      },
      es: {
        translation: {
          appName: "Developer Roadmap", // App name remains in English
          searchPlaceholder: "Buscar temas de la hoja de ruta...",
          roadmap: {
            frontend: {
              title: "Desarrollo Frontend",
              description: "Domina el desarrollo frontend moderno con React, TypeScript y tecnologías web esenciales.",
              steps: {
                htmlCss: {
                  title: "Fundamentos de HTML y CSS",
                  description: "Aprende los componentes básicos del desarrollo web con HTML semántico y CSS moderno."
                },
                jsTs: {
                  title: "JavaScript y TypeScript",
                  description: "Comprende lo básico de la programación con JavaScript y aprovecha TypeScript para mayor seguridad."
                },
                react: {
                  title: "React y Frameworks Frontend Modernos",
                  description: "Construye interfaces dinámicas con React y aprende gestión de estado, hooks y diseño de componentes."
                },
                accessibility: {
                  title: "Accesibilidad y Rendimiento Web",
                  description: "Asegura que tus aplicaciones sean accesibles y tengan un rendimiento óptimo en distintos dispositivos."
                }
              }
            },
            backend: {
              title: "Desarrollo Backend",
              description: "Crea aplicaciones del lado del servidor y APIs usando frameworks y bases de datos modernas.",
              steps: {
                nodeExpress: {
                  title: "Node.js y Express",
                  description: "Desarrolla servicios backend con Node.js y el framework Express."
                },
                databases: {
                  title: "Bases de Datos",
                  description: "Trabaja con bases de datos SQL y NoSQL para un almacenamiento y recuperación efectivos."
                },
                apiDev: {
                  title: "Desarrollo de APIs & REST",
                  description: "Diseña y crea APIs RESTful robustas para la comunicación entre servicios."
                },
                authSecurity: {
                  title: "Autenticación & Seguridad",
                  description: "Implementa autenticación segura y protege contra vulnerabilidades comunes."
                }
              }
            },
            devops: {
              title: "DevOps & Nube",
              description: "Aprende a implementar, gestionar y escalar aplicaciones con prácticas modernas de DevOps y servicios en la nube.",
              steps: {
                gitGithub: {
                  title: "Git & GitHub",
                  description: "Domina el control de versiones y el desarrollo colaborativo con Git y GitHub."
                },
                dockerKubernetes: {
                  title: "Docker & Kubernetes",
                  description: "Containeriza tus aplicaciones con Docker y gestiona clústeres con Kubernetes."
                },
                ciCd: {
                  title: "CI/CD & Automatización",
                  description: "Automatiza tus canalizaciones de implementación con integración y entrega continua."
                },
                cloudProviders: {
                  title: "Proveedores de Nube",
                  description: "Explora plataformas en la nube y despliega aplicaciones escalables en AWS, GCP o Azure."
                }
              }
            }
          },
          badgeMessages: {
            justBeginning: "Apenas Comenzando",
            gettingStarted: "Comenzando",
            halfwayThere: "¡A Mitad de Camino!",
            almostThere: "¡Casi Listo!",
            master: "Maestro de la Hoja de Ruta"
          }
        }
      },
      fr: {
        translation: {
          appName: "Developer Roadmap",
          searchPlaceholder: "Rechercher des sujets de feuille de route...",
          roadmap: {
            frontend: {
              title: "Développement Frontend",
              description: "Maîtrisez le développement frontend moderne avec React, TypeScript et les technologies web essentielles.",
              steps: {
                htmlCss: {
                  title: "Fondamentaux HTML & CSS",
                  description: "Apprenez les bases du développement web avec un HTML sémantique et des techniques CSS modernes."
                },
                jsTs: {
                  title: "JavaScript & TypeScript",
                  description: "Comprenez les fondamentaux de la programmation avec JavaScript et profitez de TypeScript pour la sécurité des types."
                },
                react: {
                  title: "React & Frameworks Frontend Modernes",
                  description: "Créez des interfaces dynamiques avec React et apprenez la gestion d'état, les hooks et la conception de composants."
                },
                accessibility: {
                  title: "Accessibilité & Performance Web",
                  description: "Assurez-vous que vos applications sont accessibles et performantes sur tous les appareils."
                }
              }
            },
            backend: {
              title: "Développement Backend",
              description: "Créez des applications côté serveur et des API en utilisant des frameworks et des bases de données modernes.",
              steps: {
                nodeExpress: {
                  title: "Node.js & Express",
                  description: "Développez des services backend avec Node.js et Express."
                },
                databases: {
                  title: "Bases de Données",
                  description: "Maîtrisez les bases de données SQL et NoSQL pour un stockage efficace des données."
                },
                apiDev: {
                  title: "Développement d'API & REST",
                  description: "Concevez et développez des API RESTful robustes pour la communication entre services."
                },
                authSecurity: {
                  title: "Authentification & Sécurité",
                  description: "Implémentez une authentification sécurisée et protégez contre les vulnérabilités courantes."
                }
              }
            },
            devops: {
              title: "DevOps & Cloud",
              description: "Apprenez à déployer, gérer et faire évoluer des applications à l'aide des pratiques DevOps modernes et des services cloud.",
              steps: {
                gitGithub: {
                  title: "Git & GitHub",
                  description: "Maîtrisez le contrôle de version et le développement collaboratif avec Git et GitHub."
                },
                dockerKubernetes: {
                  title: "Docker & Kubernetes",
                  description: "Containerisez vos applications avec Docker et gérez des clusters avec Kubernetes."
                },
                ciCd: {
                  title: "CI/CD & Automatisation",
                  description: "Automatisez vos pipelines de déploiement avec des outils d'intégration et de livraison continues."
                },
                cloudProviders: {
                  title: "Fournisseurs Cloud",
                  description: "Explorez les plateformes cloud et déployez des applications évolutives sur AWS, GCP ou Azure."
                }
              }
            }
          },
          badgeMessages: {
            justBeginning: "Tout juste commencé",
            gettingStarted: "Commencez",
            halfwayThere: "À mi-chemin!",
            almostThere: "Presque prêt!",
            master: "Maître de la feuille de route"
          }
        }
      },
      de: {
        translation: {
          appName: "Developer Roadmap",
          searchPlaceholder: "Suche Roadmap-Themen...",
          roadmap: {
            frontend: {
              title: "Frontend-Entwicklung",
              description: "Meistere moderne Frontend-Entwicklung mit React, TypeScript und wichtigen Webtechnologien.",
              steps: {
                htmlCss: {
                  title: "HTML & CSS Grundlagen",
                  description: "Lerne die Grundlagen der Webentwicklung mit semantischem HTML und modernen CSS-Techniken."
                },
                jsTs: {
                  title: "JavaScript & TypeScript",
                  description: "Verstehe die Grundlagen der Programmierung mit JavaScript und nutze TypeScript für Typsicherheit."
                },
                react: {
                  title: "React & moderne Frontend-Frameworks",
                  description: "Erstelle dynamische Benutzeroberflächen mit React und lerne State Management, Hooks und Komponenten-Design."
                },
                accessibility: {
                  title: "Webzugänglichkeit & Performance",
                  description: "Stelle sicher, dass deine Anwendungen zugänglich und performant auf verschiedenen Geräten sind."
                }
              }
            },
            backend: {
              title: "Backend-Entwicklung",
              description: "Erstelle skalierbare Serveranwendungen und APIs mit modernen Frameworks und Datenbanken.",
              steps: {
                nodeExpress: {
                  title: "Node.js & Express",
                  description: "Erstelle Serveranwendungen mit Node.js und dem Express-Framework."
                },
                databases: {
                  title: "Datenbanken",
                  description: "Lerne sowohl SQL- als auch NoSQL-Datenbanken für effektive Datenspeicherung und -abfrage."
                },
                apiDev: {
                  title: "API-Entwicklung & REST",
                  description: "Entwirf und entwickle robuste RESTful APIs zur Kommunikation zwischen Diensten."
                },
                authSecurity: {
                  title: "Authentifizierung & Sicherheit",
                  description: "Implementiere sichere Authentifizierung und schütze vor häufigen Sicherheitslücken."
                }
              }
            },
            devops: {
              title: "DevOps & Cloud",
              description: "Lerne, wie du Anwendungen mit modernen DevOps-Praktiken und Cloud-Services bereitstellst, verwaltest und skalierst.",
              steps: {
                gitGithub: {
                  title: "Git & GitHub",
                  description: "Beherrsche Versionskontrolle und kollaborative Entwicklung mit Git und GitHub."
                },
                dockerKubernetes: {
                  title: "Docker & Kubernetes",
                  description: "Containerisiere deine Anwendungen mit Docker und verwalte Cluster mit Kubernetes."
                },
                ciCd: {
                  title: "CI/CD & Automatisierung",
                  description: "Automatisiere deine Deployment-Pipelines mit Continuous Integration und Delivery."
                },
                cloudProviders: {
                  title: "Cloud-Anbieter",
                  description: "Erkunde Cloud-Plattformen und setze skalierbare Anwendungen auf AWS, GCP oder Azure um."
                }
              }
            }
          },
          badgeMessages: {
            justBeginning: "Gerade erst begonnen",
            gettingStarted: "Los geht's",
            halfwayThere: "Halbzeit!",
            almostThere: "Fast geschafft!",
            master: "Roadmap-Meister"
          }
        }
      },
      zh: {
        translation: {
          appName: "Developer Roadmap",
          searchPlaceholder: "搜索路线图主题...",
          roadmap: {
            frontend: {
              title: "前端开发",
              description: "掌握现代前端开发，使用 React、TypeScript 和基本的网络技术。",
              steps: {
                htmlCss: {
                  title: "HTML & CSS 基础",
                  description: "学习网页开发的基石，掌握语义化 HTML 和现代 CSS 技巧。"
                },
                jsTs: {
                  title: "JavaScript & TypeScript",
                  description: "理解编程的核心，并使用 TypeScript 增强类型安全。"
                },
                react: {
                  title: "React 与现代前端框架",
                  description: "使用 React 构建动态用户界面，并学习状态管理、hooks 及组件设计。"
                },
                accessibility: {
                  title: "网页无障碍与性能",
                  description: "确保您的应用在各种设备上均具备无障碍性和高性能。"
                }
              }
            },
            backend: {
              title: "后端开发",
              description: "使用现代框架和数据库构建可扩展的服务器端应用程序和 API。",
              steps: {
                nodeExpress: {
                  title: "Node.js & Express",
                  description: "使用 Node.js 和 Express 框架构建服务器端应用程序。"
                },
                databases: {
                  title: "数据库",
                  description: "学习 SQL 和 NoSQL 数据库，实现高效的数据存储和检索。"
                },
                apiDev: {
                  title: "API 开发与 REST",
                  description: "设计并构建强大的 RESTful API，实现服务之间的通信。"
                },
                authSecurity: {
                  title: "认证与安全",
                  description: "实现安全的身份认证和授权，并防护常见漏洞。"
                }
              }
            },
            devops: {
              title: "DevOps 与云",
              description: "学习如何使用现代 DevOps 实践和云服务部署、管理和扩展应用程序。",
              steps: {
                gitGithub: {
                  title: "Git 与 GitHub",
                  description: "掌握版本控制与协作开发，使用 Git 和 GitHub。"
                },
                dockerKubernetes: {
                  title: "Docker 与 Kubernetes",
                  description: "使用 Docker 容器化您的应用，并使用 Kubernetes 管理集群。"
                },
                ciCd: {
                  title: "CI/CD 与自动化",
                  description: "利用持续集成和交付工具自动化部署流程。"
                },
                cloudProviders: {
                  title: "云服务提供商",
                  description: "探索 AWS、GCP 或 Azure 等云平台，部署可扩展的应用。"
                }
              }
            }
          },
          badgeMessages: {
            justBeginning: "刚刚开始",
            gettingStarted: "正在开始",
            halfwayThere: "已经过半！",
            almostThere: "快完成了！",
            master: "路线图大师"
          }
        }
      },
      ru: {
        translation: {
          appName: "Developer Roadmap",
          searchPlaceholder: "Поиск тем дорожной карты...",
          roadmap: {
            frontend: {
              title: "Фронтенд разработка",
              description: "Освойте современную фронтенд разработку с помощью React, TypeScript и ключевых веб-технологий.",
              steps: {
                htmlCss: {
                  title: "Основы HTML & CSS",
                  description: "Изучите базовые принципы веб-разработки с семантическим HTML и современными CSS-техниками."
                },
                jsTs: {
                  title: "JavaScript & TypeScript",
                  description: "Поймите основы программирования с JavaScript и используйте TypeScript для обеспечения типобезопасности."
                },
                react: {
                  title: "React и современные фреймворки",
                  description: "Создавайте динамичные пользовательские интерфейсы с React и изучите управление состоянием, hooks и дизайн компонентов."
                },
                accessibility: {
                  title: "Доступность и производительность веба",
                  description: "Обеспечьте доступность ваших приложений и высокую производительность на различных устройствах."
                }
              }
            },
            backend: {
              title: "Бэкенд разработка",
              description: "Создавайте масштабируемые серверные приложения и API с использованием современных фреймворков и баз данных.",
              steps: {
                nodeExpress: {
                  title: "Node.js & Express",
                  description: "Создавайте серверные приложения с Node.js и фреймворком Express."
                },
                databases: {
                  title: "Базы данных",
                  description: "Изучите SQL и NoSQL базы данных для эффективного хранения и извлечения данных."
                },
                apiDev: {
                  title: "Разработка API & REST",
                  description: "Проектируйте и создавайте надежные RESTful API для связи между сервисами."
                },
                authSecurity: {
                  title: "Аутентификация & Безопасность",
                  description: "Реализуйте безопасную аутентификацию и авторизацию, а также защиту от распространенных уязвимостей."
                }
              }
            },
            devops: {
              title: "DevOps & Облако",
              description: "Узнайте, как развертывать, управлять и масштабировать приложения с помощью современных практик DevOps и облачных сервисов.",
              steps: {
                gitGithub: {
                  title: "Git & GitHub",
                  description: "Освойте контроль версий и совместную разработку с Git и GitHub."
                },
                dockerKubernetes: {
                  title: "Docker & Kubernetes",
                  description: "Контейнеризуйте приложения с Docker и управляйте кластерами с Kubernetes."
                },
                ciCd: {
                  title: "CI/CD & Автоматизация",
                  description: "Автоматизируйте процессы сборки, тестирования и развертывания с помощью CI/CD инструментов."
                },
                cloudProviders: {
                  title: "Облачные провайдеры",
                  description: "Изучите платформы AWS, GCP или Azure для развертывания масштабируемых приложений."
                }
              }
            }
          },
          badgeMessages: {
            justBeginning: "Только начинаем",
            gettingStarted: "Начинаем",
            halfwayThere: "На полпути!",
            almostThere: "Почти готово!",
            master: "Мастер дорожной карты"
          }
        }
      }
    }
  });

export default i18n;
