interface JukeboxRackProps {
  children: React.ReactNode;
}

export default function JukeboxRack({ children }: JukeboxRackProps) {
  return (
    <div className="relative">
      {/* Warm ambient glow behind the rack */}
      <div
        className="absolute inset-0 -inset-x-8 -inset-y-6 rounded-2xl blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(91, 49, 13, 0.25) 0%, transparent 70%)",
        }}
      />

      {/* Rack frame */}
      <div className="relative rounded-md overflow-hidden" style={{ backgroundColor: "#1a1408" }}>
        {/* Top brass rail */}
        <div
          className="h-[3px]"
          style={{
            background:
              "linear-gradient(180deg, #c9a96e 0%, #8b6d3f 40%, #a0854e 60%, #c9a96e 100%)",
          }}
        />

        {/* Inner rack surface */}
        <div
          className="px-4 py-5 md:px-6 md:py-6 flex flex-col gap-3"
          style={{
            background:
              "linear-gradient(180deg, #1a1408 0%, #231b0f 50%, #1a1408 100%)",
          }}
        >
          {children}
        </div>

        {/* Bottom brass rail */}
        <div
          className="h-[3px]"
          style={{
            background:
              "linear-gradient(180deg, #c9a96e 0%, #8b6d3f 40%, #a0854e 60%, #c9a96e 100%)",
          }}
        />
      </div>
    </div>
  );
}
