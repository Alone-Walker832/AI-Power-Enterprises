import { useState, useEffect, useRef } from "react";
import { Bot, Send, X, Sparkles, RefreshCw, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { chatbotFaqs } from "@/data/companyData";
import { cn } from "@/lib/utils";

type Message = {
  id: string;
  role: "bot" | "user";
  text: string;
  time: string;
};

const getFormattedTime = () => {
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};

const initialMessages: Message[] = [
  {
    id: "init-0",
    role: "bot",
    text: "Hello! Welcome to AI Power Enterprises. How can I assist with your IT infrastructure today?",
    time: getFormattedTime(),
  },
];

export function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (open) {
      scrollToBottom();
    }
  }, [messages, isTyping, open]);

  const processQuery = (userQuery: string) => {
    if (!userQuery.trim() || isTyping) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      text: userQuery,
      time: getFormattedTime(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setHasInteracted(true);
    setIsTyping(true);

    setTimeout(() => {
      const lowerQuery = userQuery.toLowerCase();
      const matchedFaq = chatbotFaqs.find(
        (faq) =>
          faq.question.toLowerCase().includes(lowerQuery) ||
          lowerQuery.includes(faq.question.toLowerCase())
      );

      let botResponse = "";
      if (matchedFaq) {
        botResponse = matchedFaq.answer;
      } else if (lowerQuery.includes("contact") || lowerQuery.includes("phone") || lowerQuery.includes("email")) {
        botResponse = "You can reach our enterprise support team 24/7 at support@aipower.com or message us directly on WhatsApp below!";
      } else if (lowerQuery.includes("quote") || lowerQuery.includes("price") || lowerQuery.includes("cost")) {
        botResponse = "For enterprise quotes and custom SLA pricing, please visit our Request Quote section or chat with us on WhatsApp.";
      } else {
        botResponse = "Thank you! For custom IT architecture or hardware SLA queries, our support team is online 24/7. Connect via WhatsApp for an immediate response.";
      }

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "bot",
        text: botResponse,
        time: getFormattedTime(),
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleReset = () => {
    setMessages([
      {
        id: Date.now().toString(),
        role: "bot",
        text: "Conversation restarted. Select a topic below or type your inquiry.",
        time: getFormattedTime(),
      },
    ]);
    setHasInteracted(false);
  };

  return (
    <>
      {/* ─── Floating Trigger Button (Theme-aware, no sky gradient) ─── */}
      {!open && (
        <Button
          onClick={() => setOpen(true)}
          aria-label="Open AI Assistant"
          className="group fixed bottom-24 right-6 z-40 flex h-12 items-center gap-2.5 rounded-full border border-border/40 bg-primary px-4 font-sans text-xs font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 active:scale-95"
        >
          <div className="relative flex items-center justify-center">
            <Bot className="size-4.5 transition-transform duration-300 group-hover:rotate-12" />
            <span className="absolute -top-1 -right-1 flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/80 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-primary-foreground" />
            </span>
          </div>
          <span className="tracking-wide">Ask AI Assistant</span>
          <Sparkles className="size-3.5 text-primary-foreground/80 opacity-80 group-hover:animate-spin" />
        </Button>
      )}

      {/* ─── Chat Widget Window (Theme-aware) ─── */}
      {open && (
        <div
          role="dialog"
          aria-label="AI Assistant Window"
          className={cn(
            "fixed bottom-24 right-6 z-50 flex h-[27rem] w-[min(20.5rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-border/60 bg-background/95 text-foreground shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-4 duration-300",
            "dark:bg-card/95 dark:border-border/40"
          )}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border/50 bg-muted/30 px-3.5 py-3 backdrop-blur-sm">
            <div className="flex items-center gap-2.5">
              <div className="relative flex size-8 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                <Bot className="size-4" />
                <span className="absolute -bottom-0.5 -right-0.5 size-2 rounded-full bg-emerald-400 ring-2 ring-background" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-display text-xs font-bold">AI Power Support</span>
                  <Sparkles className="size-3 text-primary animate-pulse" />
                </div>
                <p className="text-[9px] text-muted-foreground font-medium uppercase tracking-wider">
                  24/7 Automated SLA
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleReset}
                className="size-7 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted"
                title="Reset Conversation"
              >
                <RefreshCw className="size-3.5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpen(false)}
                className="size-7 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted"
                title="Close Chat"
              >
                <X className="size-4" />
              </Button>
            </div>
          </div>

          {/* Messages Scroll Container */}
          <ScrollArea className="flex-1 px-3 py-3">
            <div className="space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex flex-col gap-1 max-w-[88%]",
                    message.role === "user" ? "ml-auto items-end" : "items-start"
                  )}
                >
                  <div
                    className={cn(
                      "rounded-2xl px-3.5 py-2.5 text-xs font-normal leading-relaxed shadow-sm",
                      message.role === "user"
                        ? "rounded-tr-xs bg-primary text-primary-foreground"
                        : "rounded-tl-xs border border-border/50 bg-muted text-muted-foreground"
                    )}
                  >
                    {message.text}
                  </div>
                  <span className="px-1 text-[9px] text-muted-foreground/60">
                    {message.time}
                  </span>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex items-center gap-1.5 max-w-[80%] rounded-2xl rounded-tl-xs border border-border/50 bg-muted px-3.5 py-2.5 text-xs">
                  <span className="size-1.5 animate-bounce rounded-full bg-primary/80 [animation-delay:-0.32s]" />
                  <span className="size-1.5 animate-bounce rounded-full bg-primary/80 [animation-delay:-0.16s]" />
                  <span className="size-1.5 animate-bounce rounded-full bg-primary/80" />
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          {/* Bottom Action Section: Initial FAQs or Active Text Field */}
          <div className="border-t border-border/50 bg-muted/20 p-2.5 backdrop-blur-sm">
            {!hasInteracted ? (
              <div className="space-y-1.5">
                <div className="flex items-center gap-1 px-1 text-[10px] font-semibold text-muted-foreground">
                  <MessageSquare className="size-3 text-primary" />
                  <span>Suggested Quick Questions:</span>
                </div>
                <div className="flex flex-col gap-1">
                  {chatbotFaqs.slice(0, 4).map((faq) => (
                    <button
                      key={faq.question}
                      type="button"
                      onClick={() => processQuery(faq.question)}
                      className="group flex items-center justify-between rounded-lg border border-border/50 bg-background/80 px-2.5 py-1.5 text-left text-[11px] font-medium text-foreground transition-all hover:border-primary/40 hover:bg-primary/10 hover:text-primary active:scale-[0.99]"
                    >
                      <span className="line-clamp-1">{faq.question}</span>
                      <Send className="size-2.5 shrink-0 opacity-40 transition-transform group-hover:translate-x-0.5 group-hover:opacity-100" />
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  processQuery(inputValue);
                }}
                className="flex items-center gap-1.5"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask a question..."
                  className="flex-1 rounded-full border border-border/60 bg-background px-3.5 py-1.5 text-xs text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:ring-1 focus:ring-primary/30"
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={!inputValue.trim() || isTyping}
                  className="size-7 shrink-0 rounded-full bg-primary text-primary-foreground transition-all hover:bg-primary/90 active:scale-95 disabled:opacity-40"
                >
                  <Send className="size-3" />
                </Button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}