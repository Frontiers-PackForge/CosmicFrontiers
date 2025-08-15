---
hide:
  - navigation
  - toc
title: Home
---

# Welcome to Cosmic Frontiers's Wiki!

!!! danger "Work in Progress"
    Please note that this documentation is currently heavily work-in-progress and therefore still missing a lot of content, may at times be severely outdated, or plain incorrect.
    
    If you can't find what you're looking for, feel free to ask us on [our Discord](https://discord.gg/fkxPAq9VQp).

=== "Installation and Migration"
    !!! question
        Due to there being many launchers, the best recommended Experience is Java 21 and Prism Launcher Version 9+. (1)  
          { .annotate }

          1.  This Assumes you have Prism Launcher Version 9.0+


        As long as your launcher supports newer Java versions for MC versions that don't natively support it, you can ignore this.
        However, this guide will be a full setup install of PrismLauncher and Cosmic Frontiers

    # <span style="color:White"> Installing the Pack </span>       

    This guide opperates on using Prism Launcher.

    If you haven't already, download the latest release for your computers build : [Here](https://prismlauncher.org/download/windows/) 

    1. After Installing the Launcher itself, Navigate to the `Add Instance` button.  

    ![Alt text](https://raw.githubusercontent.com/Frontiers-PackForge/CosmicFrontiers/refs/heads/main-1.20.1-Forge/docs/content/assets/prism1.png)

    2. From the left sidebar, click `Curseforge` and navigate to the bar which says `Search and Filter` and type in `Cosmic Frontiers`  
    3. You should see the modpack listed, click on it once, then navigate to the bottom right of the window and click `OK`, it will always install the latest official release.  

    ![Alt text](https://raw.githubusercontent.com/Frontiers-PackForge/CosmicFrontiers/refs/heads/main-1.20.1-Forge/docs/content/assets/prism2.png)
    
    !!! tip
        This Next Image Contains a lot! each step will be detailed below with a reasoning as to "WHY" we are doing this.


      ![Alt text](https://raw.githubusercontent.com/Frontiers-PackForge/CosmicFrontiers/refs/heads/main-1.20.1-Forge/docs/content/assets/prism5.jpg)  

      1. **Java Install**: We want to set our Java to at least `Java 21`. To do this, we need to manually override the Java version the instance uses.
      2. If you haven't already, we're going to need to download a version of `Java 21` for your system. Thankfully, Prism makes this easy.  
      2.5. IF YOU DO NOT SEE JAVA 21, uncheck the `recommended` box at the bottom, select your prefered flavor (I prefer Adoptium Java 21), and install!
      3. **Auto Detect**: After installing Java 21, you can find it in the list of your available Java installs here.
      3. **Skip Java Compatibility Checks**: This may sound scary, but it's perfectly okay — Java 21 will work perfectly fine with Cosmic Frontiers.
      4. **Java Arguments**: Paste in `-XX:+UseZGC -XX:+ZGenerational` and click test. It should now pass!
    
      So, what did we just do? We've done two separate things: we have enabled a more cutting-edge version of Java with a better garbage collector,
      which, in simple terms, clears out unused memory so it can be reused elsewhere. In short — generally better performance for mid-spec systems.


      That should be everything, you're ready to play! Have fun and check out other parts of the wiki if you get lost!



    
=== "Content"

    PlaceHolder (1)
    { .annotate }

    1.  PlaceHolder!