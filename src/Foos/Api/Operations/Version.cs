﻿using ServiceStack;

namespace Foos.Api.Operations
{
    [Route("/api/version", "GET")]
    public class Version
    {
        public double FullVersion { get { return 1.044; } }
    }

    public class VersionResponse : ResponseStatus
    {
        public Version Result { get; set; }
    }
}
