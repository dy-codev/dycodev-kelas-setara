{
  description = "Kelas Setara - Open Source Learning Management System";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-24.11";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs {
          inherit system;
        };
      in {
        devShells.default = pkgs.mkShell {
          name = "lms-kelas-setara";

          packages = with pkgs; [
            nodejs_22     # Node + npm
            git           
            direnv        
          ];

          shellHook = ''
            echo "🎓 DevShell Kelas Setara LMS aktif"
            echo "Node: $(node -v)"
            echo "npm : $(npm -v)"
            echo "Siap membangun LMS open-source!"
          '';
        };
      }
    );
}
